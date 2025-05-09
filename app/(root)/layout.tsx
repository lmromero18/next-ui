import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-inter ">
        <Navbar />

        {children}

        <Footer />
    </main>
  );
}