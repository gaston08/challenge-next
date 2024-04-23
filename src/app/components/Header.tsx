import Image from "next/image";
import { imgType } from "@/app/utils/interface";

const imgHeader: imgType = {
  src: "/2.jpg",
  base64:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGM4dfbK15//rz1+t/vUJQZHQYYZ+WlyBmoMfAwMMaHuZTnJmalR8lJsAJsNEDwkY4s/AAAAAElFTkSuQmCC",
};

export default function Header() {
  return (
    <div className="w-screen h-screen md:h-screen flex flex-wrap justify-center content-start md:content-center pl-5 pr-5 mt-8 md:mt-0">
      <div className="md:basis-1/2 flex justify-center items-center">
        <div className="h-auto text-center md:text-start md:w-5/6">
          <p className="font-serif text-xl mb-4">ABOUT FURNITURE</p>
          <p className="font-mono text-4xl mb-8">
            ¡Furniture! <span className="font-black">Lorem</span> ipsum dolor.
          </p>
          <p className="font-serif text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            totam, laboriosam assumenda odit officiis quae delectus labore illo,
            vero, quo earum provident neque quam! Ipsam ipsum deserunt sint
            magni unde.
          </p>
          <button className="mt-8 hidden md:block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
            Click here
          </button>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 flex justify-center items-center mt-12 md:mt-0">
        <div className="overflow-hidden relative">
          <Image
            src={imgHeader.src}
            alt="Picture of the author"
            sizes="100vw"
            priority={true}
            placeholder="blur"
            blurDataURL={imgHeader.base64}
            style={{
              width: "auto",
              height: "20%",
              borderRadius: "35% 10%",
            }}
            width={500}
            height={300}
          />
        </div>
      </div>
      <button className="mt-12 md:hidden w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
        Click here
      </button>
    </div>
  );
}
