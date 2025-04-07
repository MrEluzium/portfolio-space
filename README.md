![Title](.github/space-title.png)

<!-- Badges -->
<p>
  <a href="https://app.netlify.com/sites/elzzz-portfolio/deploys">
    <img src="https://api.netlify.com/api/v1/badges/fe0839b1-8ff9-4775-9cf2-8cf6f5328793/deploy-status" alt="Netlify Status" />
  </a>
  <a href="https://astro.build">
    <img src="https://astro.badg.es/v2/built-with-astro/tiny.svg" alt="Built with Astro" width="120" height="20">
  </a>
  <a href="https://www.gnu.org/licenses/agpl-3.0">
    <img src="https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=flat-square" alt="License: AGPL v3">
  </a>
</p>

---

## Description

My personal portfolio website as a Gameplay Developer specializing in Unreal Engine. The site showcases work experience, personal and professional projects, and contact information.

Built with [Astro](https://astro.build/) for optimal performance and a modern development experience, this static site is designed to be easily updatable by modifying YAML data file.

## ✨ Features

*   Responsive design adapting to desktop, tablet, and mobile views.
*   Dynamic content loading for experience and projects from a central YAML file (`src/data/portfolioData.yaml`).
*   Project cards with details, role descriptions, tech tags, and external links with icons.
*   Smooth scrolling navigation.

## 🚀 Tech Stack

*   **Framework:** [Astro](https://astro.build/)
*   **Data:** YAML (`yaml` package)
*   **Styling:** Plain CSS
*   **Deployment:** [Netlify](https://www.netlify.com/)

## 🛠️ Getting Started / Local Setup

Follow these steps to run the project locally for development or testing:

1.  **Prerequisites:**
    *   Node.js (LTS version recommended - check Astro docs for current requirements)
    *   npm (comes with Node.js)

2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/MrEluzium/portfolio-space.git 
    cd portfolio-space
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start the Astro development server, typically available at `http://localhost:4321`.

5.  **Editing Content:**
    *   Most site content (experience, projects, contact info, UI text) can be edited directly in the `src/data/portfolioData.yaml` file.
    *   The development server will usually automatically rebuild when you save changes to this file.

## ☁️ Deployment

This project is designed to be easily deployable on [Netlify](https://www.netlify.com/). Follow these steps to deploy your own portfolio using this template:

1.  **Fork the Repository:**
    *   Click the "Fork" button at the top-right of this page on GitHub. This creates your own copy of the repository under your GitHub account.

2.  **Clone Your Fork Locally:**
    *   Clone the repository *you just forked* to your local machine:
        ```bash
        # Replace <YourGitHubUsername> with your actual username
        git clone https://github.com/<YourGitHubUsername>/portfolio-space.git
        cd portfolio-space 
        ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Customize the Content:**
    *   **Crucial:** Edit `src/data/portfolioData.yaml`. Replace all the example content (experience, projects, contact info, tagline, UI strings) with **your own personal information and translations**.
    *   Replace the profile picture (`src/assets/head.jpg`) with your own photo. Ensure the filename matches the import in `src/pages/index.astro`.
    *   Replace the favicon files in `public/favicons/` with your own icons. Update the paths in `src/layouts/Layout.astro` and `public/site.webmanifest` if needed.
    *   Replace or remove the project link icons in `public/icons/` and update the corresponding `icon` fields in `portfolioData.yaml`.
    *   (Optional) Modify the CSS in `src/styles/global.css` or component styles to change colors, fonts, or layout to your liking.

5.  **Test Locally:**
    *   Run the development server to check your changes:
        ```bash
        npm run dev
        ```
    *   Perform a production build and preview locally to catch any issues:
        ```bash
        npm run build
        npm run preview
        ```

6.  **Commit and Push Changes to Your Fork:**
    *   Stage and commit all your modifications:
        ```bash
        git add .
        git commit -m "Customize portfolio content and assets"
        ```
    *   Push the changes to *your forked repository* on GitHub:
        ```bash
        git push origin main 
        ```

7.  **Deploy to Netlify:**
    *   Log in to your [Netlify](https://www.netlify.com/) account.
    *   Click "Add new site" -> "Import an existing project".
    *   Connect to GitHub and authorize access.
    *   Select **your forked repository** (e.g., `<YourGitHubUsername>/portfolio-space`).
    *   Verify the build settings (Netlify usually detects Astro correctly):
        *   **Branch to deploy:** `main` (or your default branch)
        *   **Build command:** `npm run build`
        *   **Publish directory:** `dist`
    *   Click "Deploy site". Netlify will build and deploy your customized portfolio.

8.  **Update Your Fork's README (Optional but Recommended):**
    *   Once deployed, Netlify will give you a unique URL (e.g., `your-site-name.netlify.app`).
    *   Go to your new site's settings on Netlify (`Site settings > General > Status badges`) and get the Markdown snippet for **your** deployment status badge.
    *   Edit the `README.md` file **in your forked repository**. Remove or replace the original Netlify badge placeholder at the top with your own badge. You might also want to update the description to reflect that it's *your* portfolio now. Commit and push this README change.

## 📄 License

The code is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. You can find the full license text [here](https://www.gnu.org/licenses/agpl-3.0.html).