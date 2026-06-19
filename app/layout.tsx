import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Your Name",
    template: "%s — Your Name",
  },
  description: "Designer & Creative Director based in [City].",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="page-grid py-8 mt-32">
      <div className="rule pt-8 flex flex-col md:flex-row justify-between gap-4">
        <span className="t-caption">© {new Date().getFullYear()} Your Name</span>
        <span className="t-caption">Designed with intent</span>
      </div>
    </footer>
  );
}
