interface EmailTemplateProps {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function generateEmailTemplate({ name, email, phone, subject, message }: EmailTemplateProps): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .email-container {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }
        .email-header {
          background-color: #d97706;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .email-body {
          padding: 20px;
          background-color: #ffffff;
        }
        .email-footer {
          background-color: #f9fafb;
          padding: 15px 20px;
          font-size: 12px;
          color: #6b7280;
          text-align: center;
          border-top: 1px solid #e0e0e0;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-label {
          font-weight: bold;
          margin-bottom: 5px;
          color: #4b5563;
        }
        .field-value {
          background-color: #f9fafb;
          padding: 10px;
          border-radius: 4px;
          border-left: 3px solid #d97706;
        }
        .message-box {
          background-color: #f9fafb;
          padding: 15px;
          border-radius: 4px;
          border-left: 3px solid #d97706;
          margin-top: 20px;
          white-space: pre-line;
        }
        .highlight {
          color: #d97706;
        }
        .button {
          display: inline-block;
          background-color: #d97706;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 4px;
          margin-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>New Contact Form Submission</h1>
          <p>You've received a new message from your website contact form</p>
        </div>
        
        <div class="email-body">
          <div class="field">
            <div class="field-label">Name:</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Phone:</div>
            <div class="field-value">${phone || "Not provided"}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Subject:</div>
            <div class="field-value">${subject}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Message:</div>
            <div class="message-box">${message}</div>
          </div>
          
          <div style="margin-top: 30px; text-align: center;">
            <a href="mailto:${email}" class="button">Reply to ${name}</a>
          </div>
        </div>
        
        <div class="email-footer">
          <p>This email was sent from the contact form on PRKD SONS WELDING AND PUNCTURE website.</p>
          <p>© ${new Date().getFullYear()} PRKD SONS WELDING AND PUNCTURE. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function generateAutoReplyTemplate(name: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .email-container {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }
        .email-header {
          background-color: #d97706;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .logo {
          margin-bottom: 15px;
        }
        .email-body {
          padding: 20px;
          background-color: #ffffff;
        }
        .email-footer {
          background-color: #f9fafb;
          padding: 15px 20px;
          font-size: 12px;
          color: #6b7280;
          text-align: center;
          border-top: 1px solid #e0e0e0;
        }
        .highlight {
          color: #d97706;
          font-weight: bold;
        }
        .contact-info {
          background-color: #f9fafb;
          padding: 15px;
          border-radius: 4px;
          margin-top: 20px;
        }
        .contact-item {
          margin-bottom: 8px;
        }
        .social-links {
          margin-top: 20px;
          text-align: center;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #d97706;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <div class="logo">
            <!-- Logo could be added here -->
            <h2>PRKD SONS</h2>
          </div>
          <h1>Thank You for Contacting Us!</h1>
        </div>
        
        <div class="email-body">
          <p>Dear <span class="highlight">${name}</span>,</p>
          
          <p>Thank you for reaching out to PRKD SONS WELDING AND PUNCTURE. We have received your message and appreciate your interest in our services.</p>
          
          <p>Our team will review your inquiry and get back to you as soon as possible, usually within 24 hours during business days.</p>
          
          <p>If your matter requires immediate attention, please don't hesitate to call us directly.</p>
          
          <div class="contact-info">
            <div class="contact-item"><strong>Phone:</strong> +91 6350291615</div>
            <div class="contact-item"><strong>Email:</strong> sandeepbishnoi9950@gmail.com</div>
            <div class="contact-item"><strong>Address:</strong> PRKD SONS WELDIND AND PUNCHER 14RD, MADASAR, Rajasthan 345028</div>
            <div class="contact-item"><strong>Business Hours:</strong> Mon-Sat: 9:00 AM - 7:00 PM (Sunday: Closed)</div>
          </div>
          
          <p>We look forward to serving you!</p>
          
          <p>Best regards,<br>
          <span class="highlight">Sandeep Bishnoi</span><br>
          PRKD SONS WELDING AND PUNCTURE</p>
          
          <div class="social-links">
            <a href="#">Facebook</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">Twitter</a>
          </div>
        </div>
        
        <div class="email-footer">
          <p>This is an automated response. Please do not reply to this email.</p>
          <p>© ${new Date().getFullYear()} PRKD SONS WELDING AND PUNCTURE. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}
