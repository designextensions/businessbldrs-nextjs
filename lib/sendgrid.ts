import { MailService } from '@sendgrid/mail';

let mailService: MailService | null = null;

if (process.env.SENDGRID_API_KEY) {
  mailService = new MailService();
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!mailService) {
    console.warn('SendGrid not configured - email sending skipped');
    return false;
  }

  try {
    const emailData: Record<string, unknown> = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };
    if (params.text) emailData.text = params.text;
    if (params.html) emailData.html = params.html;

    await mailService.send(emailData as unknown as Parameters<typeof mailService.send>[0]);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}
