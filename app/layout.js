import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const helveticaNeue = localFont({
  src: [
    {
      path: "/fonts/helvetica-neue/HelveticaNeueUltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/helvetica-neue/HelveticaNeueThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "/fonts/helvetica-neue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/helvetica-neue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/helvetica-neue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/helvetica-neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/helvetica-neue/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/helvetica-neue/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${roboto.className} antialiased`}
      >
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-4 flex">
            <div className="bg-light p-8"></div>
            <div className="bg-dark border-r border-outline flex-1">
              <Sidebar />
            </div>
          </div>
          <div className="col-span-8 bg-chat">{children}</div>
        </div>
      </body>
    </html>
  );
}
