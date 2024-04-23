import Image from "next/image";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import LearnMore from "./components/LearnMore";
import Products from "./components/Products";
import Discount from "./components/Discount";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <Header />
      <Testimonials />
      <LearnMore />
      <Products />
      <Discount />
      <Footer />
    </div>
  );
}
