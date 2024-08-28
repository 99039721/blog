import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Blog",
  description: "Welcome to blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center bg-white">
          <div className="w-[1920px] flex flex-col justify-center items-center">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
