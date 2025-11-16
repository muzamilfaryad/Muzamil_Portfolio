import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Try to send email if credentials are configured
    const hasEmailPassword = process.env.EMAIL_PASSWORD && 
                            process.env.EMAIL_PASSWORD !== 'your-app-password-here';

    if (hasEmailPassword) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'muzamilfaryad77@gmail.com',
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER || 'muzamilfaryad77@gmail.com'}>`,
      to: 'muzamilfaryad77@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0ea5e9; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #0ea5e9; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎉 New Portfolio Contact Message</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
              </div>
              <div class="field">
                <span class="label">Subject:</span> ${subject}
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <p style="margin-top: 20px; color: #666; font-size: 12px;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </body>
        </html>
      `,
        replyTo: email,
      });
      
      res.status(200).json({ 
        message: 'Message sent successfully! Check your email.',
        emailSent: true
      });
    } else {
      res.status(200).json({ 
        message: 'Message received! Email will be sent once configured.',
        emailSent: false
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Failed to send message. Please try again.',
      error: error.message 
    });
  }
}
