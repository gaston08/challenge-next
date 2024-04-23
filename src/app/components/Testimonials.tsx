import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="mt-12 pl-4 pr-4">
      <h1 className="text-center font-moto text-4xl mb-12">
        Lorem ipsum dolor sit amet.
      </h1>
      <div className="flex gap-10 flex-wrap justify-center">
        <Card
          src="/cards/card1.jpg"
          dataUrl={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGO4d+92XW1ecUXRv///GLoa8yXl1JbOnvD4/lUGe0MVSSYGZyPVhoJEAI3KETF5NwIUAAAAAElFTkSuQmCC"
          }
        />
        <Card
          src="/cards/card2.jpg"
          dataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGP4/e7p6d3rNy2ZMaWng8HXz2tiTWZGkK2/tSqDspSUBAODkbzQjlULAHieD2/p1xkpAAAAAElFTkSuQmCC"
        />
        <Card
          src="/cards/card3.jpg"
          dataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ANXNwurb1P/17//7+ACym4bZilfemW23k34AIxkBIgAAJwgAa1hC8osTn3h+2hsAAAAASUVORK5CYII="
        />
      </div>
    </div>
  );
}

interface CardProps {
  src: string;
  dataUrl: string;
}

function Card(props: CardProps) {
  return (
    <div className="basis-4/4 md:basis-1/4 rounded overflow-hidden shadow-lg">
      <div className="overflow-hidden relative h-72 w-full">
        <Image
          src={props.src}
          alt="Picture of the author"
          sizes="100vw"
          fill={true}
          placeholder="blur"
          blurDataURL={props.dataUrl}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}
