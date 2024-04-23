import { useContext } from "react";
import { MyContext } from "./App";

export default function Test() {
  const { updata } = useContext(MyContext);
  return (
    <div>
      <button
        onClick={() => updata("The value is coming from button 1 ")}
        className="button"
      >
        Button 1
      </button>
    </div>
  );
}
