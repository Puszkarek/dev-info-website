import "@/styles/global.scss";

import { Inter } from "@next/font/google";
import { FC } from "react";

import { Explorer } from "@/components/explorer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Diego Fernandes",
    template: "%s | Diego Fernandes",
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "CTO at @Rocketseat. Passionate about education and changing people's lives through programming.",
};

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="z-10 relative h-screen p-20 flex items-center justify-center">
          <div className="bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <Header />

            <div className="grid grid-cols-editor max-h-full">
              <Menu />
              <Explorer />

              <div className="h-full relative">{children}</div>
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
