import "./App.css";
import Home from "./comps/Home";
import { data } from "./Question.js";

function App() {
  //ელისაბეთის ნაწილი დაწყების დრო 28:20
  return (
    <>
      <h1 className="w2">header</h1>
      <Home />
      <h1>questions</h1>
    </>
  );
}

export default App;

// მეცხრე ხაზი შეცვალე ამით : <Home data={data} />
