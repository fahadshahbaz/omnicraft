# Omnicraft 📚🎨

**Your ultimate resource hub for web design and development!**  
Explore a collection of design resources, icons, UI libraries, and much more, all curated to simplify your creative process and supercharge your projects.

## **✨ Key Features**

📌 **Diverse Resources**: Access high-quality icons, UI libraries, and design elements.  
📌 **Organized Categories**: Find exactly what you need with well-structured collections.  
📌 **User-Friendly Interface**: Enjoy a clean, modern, and intuitive browsing experience.  
📌 **Always Evolving**: Regularly updated with fresh content to keep you inspired.

## **🛠 Technologies Used**

- **Frontend**: React.js (Next.js), Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

## **🎯 Purpose**

Omnicraft aims to be a one-stop destination for developers, designers, and creative minds looking for ready-to-use resources to enhance their projects. Whether you're building a website or creating a design masterpiece, Omnicraft has something for you!

## **🚀 Getting Started**

### **Clone the Repository**

```bash
git clone https://github.com/fahadshahbaz/OmniCraft.git
```

### **Install Dependencies**

Make sure you have **pnpm** installed. Then, run the following:

```bash
pnpm install
```

### **Environment Variables**

Create a `.env.local` file in the root directory and add your Supabase credentials (see `.env.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

### **Database Setup (Optional for Contributors)**

The project fetches resources from a Supabase table named `resources`. To contribute or test with local data, refer to the structure in `src/data/index.sample.js`.

### **Run the Development Server**

Start the server with:

```bash
pnpm dev
```

## **🌐 Live Demo**

Check out the live version of Omnicraft: [omnicraft](https://omnicraft.vercel.app)

<!-- ## **📬 Feedback and Contributions**
Got ideas to make Omnicraft even better? Share your feedback or contribute by [opening an issue](https://github.com/fahadshahbaz123/omnicraft/issues) or submitting a pull request. -->

## **📜 License**

This project is licensed under the MIT License.

Happy Crafting! ✨
