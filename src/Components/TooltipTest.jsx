import Tooltip from "./Tooltip";
import "./tooltip.css";

function TooltipTest() {
  return (
    <div>
      <h1>Tooltip</h1>
      <Tooltip
        delay={500}
        content={"hi there!!!"}
        children={<p className="hover-me">Hover Me</p>}
      />
    </div>
  );
}

export default TooltipTest;
