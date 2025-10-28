import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return Response.json({ 
        success: false,
        error: 'All fields are required' 
      }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER, // Send from your Gmail
      to: process.env.RECIPIENT_EMAIL, // Send to another email
      subject: `New Contact Form Submission - ${service}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #667eea; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #667eea; }
        .value { margin-top: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Website Contact Form</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
            </div>
            <div class="field">
                <div class="label">Service:</div>
                <div class="value">${service}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="value" style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin-top: 10px;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            </div>
            <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <div class="label">Submission Time:</div>
                <div class="value">${new Date().toLocaleString()}</div>
            </div>
        </div>
    </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ 
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ 
      success: false,
      error: 'Failed to send email' 
    }, { status: 500 });
  }
}