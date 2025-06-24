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
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Welcome to Riverwide Trekkers Safaris!`,
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 640px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <div style="background-color: #0a58ca; padding: 30px 20px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Welcome to Riverwide Trekkers Safaris!</h1>
    </div>
    
    <!-- Body -->
    <div style="padding: 30px; background-color: #f9f9f9;">
      <h2 style="color: #0a58ca; font-size: 20px; margin-top: 0;">Adventure Awaits</h2>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
        Thank you for subscribing! You’re officially part of our tribe of nature lovers, thrill-seekers, and adventure travelers.
      </p>
      <p style="font-size: 16px;">Here’s what you’ll receive:</p>
      <ul style="padding-left: 20px; margin-bottom: 25px; font-size: 16px;">
        <li>🌍 Exclusive travel deals and offers</li>
        <li>🦁 Insider safari planning tips</li>
        <li>🚐 Early access to new tour launches</li>
        <li>🌄 Destination highlights & travel inspiration</li>
      </ul>

      <div style="text-align: center; margin: 30px 0;">
        <a href="https://www.riverwidesafaris.com/" style="background-color: #0a58ca; color: white; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold; display: inline-block;">
          🌍 Explore Our Tours
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #e9e9e9; padding: 20px; text-align: center; font-size: 14px; color: #555;">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Riverwide Trekkers Safaris. All rights reserved.</p>
      <p style="margin: 10px 0 0;">
        <a href="#" style="color: #0a58ca; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
        <a href="#" style="color: #0a58ca; text-decoration: none; margin: 0 10px;">Unsubscribe</a>
      </p>
    </div>
  </div>
`

    };

    const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO, // Make sure to set this in your environment variables
    subject: `New Newsletter Subscriber: ${email}`,
    html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 640px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <div style="background-color: #0a58ca; padding: 30px 20px; text-align: center;">
      <h1 style="color: white; font-size: 22px; margin: 0;">📰 New Newsletter Subscriber</h1>
    </div>
    
    <!-- Body -->
    <div style="padding: 30px; background-color: #f9f9f9;">
      <p style="font-size: 16px; margin: 0;">A new subscriber just joined your mailing list:</p>
      
      <div style="background-color: #fff; border: 1px solid #ddd; padding: 20px; margin-top: 20px; border-radius: 6px;">
        <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 10px 0 0; font-size: 16px;"><strong>Subscribed on:</strong> ${new Date().toLocaleString()}</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #e9e9e9; padding: 20px; text-align: center; font-size: 14px; color: #555;">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Riverwide Trekkers Safaris</p>
    </div>
  </div>
`,
  };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
