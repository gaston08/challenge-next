import Image from 'next/image'

export default function Header() {
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center content-center pl-5 pr-5">
      <div className="md:basis-1/2 flex justify-center items-center">
        <div className="h-auto text-center md:text-start md:w-5/6">
          <p className='font-serif text-xl mb-4'>ABOUT FURNITURE</p>
          <p className='font-mono text-3xl mb-8'>¡Forniture! <span className='font-bold'>Lorem</span> ipsum dolor.</p>
          <p className='font-serif text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam, laboriosam assumenda odit officiis quae delectus labore illo, vero, quo earum provident neque quam! Ipsam ipsum deserunt sint magni unde.</p>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 flex justify-center items-center mt-12 md:mt-0">
        <div className='overflow-hidden relative'>
          <Image
            src={"/2.jpg"}
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: 'auto',
              height: '20%',
              borderRadius: '35% 10%'
            }}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}