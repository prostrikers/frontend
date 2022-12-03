import { useState } from "react";
import "./Header.css";
import { Header } from "./components/gobal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <div className="flex bg-white">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 p-10">
            <div>
              <Header>
                Do you aspire to be an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-400 to-main-300">
                  indoor champion
                </span>
              </Header>
              <p className="mt-10 text-sm text-gray-500 md:text-base">
                The only indoor sports facility and training center in
                Sacramento CA, specializing in Baseball, Softball, Futsal and
                Cricket. Book now for an action packed fun and learning.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  className="px-10 py-3 bg-main-900 text-gray-200 text-md font-semibold rounded-xl hover:bg-main-800 r-20 mt-3"
                  href="#"
                >
                  Virtual tour
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 player_header">
            <div className="h-full object-cover">
              <div className="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
