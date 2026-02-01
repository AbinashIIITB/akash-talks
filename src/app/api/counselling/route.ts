import { NextRequest, NextResponse } from 'next/server';
import { appendToGoogleSheet } from '@/lib/google-sheets';
import { sendEmailNotification, sendTelegramNotification } from '@/lib/notifications';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { fullName, phone } = body;

        if (!fullName || !phone) {
            return NextResponse.json(
                { error: 'Full name and phone number are required' },
                { status: 400 }
            );
        }

        // Split full name into first and last
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        const formData = {
            leadType: 'Free Counselling',
            firstName,
            lastName,
            phone,
            email: '',
            message: '',
            interestedCollege: '',
            submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        };

        // Run all operations in parallel
        const results = await Promise.allSettled([
            appendToGoogleSheet(formData),
            sendEmailNotification(formData),
            sendTelegramNotification(formData),
        ]);

        // Log any failures
        results.forEach((result, index) => {
            if (result.status === 'rejected') {
                const operations = ['Google Sheets', 'Email', 'Telegram'];
                console.error(`${operations[index]} operation failed:`, result.reason);
            }
        });

        // Check if Google Sheets succeeded
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
        console.error('Counselling form error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
