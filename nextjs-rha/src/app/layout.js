import "./globals.css";
import { Inter, Bagel_Fat_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orange County Hairstylist - Your Hair's Best Friend",
  description:
    "Discover Expert Hairstyling Services in Orange County, CA. Professional Stylist Offering Color Services, Lightening Services, and Hair Treatments for Your Perfect Look",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
