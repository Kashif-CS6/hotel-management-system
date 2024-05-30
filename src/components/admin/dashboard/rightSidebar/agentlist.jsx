import Agent from "./agentList/agent";

const Agentlist = () => {
  return (
    <div className="mt-2 pt-4  border w-80 md:w-[22rem] h-80 md:h-[22rem] mx-auto rounded-md shadow-sm bg-white shadow-[gray] px-2">
      {/* top section */}
      <div className="flex justify-between items-center py-1">
        <div>
          <h1 className="text-xs md:text-sm font-[700]">Agent List</h1>
          <p className="text-xs md:text-sm text-[gray]">Team that sells the unit</p>
        </div>
        <button className="flex items-center justify-center gap-1 py-1 px-2 border border-gray-300 rounded-md bg-white text-sm text-[gray]">
          Details
        </button>
      </div>
      {/* top section ends here */}
      <div className="my-1 py-2">
       <Agent/>
       <hr className="my-2 py-1 "/>
       <Agent/>
       <hr className="my-2 py-1"/>
       <Agent/>
       <hr className="my-2 py-1"/>
       <Agent/>
       
      </div>
    </div>
  );
};

export default Agentlist;
