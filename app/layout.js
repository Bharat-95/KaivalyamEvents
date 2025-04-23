import Header from "../components/Header";
import "./globals.css";
import Footer from "../components/Footer";
import SectionSeparator from "../components/Seperator";
import Whatsapp from "../components/Whatsapp";


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
        <SectionSeparator />
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
