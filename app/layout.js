import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Kaivalyam Events",
  description: "Best event decorators in Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
