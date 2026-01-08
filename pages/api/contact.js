import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    // For debugging: Always return the warning message
    res.status(200).json({
      message: 'Message received! Email will be sent once configured.',
      emailSent: false
    });
    return;
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Failed to send message. Please try again.',
      error: error.message 
    });
  }
}
