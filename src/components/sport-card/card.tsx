import { MainContainedButton } from "../gobal";
import "./style.css";

const SportsCard = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-5 ">
        <div className="rounded-3xl p-10 shadow-md w-9/12 bg-main-900 sports_selection_card">
          <div className="w-full items-center justify-between pb-3 md:flex">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-medium text-gray-700 sm:text-3xl dark:text-gray-200">
                Select your sport
              </h2>
            </div>

            <div className="flex items-center space-x-8">
              <MainContainedButton href="/" text="Proceed" />
            </div>
          </div>

          <p className="text-md text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <div className="mb-0">
            <div className="container">
              <div className="xl:mt-12 md:flex ">
                <SportsCardImage />
                <SportsCardImage />
                <SportsCardImage />
                <SportsCardImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsCard;

const SportsCardImage = () => {
  return (
    <>
      <div className="flex justify-center 4 mx-auto border cursor-pointer rounded-xl content-end dark:border-gray-700 mt-5 md:mt-0 md:w-1/2 bg-[url('/baseball.png')] h-40 md:ml-5 align-bottom">
        <span className="text-white inset-x-0 bottom-0 mt-28">Basbal cage</span>
      </div>
      ​
    </>
  );
};