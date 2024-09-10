import localFont from "next/font/local";
import "./globals.css";

const bdScript = localFont({
  src: "./fonts/BDScript-Regular.woff",
  variable: "--bd-script",
});
const ovoFont = localFont({
  src: "./fonts/Ovo-Regular.ttf",
  variable: "--ovo-font",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bdScript.variable} ${ovoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
