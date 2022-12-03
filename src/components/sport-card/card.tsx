const SportsCard = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="rounded-xl p-5 shadow-md w-9/12 bg-main-900">
          <div className="flex w-full items-center justify-between pb-3">
            <div className="flex items-center space-x-3">
              <div className="text-xl font-semi-bold text-white  md:text-3xl">
                Select your sport
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                Category
              </button>
            </div>
          </div>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">
              Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
            </div>
            <div className="text-sm text-neutral-600">
              Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
              dignissim turpis, non suscipit mauris interdum at. Morbi sed
              gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut
              mollis ipsum consectetur quis. Etiam faucibus est risus, ac
              condimentum mauris consequat nec. Curabitur eget feugiat massa
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsCard;
