import { createContext, useContext, useState } from "react";
import Another from "./Another.js";
import Test from "./Test.js";
import Reset from "./Reset.js";
export const MyContext = createContext();

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
