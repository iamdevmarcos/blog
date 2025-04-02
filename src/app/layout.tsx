import "./globals.css";
import localFont from "next/font/local";

const ghibliFont = localFont({
  src: "../fonts/ghibliFont.otf", // 👈 relativo ao layout.tsx
  variable: "--font-ghibli",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className= {`${ghibliFont.variable} cursor-ghibli`}>
      <body>
        {children}
      </body>
    </html>
  );
}
