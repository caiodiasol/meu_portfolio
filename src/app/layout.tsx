import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caio Dias - Desenvolvedor Full Stack",
  description: "Portfólio de Caio Dias - Desenvolvedor Full Stack especializado em React, Next.js, Python e Django. Crio soluções digitais escaláveis e centradas na experiência do usuário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme") || "dark";
                  if (theme === "light") {
                    document.documentElement.classList.add("light");
                  } else {
                    document.documentElement.classList.remove("light");
                  }
                } catch (e) {
                  // Se não conseguir acessar localStorage, mantém o tema dark padrão
                  document.documentElement.classList.remove("light");
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
