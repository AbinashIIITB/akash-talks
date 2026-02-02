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
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !privateKey || !sheetId) {
        console.error('Missing Google Sheets configuration:', {
            hasEmail: !!serviceAccountEmail,
            hasKey: !!privateKey,
            hasSheetId: !!sheetId,
        });
        throw new Error('Missing Google Sheets configuration');
    }

    try {
        const serviceAccountAuth = new JWT({
            email: serviceAccountEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
        await doc.loadInfo();

        // Get the first sheet
        const sheet = doc.sheetsByIndex[0];

        if (!sheet) {
            throw new Error('No sheet found in the document');
        }

        // Load header row to ensure proper column mapping
        await sheet.loadHeaderRow();

        // Add the new row with all columns matching header names exactly
        await sheet.addRow({
            'Lead Type': data.leadType || 'Contact Us',
            'First Name': data.firstName,
            'Last Name': data.lastName || '',
            'Phone': data.phone,
            'Email': data.email || '',
            'Message': data.message || '',
            'Intrested College': data.interestedCollege || '',
            'Submitted At': data.submittedAt,
        });

        console.log('Successfully added row to Google Sheet');
    } catch (error) {
        console.error('Google Sheets error:', error);
        throw error;
    }
}
