import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-ghibli">
      <body>
        {children}
      </body>
    </html>
  );
}
