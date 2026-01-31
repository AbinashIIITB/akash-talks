import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export interface ContactFormData {
    firstName: string;
    lastName?: string;
    phone: string;
    email?: string;
    message?: string;
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
        throw new Error('Missing Google Sheets configuration');
    }

    const serviceAccountAuth = new JWT({
        email: serviceAccountEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();

    // Get the first sheet or create one
    let sheet = doc.sheetsByIndex[0];

    if (!sheet) {
        sheet = await doc.addSheet({
            title: 'Contact Form Submissions',
            headerValues: ['First Name', 'Last Name', 'Phone', 'Email', 'Message', 'Submitted At'],
        });
    }

    // Ensure headers exist
    await sheet.loadHeaderRow().catch(async () => {
        await sheet.setHeaderRow(['First Name', 'Last Name', 'Phone', 'Email', 'Message', 'Submitted At']);
    });

    // Add the new row
    await sheet.addRow({
        'First Name': data.firstName,
        'Last Name': data.lastName || '',
        'Phone': data.phone,
        'Email': data.email || '',
        'Message': data.message || '',
        'Submitted At': data.submittedAt,
    });
}
