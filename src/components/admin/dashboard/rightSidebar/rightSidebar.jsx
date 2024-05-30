import Selectdata from "./selectdata";
import Salestarget from "./salestarget";
import Agentlist from "./agentlist";

const RightSidebar = () => {
  return (
    <div>
      <Selectdata />
      <Salestarget />
      <Agentlist />
    </div>
  );
};

export default RightSidebar;
