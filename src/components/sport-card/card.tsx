import { MainContainedButton } from "../gobal";

const SportsCard = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="rounded-3xl p-10 shadow-md w-9/12 bg-main-900">
          <div className="w-full items-center justify-between pb-3 md:flex">
            <div className="flex items-center space-x-3">
              <div className="text-xl font-semi-bold text-white  md:text-3xl">
                Select your sport
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <MainContainedButton href="/" text="Proceed" />
            </div>
          </div>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">
              Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsCard;
