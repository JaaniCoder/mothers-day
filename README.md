# 🌸 Mother's Day Digital Tribute

> An elegant, interactive, and highly personalized web experience designed to celebrate the most important woman in our lives.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

This project is a premium digital greeting card featuring smooth animations, interactive elements, personalized messages, and an ambient auditory experience. Built so that **anyone** can generate a link to surprise their mother.

---

## ✨ Features

- **💌 Tap to Open Reveal** — An engaging entry screen with a bouncing envelope and smooth transition into the experience.
- **🎵 Ambient Background Music** — Integrated audio with a floating play/pause toggle.
- **🌸 Dynamic Animations** — Continuous falling sakura petals and floating hearts powered by Framer Motion.
- **🎟️ Digital Coupon Book** — Six interactive, redeemable "Acts of Service" coupons with a progress bar and confetti on redemption.
- **📸 Memory Lane Gallery** — Polaroid-style photo grid with dynamic tilts and hover effects. Supports direct image URLs.
- **🔤 Elegant Typography** — *Playfair Display* for headings, *Lato* for body text.
- **📱 Fully Responsive** — Mobile-first UI built with Tailwind CSS grids and flex layouts.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) (App Router) | Framework |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |
| `canvas-confetti` | Confetti effects |

---

## 🚀 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/your-username/mothers-day-tribute.git
cd mothers-day-tribute
```

**2. Install dependencies**
```bash
npm install
```

**3. Add background music**

Place your audio file at:
```
public/bg-music.mp3
```

**4. Run the development server**
```bash
npm run dev
```

**5. Open the app**

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 How to Use & Share

This app uses dynamic routing and URL parameters to generate personalized pages — **no database required**.

**Base URL structure:**
```
https://mothers-day-umber.vercel.app/[Name]
```

**Available query parameters:**

| Parameter | Description | Example |
|---|---|---|
| `from` | Sender's name (appears in the letter) | `?from=Jaani` |
| `img1` | First photo — any direct image URL | `&img1=https://...` |
| `img2` | Second photo — any direct image URL | `&img2=https://...` |

**Example link:**
```
http://mothers-day-umber.vercel.app/from=Jaani&img1=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1bwd6mRiJIFbrmTfAyaTHF0JOww_oC48t%2Fview%3Fusp%3Dsharing&img2=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1bwd6mRiJIFbrmTfAyaTHF0JOww_oC48t%2Fview%3Fusp%3Dsharing
```

> **📸 Photo tip:** Upload your images to [imgbb.com](https://imgbb.com) or [drive.com](https://drive.google.com/drive/u/0/home) (free, no account needed) and paste the **Direct Link**.

---

## 📂 Project Structure
```
├── app/
│   ├── globals.css              # Tailwind v4 theme & font variables
│   ├── layout.tsx               # Font injection & metadata
│   ├── page.tsx                 # Link Generator (Home page)
│   └── [name]/
│       └── page.tsx             # The Surprise Experience
├── components/
│   └── ui/
│       ├── Coupons.tsx          # Interactive digital coupons
│       ├── FloatingHearts.tsx   # Floating hearts animation
│       ├── Gallery.tsx          # Polaroid photo grid
│       ├── Letter.tsx           # Personal message card
│       └── PetalBackground.tsx  # Falling sakura petals
└── public/
└── bg-music.mp3             # Ambient background track
```

---

## ☁️ Deployment

This project is optimized for **Vercel**.

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Click **Deploy** — Vercel auto-detects Next.js and handles the rest.

---

<div align="center">
  Made with ❤️ for mothers everywhere.
</div>
