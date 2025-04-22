import Header from "../components/Header";
import "./globals.css";
import Footer from "../components/Footer";
import SectionSeparator from "../components/Seperator";


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
        <Footer />
      </body>
    </html>
  );
}
