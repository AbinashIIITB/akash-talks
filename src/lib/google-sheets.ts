import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export interface ContactFormData {
    leadType?: string;
    firstName: string;
    lastName?: string;
    phone: string;
    email?: string;
    message?: string;
    interestedCollege?: string;
    submittedAt: string;
}

/**
 * Appends a new row to the Google Sheet with contact form data
 */
export async function appendToGoogleSheet(data: ContactFormData): Promise<void> {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    // Handle escaped newlines from .env file
    const rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
    const privateKey = rawKey.split(String.raw`\n`).join('\n');

    if (!serviceAccountEmail || !privateKey || !sheetId) {
        console.error('Missing Google Sheets configuration:', {
            hasEmail: !!serviceAccountEmail,
            hasKey: !!privateKey,
            hasSheetId: !!sheetId,
        });
        throw new Error('Missing Google Sheets configuration');
    }

    console.log('Attempting to add row to Google Sheet...');

    try {
        const serviceAccountAuth = new JWT({
            email: serviceAccountEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
        await doc.loadInfo();
        console.log('Loaded spreadsheet:', doc.title);

        // Get the first sheet
        const sheet = doc.sheetsByIndex[0];

        if (!sheet) {
            throw new Error('No sheet found in the document');
        }

        console.log('Found sheet:', sheet.title);

        // Use addRows with raw values array - simpler and more reliable
        // This appends to the end of the sheet without needing header mapping
        const rowValues = [
            data.leadType || 'Contact Us',
            data.firstName,
            data.lastName || '',
            data.phone,
            data.email || '',
            data.message || '',
            data.interestedCollege || '',
            data.submittedAt,
        ];

        // Use the low-level append API
        await sheet.addRows([rowValues]);

        console.log('Successfully added row to Google Sheet');
    } catch (error) {
        console.error('Google Sheets error:', error);
        throw error;
    }
}
