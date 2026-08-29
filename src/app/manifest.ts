import type { MetadataRoute } from "next";

// ✏️ Update these values to match your project
// name         → Full app name shown on install prompt and splash screen
// short_name   → Shown on home screen (keep under 12 chars)
// description  → App description for store listings
// start_url    → Entry point when launched from home screen
// theme_color  → Browser toolbar and status bar color
// background_color → Splash screen background before app loads
//
// Icons:
// Place your icons in public/icons/
//   - icon-192x192.png  → Required: home screen icon
//   - icon-512x512.png  → Required: splash screen and install prompt
// Use https://maskable.app/editor to create maskable icons

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MyApp", // ✏️ Change to your app name
    short_name: "MyApp", // ✏️ Change to your app short name
    description: "A production-ready Next.js application", // ✏️ Change to your app description
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc", // ✏️ Match your app's background
    theme_color: "#0f172a", // ✏️ Match your app's primary color
    orientation: "portrait-primary",
    scope: "/",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
