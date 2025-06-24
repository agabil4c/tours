// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      address,
      address2,
      state,
      zip,
      request,
      title,
      checkin,
      checkout,
      guests
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Booking Request" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Booking Request: ${title}`,
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
    
    <div style="background-color: #0a58ca; color: #fff; padding: 24px 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px;">New Booking Request</h1>
    </div>
    
    <div style="padding: 24px 32px; background-color: #f9f9f9;">
      <h2 style="color: #0a58ca; font-size: 18px; margin-bottom: 12px;">Tour Details</h2>
      <p><strong>Tour:</strong> ${title}</p>
      <p><strong>Check-in:</strong> ${new Date(checkin).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
      <p><strong>Check-out:</strong> ${new Date(checkout).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
      <p><strong>Guests:</strong> ${guests.Adults} Adults, ${guests.Children} Children, ${guests.Rooms} Rooms</p>
      
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;">

      <h2 style="color: #0a58ca; font-size: 18px; margin-bottom: 12px;">Guest Information</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0a58ca;">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address} ${address2}</p>
      <p><strong>State/Zip:</strong> ${state} ${zip}</p>

      ${request ? `
      <div style="margin-top: 24px;">
        <h2 style="color: #0a58ca; font-size: 18px;">Special Requests</h2>
        <div style="background-color: #fff; border-left: 4px solid #0a58ca; padding: 16px; margin-top: 8px; border-radius: 4px; font-style: italic;">
          ${request}
        </div>
      </div>
      ` : ''}
    </div>
    
    <div style="background-color: #f1f1f1; padding: 16px 32px; text-align: center; font-size: 14px; color: #555;">
      <p style="margin: 4px 0;">Received: ${new Date().toLocaleString()}</p>
      <p style="margin: 4px 0;">
        <a href="mailto:${email}" style="color: #0a58ca; text-decoration: underline;">Reply to Guest</a>
      </p>
    </div>
  </div>
`

    };

    

    await transporter.sendMail(mailOptions);
    const guestMailOptions = {
      from: `"${process.env.EMAIL_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your Booking Request for ${title}`,
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
    
    <div style="background-color: #0a58ca; color: #fff; padding: 24px 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px;">Thank You for Your Booking Request</h1>
    </div>
    
    <div style="padding: 24px 32px; background-color: #f9f9f9;">
      <p style="font-size: 16px; color: #333;">Dear ${name},</p>
      <p style="font-size: 16px; color: #333;">
        Thank you for your interest in <strong>${title}</strong>. We have received your booking request and will be in touch shortly with more details.
      </p>

      <h2 style="color: #0a58ca; font-size: 18px; margin-top: 24px;">Summary</h2>
      <p><strong>Check-in:</strong> ${new Date(checkin).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
      <p><strong>Check-out:</strong> ${new Date(checkout).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
      <p><strong>Guests:</strong> ${guests.Adults} Adults, ${guests.Children} Children, ${guests.Rooms} Rooms</p>

      ${request ? `
      <div style="margin-top: 24px;">
        <h2 style="color: #0a58ca; font-size: 18px;">Your Special Request</h2>
        <div style="background-color: #fff; border-left: 4px solid #0a58ca; padding: 16px; margin-top: 8px; border-radius: 4px; font-style: italic;">
          ${request}
        </div>
      </div>
      ` : ''}

      <p style="margin-top: 32px; font-size: 16px;">We look forward to hosting you!</p>
      <p style="font-size: 16px;">Warm regards</p>
    </div>

    <div style="background-color: #f1f1f1; padding: 16px 32px; text-align: center; font-size: 14px; color: #555;">
      <p style="margin: 4px 0;">Sent on: ${new Date().toLocaleString()}</p>
      <p style="margin: 4px 0;">Contact us: <a href="mailto:${process.env.EMAIL_USER}" style="color: #0a58ca;">${process.env.EMAIL_USER}</a></p>
    </div>
  </div>
`

    };
    await transporter.sendMail(guestMailOptions);

    return NextResponse.json({ message: 'Booking request sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
