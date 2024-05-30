import ResultCard from "@/components/searchResults/resultCard";
import { ChevronUpIcon } from "lucide-react";

const cardcomponent = () => {
  return (
    <div className="w-8/12 border mx-auto p-5">
      {/* card and description div started here */}
      <div>
        {/* card to use */}
        <div>
          <ResultCard />
        </div>
        {/* discription div */}
        <div className="my-2">
          <h1 className="text-md font-[900] my-1">Good to know</h1>
          <p className="text-sm text-[gray]">
            Free cancellation until 11:59 PM on May 21,2022
          </p>
          <p className="text-sm text-[gray]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            ut exercitationem nostrum repellat modi sunt quas labore, quos,
            soluta aliquid itaque? Ipsa, in laudantium. Dolores at temporibus,
            obcaecati atque dolor, a perferendis repellendus fugiat magnam sunt
            iure reprehenderit. Commodi, rem! Obcaecati itaque suscipit maiores
            magni? Amet recusandae molestias, laudantium facere repellat
            pariatur dolores porro dicta dolore similique voluptate aliquid.
            Illum error earum, alias facere voluptatum esse, laudantium repellat
            repellendus eos temporibus neque quidem impedit? Aliquam maxime quos
            similique modi atque ad, cumque fugit saepe ex beatae possimus
            perspiciatis aliquid ipsa reiciendis illo? Animi, quam tempore cum
            in repudiandae ab ad.
          </p>
          <div className="backdrop-blur-[2px] mt-[-30px] w-full h-10 mb-2">
            {" "}
          </div>
          <button className="flex items-center border bg-white  text-[#4b4bf7] px-2 py-1 rounded-md mx-auto">
            Read more <ChevronUpIcon />
          </button>
        </div>
      </div>
      {/* card and descrition div ended here */}
    </div>
  );
};

export default cardcomponent;
