const Bundles = ({ bundles }) => {
  //   console.log(bundles);
  return (
    <div className=" ">
      <p className="text-center pt-20 pb-8  text-2xl uppercase">Bundles</p>
      <div id="news" className="md:flex gap-5 justify-center mx-4">
        {/* <img src="https://cdn.fortnite-api.com/news/v2/2817aa1aa08f6d9dd62b59877caecaa9a219975a.gif" alt="" /> */}
        {bundles.map((bundles, index) =>
          bundles.bundle == null ? (
            ""
          ) : (
            <div key={index} className="flex flex-wrap justify-center ">
              <div class=" max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  class="w-full"
                  src={bundles.bundle.image}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    {bundles.bundle.name}
                  </div>
                  <p class="text-grey-darker text-base font-semibold uppercase">
                    {bundles.bundle.info}
                  </p>
                  <p class="text-grey-darker text-base py-4">
                    <span className="font-semibold bg-gray-200 rounded-md py-1 px-1">All Items in this Bundle</span>
                    {bundles.items.map((item) => (
                      <p className="py-1 pt-2">{item.name}</p>
                    ))}
                  </p>
                </div>
                <div class="px-6 py-4">
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 bg-yellow-300">
                    Price: {bundles.banner.value}
                  </span>
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"></span>
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"></span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Bundles;
