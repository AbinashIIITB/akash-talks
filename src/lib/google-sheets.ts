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
 * Sheet structure:
 * - Row 1: Title (ignored)
 * - Row 2: Headers (Lead Type, First Name, Last Name, Phone, Email, Message, Intrested College, Submitted At)
 * - Row 3+: Data entries
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

        // Load the header row (row 2, which is index 1 in the API)
        // The headerRowIndex parameter tells it which row has headers (1-indexed, so 2 means row 2)
        await sheet.loadHeaderRow(2);
        console.log('Headers:', sheet.headerValues);

        // Now add the row using header-based mapping
        // This will append after the last row with data
        const newRow = await sheet.addRow({
            'Lead Type': data.leadType || 'Contact Us',
            'First Name': data.firstName,
            'Last Name': data.lastName || '',
            'Phone': data.phone,
            'Email': data.email || '',
            'Message': data.message || '',
            'Intrested College': data.interestedCollege || '',
            'Submitted At': data.submittedAt,
        });

        console.log('Successfully added row to Google Sheet, row:', newRow?.rowNumber);
    } catch (error) {
        console.error('Google Sheets error:', error);
        throw error;
    }
}
