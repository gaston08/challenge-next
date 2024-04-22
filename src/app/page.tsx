import Image from "next/image";
import Header from './components/Header'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <Header />
      <Testimonials />
    </div>
  );
}
