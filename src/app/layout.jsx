import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "The Dragon News",
  description:
    "News is the timely reporting of recent, relevant, and interesting events, delivered via print, broadcast, or digital media. It serves as a record of current happenings, covering topics such as politics, disasters, entertainment, and human interest stories, usually focusing on information that impacts or surprises the audience. ",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" className={`${poppins.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
