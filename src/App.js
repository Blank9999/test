import { createContext, useContext, useState } from "react";
const MyContext = createContext();

export default function App() {
  const [data, setData] = useState("Hello World");

  function updata(item) {
    setData(item);
  }

  const contextvalue = {
    data,
    updata,
  };

  return (
    <MyContext.Provider value={contextvalue}>
      <h1>{data}</h1>
      <Test />
      <Another />
      <Reset />
    </MyContext.Provider>
  );
}

function Test() {
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

function Another() {
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
function Reset() {
  const { updata } = useContext(MyContext);
  return (
    <div>
      <button onClick={() => updata("Hello World")} className="button">
        Reset
      </button>
    </div>
  );
}
