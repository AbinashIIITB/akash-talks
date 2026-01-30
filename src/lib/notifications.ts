import { Resend } from 'resend';

export interface ContactFormData {
    firstName: string;
    lastName?: string;
    phone: string;
    email?: string;
    message?: string;
    submittedAt: string;
}

/**
 * Send email notification to admin about new contact form submission
 */
export async function sendEmailNotification(data: ContactFormData): Promise<void> {
    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!resendApiKey || !adminEmail) {
        console.warn('Email notification skipped: Missing RESEND_API_KEY or ADMIN_EMAIL');
        return;
    }

    try {
        const resend = new Resend(resendApiKey);

        const result = await resend.emails.send({
            from: 'Akash Talks <onboarding@resend.dev>',
            to: adminEmail,
            subject: `New Contact Form Submission from ${data.firstName}`,
            html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName || ''}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message || 'No message'}</p>
          <hr>
          <p><small>Submitted at: ${data.submittedAt}</small></p>
        `,
        });

        if (result.error) {
            console.error('Resend email error:', result.error);
        } else {
            console.log('Email sent successfully:', result.data?.id);
        }
    } catch (error) {
        console.error('Email notification failed:', error);
    }
}

/**
 * Send Telegram notification to admin
 * 
 * To set up:
 * 1. Message @BotFather on Telegram and create a bot
 * 2. Get the bot token
 * 3. Start a chat with your bot and get your chat ID
 */
export async function sendTelegramNotification(data: ContactFormData): Promise<void> {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.warn('Telegram notification skipped: Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
        return;
    }

    const message =
        `🔔 *New Contact Form Submission*\n\n` +
        `👤 *Name:* ${data.firstName} ${data.lastName || ''}\n` +
        `📞 *Phone:* ${data.phone}\n` +
        `📧 *Email:* ${data.email || 'Not provided'}\n` +
        `💬 *Message:* ${data.message || 'No message'}\n\n` +
        `🕐 ${data.submittedAt}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
        }),
    });

    if (!response.ok) {
        console.error('Telegram notification failed:', await response.text());
    }
}
