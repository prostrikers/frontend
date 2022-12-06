import "./Header.css";
import { SportsCard } from "./components/sport-card";
import { ApplicationRouter } from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <section>
        <BrowserRouter>
          <ApplicationRouter />
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
