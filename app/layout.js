
import "./globals.css";

export const metadata = {
  title: "SR Vastra | By Sisters",
  description:
    "Discover elegant ethnic wear at SR Vastra – By Sisters. Explore our collections and enquire through WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
