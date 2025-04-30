import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 min-h-screen`}>
        <Navbar />
        <Toaster />
        <main className="mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
