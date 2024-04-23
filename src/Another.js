import { useContext } from "react";
import { MyContext } from "./App";

export default function Another() {
  const { updata } = useContext(MyContext);
  return (
    <div>
      <button
        onClick={() => updata("The value is coming from button 2")}
        className="button"
      >
        Button 2
      </button>
    </div>
  );
}
