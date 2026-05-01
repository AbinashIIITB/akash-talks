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
        // Prefix phone with single quote to prevent Google Sheets formula parsing
        const safePhone = data.phone.startsWith('+') ? `'${data.phone}` : data.phone;

        const rowData: Record<string, string | number | boolean> = {};
        
        // Dynamically map fields only if the column exists in the spreadsheet
        const headers = sheet.headerValues || [];
        
        if (headers.includes('Lead Type')) rowData['Lead Type'] = data.leadType || 'Contact Us';
        if (headers.includes('First Name')) rowData['First Name'] = data.firstName;
        if (headers.includes('Last Name')) rowData['Last Name'] = data.lastName || '';
        if (headers.includes('Phone')) rowData['Phone'] = safePhone;
        if (headers.includes('Email')) rowData['Email'] = data.email || '';
        if (headers.includes('Message')) rowData['Message'] = data.message || '';
        
        // Handle variations of 'Interested College' column
        if (headers.includes('Interested College')) {
            rowData['Interested College'] = data.interestedCollege || '';
        } else if (headers.includes('Intrested College')) {
            rowData['Intrested College'] = data.interestedCollege || '';
        } else if (headers.includes('College')) {
            rowData['College'] = data.interestedCollege || '';
        }
        
        if (headers.includes('Submitted At')) rowData['Submitted At'] = data.submittedAt;
        if (headers.includes('Date')) rowData['Date'] = data.submittedAt;

        // Note: We intentionally do NOT set 'Pending' or 'Completed' here.
        // Google Sheets automatically renders empty cells as unchecked checkboxes
        // if the column is formatted as checkboxes. Setting any explicit value
        // (even false) overrides the formatting and renders as text.

        const newRow = await sheet.addRow(rowData);

        console.log('Successfully added row to Google Sheet, row:', newRow?.rowNumber);
    } catch (error) {
        console.error('Google Sheets error:', error);
        throw error;
    }
}
