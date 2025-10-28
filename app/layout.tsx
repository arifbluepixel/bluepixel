import { Providers } from "@/app/provider";
import {
  FAVICON,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants/env";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: `${SITE_NAME}`,
  description: `${SITE_DESCRIPTION}`,
  icons: `${SITE_URL}${FAVICON}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`min-w-full min-h-screen ${poppins.className}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getStoredValue(key, fallback) {
                  try {
                    return localStorage.getItem(key) || fallback;
                  } catch (error) {
                    return fallback;
                  }
                }

                function getSystemPreference() {
                  try {
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  } catch (error) {
                    return 'light';
                  }
                }

                function isValidTheme(value) {
                  return ['light', 'dark', 'system'].includes(value);
                }

                const THEME_STORAGE_KEY = 'theme';
                const savedTheme = getStoredValue(THEME_STORAGE_KEY, 'system');
                const theme = isValidTheme(savedTheme) ? savedTheme : 'system';
                const systemPreference = getSystemPreference();
                const resolvedTheme = theme === 'system' ? systemPreference : theme;

                const { documentElement } = document;
                documentElement.classList.remove('light', 'dark');
                documentElement.classList.add(resolvedTheme);
                documentElement.setAttribute('data-theme', resolvedTheme);

                const metaThemeColor = document.querySelector('meta[name="theme-color"]');
                if (metaThemeColor) {
                  const color = resolvedTheme === 'dark' ? '#0f172a' : '#ffffff';
                  metaThemeColor.setAttribute('content', color);
                }

                try {
                  sessionStorage.setItem('initial-theme', resolvedTheme);
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="min-h-screen -mt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
