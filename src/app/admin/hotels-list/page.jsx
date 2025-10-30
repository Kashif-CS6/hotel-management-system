import Filtersection from "@/components/admin/hotelslist/filtersection";
import Mapcomponent from "@/components/admin/hotelslist/mapcomponent";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <Filtersection />
      <div className="mx-auto">
        <Mapcomponent w="w-96" res={"w-80"} h="h-[200vh]" />
      </div>
    </div>
  );
};

export default page;
