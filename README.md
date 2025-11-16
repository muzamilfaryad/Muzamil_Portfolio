# Muhammad Muzamil Faryad - Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my expertise as a MERN Stack Developer with 10 years of experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Beautiful animations and smooth transitions using Framer Motion
- **Performance Optimized**: Built with Next.js for lightning-fast load times
- **Contact Form**: Integrated contact form with email notifications
- **MongoDB Integration**: Database ready for storing contact messages and analytics
- **SEO Friendly**: Optimized for search engines
- **Project Showcase**: Featuring 5 excellent market-ready projects

## 🛠️ Tech Stack

- **Frontend**: Next.js, React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Node.js, Express.js (API Routes)
- **Database**: MongoDB
- **Email**: Nodemailer
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/muzamilfaryad/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
MONGODB_URI=mongodb+srv://learningsquard_db_user:<db_password>@cluster0.rnxydq8.mongodb.net/portfolio?appName=Cluster0
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/message/RVOEO7OMWGBZA1
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy on Other Platforms

You can also deploy on:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean

## 📝 Configuration

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Component** (`components/Hero.js`):
   - Update name, title, and description
   - Update social media links

2. **About Component** (`components/About.js`):
   - Update bio and statistics

3. **Projects Component** (`components/Projects.js`):
   - Update project details, links, and descriptions

4. **Contact Component** (`components/Contact.js`):
   - Update contact information

### MongoDB Setup

1. Replace `<db_password>` in the MongoDB URI with your actual password
2. Create collections:
   - `contactmessages` - for storing contact form submissions
   - `visitors` - for tracking website visitors

### Email Configuration

1. For Gmail:
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `EMAIL_PASSWORD`

2. For other email providers:
   - Update SMTP settings in `pages/api/contact.js`

## 📂 Project Structure

```
portfolio/
├── components/          # React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   │   └── contact.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── models/            # MongoDB models
│   ├── ContactMessage.js
│   └── Visitor.js
├── lib/               # Utility functions
│   └── mongodb.js
├── styles/            # CSS styles
│   └── globals.css
├── public/            # Static files
│   ├── MuhammadMuzamilFaryad.pdf
│   └── opentowork.png
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors

Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0ea5e9',    // Your primary color
  secondary: '#06b6d4',  // Your secondary color
  dark: '#0f172a',
  darker: '#020617',
}
```

### Fonts

Update fonts in `pages/_app.js` Google Fonts link.

## 📧 Contact

- **WhatsApp**: [Message Me](https://wa.me/message/RVOEO7OMWGBZA1)
- **Email**: muzamil@example.com
- **GitHub**: [@muzamilfaryad](https://github.com/muzamilfaryad)
- **LinkedIn**: [Muhammad Muzamil Faryad](https://linkedin.com/in/muzamilfaryad)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All open-source contributors

---

**Built with ❤️ by Muhammad Muzamil Faryad**
