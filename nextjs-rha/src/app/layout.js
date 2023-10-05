import "./globals.css";
import { Bagel_Fat_One, Oswald, Montserrat } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bagelFatOne",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Orange County Hairstylist - Your Hair's Best Friend",
  description:
    "Discover Expert Hairstyling Services in Orange County, CA. Professional Stylist Offering Color Services, Lightening Services, and Hair Treatments for Your Perfect Look",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bagelFatOne.variable} ${oswald.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
