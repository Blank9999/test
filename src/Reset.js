import { useContext } from "react";
import { MyContext } from "./App";

export default function Reset() {
  const { updata } = useContext(MyContext);
  return (
    <div>
      <button onClick={() => updata("Hello World")} className="button">
        Reset
      </button>
    </div>
  );
}
