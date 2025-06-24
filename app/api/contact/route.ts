// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Using your domain email as sender
      replyTo: email, // So replies go to the actual submitter
      to: process.env.EMAIL_TO,
      subject: `New Contact Message: ${subject || 'No Subject'}`,
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #333; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">

    <!-- Header -->
    <div style="background-color: #0a58ca; padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
    </div>

    <!-- Content -->
    <div style="padding: 28px; background-color: #f4f7fb;">
      <div style="background-color: #ffffff; border-radius: 6px; padding: 24px; border: 1px solid #e6e6e6;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 30%;"><strong>From:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
              <a href="mailto:${email}" style="color: #0a58ca; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${subject ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${subject}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px 0;"><strong>Received:</strong></td>
            <td style="padding: 10px 0;">${new Date().toLocaleString()}</td>
          </tr>
        </table>

        <!-- Message -->
        <div style="margin-top: 24px;">
          <h3 style="color: #0a58ca; margin-bottom: 12px; font-size: 17px;">Message</h3>
          <div style="background: #f8f9fa; padding: 16px; border-left: 4px solid #0a58ca; border-radius: 4px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      </div>

      <!-- Action -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${email}" style="background-color: #0a58ca; color: white; padding: 12px 22px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          Reply to ${name}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #eaeaea; padding: 16px; text-align: center; font-size: 13px; color: #666;">
      <p style="margin: 0;">This message was submitted via your website: <strong>${process.env.WEBSITE_NAME || 'your website'}</strong></p>
      <p style="margin: 5px 0 0;">
        <a href="${process.env.WEBSITE_URL || '#'}" style="color: #0a58ca; text-decoration: underline;">Visit Website</a>
      </p>
    </div>

  </div>
`

    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
