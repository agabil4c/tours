// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      country,
      destinations,
      safariType,
      travelDate,
      duration,
      travelers,
      accommodation,
      subject,
      message,
    } = await req.json();

    const destinationList = Array.isArray(destinations)
      ? destinations.join(', ')
      : destinations || '';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `${subject || 'New Safari Inquiry & Trip Plan'} - ${name}`,
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #0b1c33; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">

    <!-- Header -->
    <div style="background-color: #2b72b8; padding: 26px 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px;">New Safari Inquiry &amp; Trip Plan</h1>
      <p style="color: #e8f3fc; margin: 6px 0 0; font-size: 14px;">Riverwide Trekkers Safaris</p>
    </div>

    <!-- Content -->
    <div style="padding: 28px; background-color: #f6f9fd;">
      <div style="background-color: #ffffff; border-radius: 8px; padding: 24px; border: 1px solid #dce6f2;">
        <h3 style="color: #2b72b8; margin-top: 0; margin-bottom: 14px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Traveler Details</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc; width: 36%;"><strong>Full Name:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Email:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">
              <a href="mailto:${email}" style="color: #2b72b8; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Phone / WhatsApp:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${phone}</td>
          </tr>
          ` : ''}
          ${country ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Country:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${country}</td>
          </tr>
          ` : ''}
        </table>

        <h3 style="color: #2b72b8; margin-top: 24px; margin-bottom: 14px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Trip Preferences</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          ${destinationList ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc; width: 36%;"><strong>Destinations:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${destinationList}</td>
          </tr>
          ` : ''}
          ${safariType ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Safari Experience:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${safariType}</td>
          </tr>
          ` : ''}
          ${travelDate ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Preferred Date:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${travelDate}</td>
          </tr>
          ` : ''}
          ${duration ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Duration:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${duration}</td>
          </tr>
          ` : ''}
          ${travelers ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Travelers:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${travelers}</td>
          </tr>
          ` : ''}
          ${accommodation ? `
          <tr>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;"><strong>Accommodation Style:</strong></td>
            <td style="padding: 9px 0; border-bottom: 1px solid #eef5fc;">${accommodation}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 9px 0;"><strong>Submitted On:</strong></td>
            <td style="padding: 9px 0;">${new Date().toLocaleString()}</td>
          </tr>
        </table>

        <!-- Message -->
        <div style="margin-top: 24px;">
          <h3 style="color: #2b72b8; margin-bottom: 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Safari Vision &amp; Notes</h3>
          <div style="background: #f6f9fd; padding: 16px; border-left: 4px solid #2b72b8; border-radius: 4px; line-height: 1.6;">
            ${(message || '').replace(/\n/g, '<br/>')}
          </div>
        </div>
      </div>

      <!-- Action -->
      <div style="text-align: center; margin-top: 26px;">
        <a href="mailto:${email}" style="background-color: #2b72b8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          Reply to ${name}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #eef5fc; padding: 16px; text-align: center; font-size: 13px; color: #4a5d73;">
      <p style="margin: 0;">Submitted via <strong>${process.env.WEBSITE_NAME || 'Riverwide Trekkers Safaris'}</strong></p>
      <p style="margin: 5px 0 0;">
        <a href="${process.env.WEBSITE_URL || 'https://www.riverwidesafaris.com'}" style="color: #2b72b8; text-decoration: underline;">Visit Website</a>
      </p>
    </div>

  </div>
`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
