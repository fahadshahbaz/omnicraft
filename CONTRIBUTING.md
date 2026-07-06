# Contributing to OmniCraft

Thank you for your interest in contributing to OmniCraft! We welcome contributions from the community to help make this curated resource hub even better.

Please take a moment to review these guidelines before you get started.

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, welcoming, and collaborative environment for all contributors.

---

## Local Development Setup

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (Package manager used for this repository)
- **MongoDB Atlas** (For hosting your local copy of resources, or you can use a local MongoDB instance)

### Setup Steps

1. **Fork and Clone the Repository**
   Fork the repository on GitHub and clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/OmniCraft.git
   cd OmniCraft
   ```

2. **Install Dependencies**
   Use `pnpm` to install dependencies:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**
   Copy the example environment file and fill in your connection details:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and set `MONGODB_URI` to your actual MongoDB connection string.

4. **Run the Development Server**
   Start the dev server:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Code Style & Formatting

We use **Biome** for fast linting and formatting. Before submitting any changes, make sure your code adheres to the project standards:

- **Lint Code**:
  ```bash
  pnpm lint
  ```
- **Format Code**:
  ```bash
  pnpm format
  ```
  *(This will format the code and write the changes back to your files)*

---

## Contribution Workflow

1. **Create a Branch**
   Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Commit Your Changes**
   Write clear, descriptive commit messages. Ensure no sensitive credentials or temporary files are tracked.

3. **Verify and Test**
   Ensure the application builds successfully:
   ```bash
   pnpm build
   ```

4. **Push and Open a Pull Request**
   Push your branch to your fork and open a Pull Request (PR) against our `main` branch. Provide a detailed summary of your changes in the PR description using our template.
