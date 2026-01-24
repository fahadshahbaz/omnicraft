# Omnicraft

Omnicraft is a curated resource hub designed for web designers and developers. It provides a centralized collection of high-quality design assets, UI libraries, and development tools to streamline the creative process and accelerate project delivery.

## Key Features

- **Curated Resources**: Access a handpicked selection of icons, UI libraries, and design elements.
- **Structured Categories**: Navigate through organized collections to find specific tools quickly.
- **Optimized User Interface**: A clean, intuitive interface designed for efficient browsing.
- **Regular Updates**: The library is continuously expanded with modern, relevant resources.

## Tech Stack

- **Frontend**: React.js with Next.js
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

## Project Purpose

Omnicraft was developed to solve the challenge of resource fragmentation. By consolidating the best web resources into a single, searchable platform, it serves as a reliable starting point for any digital project, from minimal landing pages to complex web applications.

## Getting Started

### Prerequisites

Ensure you have **pnpm** installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fahadshahbaz/OmniCraft.git
   ```

2. Install the necessary dependencies:
   ```bash
   pnpm install
   ```

### Configuration

Create a `.env.local` file in the root directory and configure your Supabase credentials. Refer to `.env.example` for the required structure:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

### Contribution & Database Setup

The application fetches data from a Supabase table named `resources`. For local testing or contributions, you can reference the expected data structure in `src/data/index.sample.js`.

### Development

Run the development server:

```bash
pnpm dev
```

## Live Deployment

The live version of the application can be accessed at: [omnicraft.vercel.app](https://omnicraft.vercel.app)

## License

This project is licensed under the MIT License.
