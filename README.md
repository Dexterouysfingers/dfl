# DFL - Agri-FoodTech Solutions

A modern, responsive full-stack website and platform for DFL (Dexterous Fingers Limited), an Agri-FoodTech company providing smart tools for agriculture and food manufacturing in Africa.

## 🌟 Features

### 🏠 Landing Pages
- **Homepage** with compelling hero section, features, and call-to-action
- **About page** with company vision, mission, and impact metrics
- **Solutions page** with detailed sections for Farmers, Processors, and NGOs
- **Contact page** with working form and company information

### 🔐 User Authentication
- **Google OAuth** integration via Supabase
- **Protected dashboard** with user session management
- **Automatic redirects** for authenticated/unauthenticated users

### 📊 User Dashboard
- **Welcome section** with user information
- **Quick stats** showing key metrics
- **Recent activity** feed
- **Quick actions** for common tasks
- **Responsive design** for all devices

### 📝 MDX Blog System
- **Blog homepage** displaying all posts from `/content/blog/`
- **Individual blog pages** with full MDX support
- **Frontmatter metadata** (title, date, author, tags, etc.)
- **Responsive blog cards** with excerpts and metadata

### 📬 Contact Form
- **Form validation** using React Hook Form + Zod
- **Supabase integration** for data storage
- **Success/error handling** with user feedback
- **Responsive design** with proper accessibility

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Blog**: MDX with gray-matter
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
├── app/
│   ├── layout.js              # Root layout with metadata
│   ├── page.js                # Homepage
│   ├── about/page.js          # About page
│   ├── solutions/page.js      # Solutions page
│   ├── contact/page.js        # Contact page with form
│   ├── login/page.js          # Google OAuth login
│   ├── dashboard/page.js      # Protected user dashboard
│   ├── logout/page.js         # Logout handler
│   ├── blog/page.js           # Blog listing page
│   ├── blog/[slug]/page.js    # Individual blog posts
│   ├── api/contact/route.js   # Contact form API
│   └── globals.css            # Global styles
├── components/
│   ├── Navbar.js              # Navigation component
│   └── Footer.js              # Footer component
├── lib/
│   ├── supabase.js            # Supabase client
│   └── mdx.js                 # MDX utilities
├── content/
│   └── blog/                  # MDX blog posts
├── public/                    # Static assets
└── package.json               # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dfl-agrifoodtech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Set up Supabase**
   - Create a new Supabase project
   - Enable Google OAuth in Authentication settings
   - Create a `contacts` table with the following schema:
     ```sql
     CREATE TABLE contacts (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       message TEXT NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );
     ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Blog System

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter metadata:
   ```mdx
   ---
   title: "Your Post Title"
   date: "2024-01-15"
   excerpt: "Brief description of the post"
   author: "Author Name"
   authorTitle: "Author Title"
   readTime: "5 min read"
   tags: ["tag1", "tag2"]
   ---
   
   # Your content here
   ```

3. The post will automatically appear on the blog page

### Frontmatter Options

- `title`: Post title (required)
- `date`: Publication date (required)
- `excerpt`: Brief description for preview
- `author`: Author name
- `authorTitle`: Author's title/role
- `readTime`: Estimated reading time
- `tags`: Array of tags for categorization
- `image`: Featured image URL (optional)

## 🎨 Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:
```js
colors: {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    // ... other shades
    900: '#14532d',
  },
}
```

### Components
All components are built with Tailwind CSS and can be easily customized by modifying the classes or extending the design system.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 API Routes

### Contact Form (`/api/contact`)
- **Method**: POST
- **Body**: `{ name, email, message }`
- **Response**: Success/error message
- **Storage**: Supabase `contacts` table

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@dexterousfingersltd.com or create an issue in the repository.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Supabase](https://supabase.com/) for backend services
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React Hook Form](https://react-hook-form.com/) for form handling

---

Built with ❤️ for African agriculture 