import Image from "next/image";

export default function Header() {
  return (
    <div className="mt-8">
      <div className="hidden  w-screen h-screen md:h-screen md:flex flex-wrap justify-center content-start md:content-center pl-5 pr-5 mt-8 md:mt-0">
        <div className="basis-full md:basis-1/2 flex justify-center items-center mt-12 md:mt-0">
          <div className="overflow-hidden relative">
            <Image
              src={"/learnmore.jpg"}
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "auto",
                height: "20%",
              }}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="md:basis-1/2 flex justify-center items-center">
          <div className="h-auto text-center md:text-start md:w-5/6">
            <p className="font-mono text-3xl mb-8 font-bold">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="font-serif text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus totam, laboriosam assumenda odit officiis quae delectus
              labore illo, vero, quo earum provident neque quam!
            </p>
            <p className="font-serif text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus totam, laboriosam assumenda odit officiis quae delectus
              labore illo, vero, quo earum provident neque quam! Ipsam ipsum
              deserunt sint magni unde.
            </p>
            <button className="mt-12  bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* show only on mobile*/}
      <div
        className="md:hidden relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage: "url('/learnmore.jpg')",
          height: "100vh",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="font-serif text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus totam, laboriosam assumenda odit officiis quae
                delectus labore illo, vero, quo earum provident neque quam!
              </p>
              <p className="font-serif text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus totam, laboriosam assumenda odit officiis quae
                delectus labore illo, vero, quo earum provident neque quam!
                Ipsam ipsum deserunt sint magni unde.
              </p>
              <button
                type="button"
                className="mt-8 rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
