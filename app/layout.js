import "./globals.css";

export const metadata = {
  title: "Itz Fizz — A Little Extra Sparkle",
  description: "Big, bright bubbles. Zero blah. Meet your new favorite little pick-me-up.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
