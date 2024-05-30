import NavBar from "@/components/common/navBar/navBar";
import Listing from "@/components/admin/dashboard/listing";
import RightSidebar from "@/components/admin/dashboard/rightSidebar/rightSidebar";
import Charts from "@/components/admin/dashboard/charts/charts";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex gap-3 mx-3 flex-wrap justify-center xl:justify-normal">
        <div>
          <Charts />
          <Listing />
        </div>
        <div className="my-2">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default page;
