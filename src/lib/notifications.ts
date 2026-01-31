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

/**
 * Send WhatsApp notification to admin using UltraMsg API
 * 
 * To set up (FREE tier available):
 * 1. Go to https://ultramsg.com and create a free account
 * 2. Create an instance and link your WhatsApp (scan QR code)
 * 3. Get your Instance ID and Token from the dashboard
 * 4. Add these environment variables:
 *    - ULTRAMSG_INSTANCE_ID (e.g., "instance12345")
 *    - ULTRAMSG_TOKEN (your API token)
 *    - WHATSAPP_ADMIN_PHONE (your phone with country code, e.g., "919874878782")
 */
export async function sendWhatsAppNotification(data: ContactFormData): Promise<void> {
    const instanceId = process.env.ULTRAMSG_INSTANCE_ID;
    const token = process.env.ULTRAMSG_TOKEN;
    const adminPhone = process.env.WHATSAPP_ADMIN_PHONE;

    if (!instanceId || !token || !adminPhone) {
        console.warn('WhatsApp notification skipped: Missing ULTRAMSG_INSTANCE_ID, ULTRAMSG_TOKEN, or WHATSAPP_ADMIN_PHONE');
        return;
    }

    const message =
        `🔔 *New Contact Form Submission*\n\n` +
        `👤 *Name:* ${data.firstName} ${data.lastName || ''}\n` +
        `📞 *Phone:* ${data.phone}\n` +
        `📧 *Email:* ${data.email || 'Not provided'}\n` +
        `💬 *Message:* ${data.message || 'No message'}\n\n` +
        `🕐 ${data.submittedAt}`;

    const url = `https://api.ultramsg.com/${instanceId}/messages/chat`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                token: token,
                to: adminPhone,
                body: message,
            }),
        });

        const result = await response.json();

        if (result.sent === 'true' || result.sent === true) {
            console.log('WhatsApp notification sent successfully');
        } else {
            console.error('WhatsApp notification failed:', result);
        }
    } catch (error) {
        console.error('WhatsApp notification error:', error);
    }
}

