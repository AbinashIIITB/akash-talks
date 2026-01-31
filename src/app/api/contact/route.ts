import { NextRequest, NextResponse } from 'next/server';
import { appendToGoogleSheet } from '@/lib/google-sheets';
import { sendEmailNotification, sendTelegramNotification, sendWhatsAppNotification } from '@/lib/notifications';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        const { firstName, phone } = body;

        if (!firstName || !phone) {
            return NextResponse.json(
                { error: 'First name and phone number are required' },
                { status: 400 }
            );
        }

        const formData = {
            firstName: body.firstName,
            lastName: body.lastName || '',
            phone: body.phone,
            email: body.email || '',
            message: body.message || '',
            submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        };

        // Run all operations in parallel for faster response
        const results = await Promise.allSettled([
            appendToGoogleSheet(formData),
            sendEmailNotification(formData),
            sendTelegramNotification(formData),
            sendWhatsAppNotification(formData),
        ]);

        // Log any failures but don't fail the request
        results.forEach((result, index) => {
            if (result.status === 'rejected') {
                const operations = ['Google Sheets', 'Email', 'Telegram', 'WhatsApp'];
                console.error(`${operations[index]} operation failed:`, result.reason);
            }
        });

        // Check if at least Google Sheets succeeded
        if (results[0].status === 'rejected') {
            return NextResponse.json(
                { error: 'Failed to save your submission. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Thank you! We will contact you soon.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
