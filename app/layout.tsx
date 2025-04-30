import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import AuthSessionProvider from "./providers/SessionProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 min-h-screen`}>
        <AuthSessionProvider>
          <Navbar />
          <Toaster />
          <main className="mx-auto p-4">{children}</main>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
