import Image from "next/image";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import LearnMore from "./components/LearnMore";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <Header />
      <Testimonials />
      <LearnMore />
      <Products />
    </div>
  );
}
