import localFont from "next/font/local";
import "./globals.css";
import Footer from "./ui/footer/Footer";

const bdScript = localFont({
  src: "./fonts/BDScript-Regular.woff",
  variable: "--bd-script",
});
const ovoFont = localFont({
  src: "./fonts/Ovo-Regular.ttf",
  variable: "--ovo-font",
});

export const metadata = {
  title: {
    template: '%s | To Be With Counseling',
    default: 'To Be With Counseling',
  },
  keywords:"Karah, Hammontree, Counseling, To Be With, Mental Health, Lifestyle, Therapy, Florida, Equine, Equine Therapy",
  description: "The word “with” is one that breaks the barrier of isolation and aloneness, restoring togetherness and relationship. To be known one must be in an authentic and vulnerable relationship where they risk being seen, heard, and wanted as they are. A risk that is frightening and will bring unrestrained healing and transformation as one bravely enters their story of hurt, pain, and heartache. The mission of To Be With Counseling is to provide that space, where restoration, healing, and transformation within relationship can occur. It is not an easy road to travel, and it is worth it.",
  icons: {
    icon: "/img/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bdScript.variable} ${ovoFont.variable} antialiased noOverflow`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
