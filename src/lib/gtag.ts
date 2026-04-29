export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18090757488';

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
    }
}

export const trackConversion = (url?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        // Track Google Ads Conversion
        window.gtag('event', 'conversion', {
            'send_to': 'AW-18090757488/NBb1CP7MopwcEPCarLJD',
            'value': 1.0,
            'currency': 'INR',
            'event_callback': () => {
                if (url) {
                    window.location.href = url;
                }
            }
        });

        // Track standard lead generation event (works for both GA4 and Google Ads)
        window.gtag('event', 'generate_lead', {
            'event_category': 'form_submit',
            'event_label': 'Lead Form Submission'
        });
    }
};
