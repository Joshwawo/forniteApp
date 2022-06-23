



<>
  <p className="text-center pt-20 pb-8  text-2xl uppercase">
    Special Featured Bundless
  </p>
  <div
    id="news"
    className="md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 2xl:bg-red-200 gap-5  mx-4"
  >
    {specialFeatured.map((motd, index) =>
      specialFeatured.bundles != null ? (
        "asd"
      ) : (
        <div key={index} className="flex flex-wrap justify-center m-0">
          <div className=" max-w-xs rounded overflow-hidden shadow-lg my-2">
            <img
              className="w-full bg-black"
              src={motd.items[0].images.featured}
              alt="Sunset in the mountains"
            />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{motd.items[0].name}</div>
              <p className="text-grey-darker text-base">
                {motd.items[0].type.displayValue}
              </p>

              <p className="text-grey-darker text-base">
                <span className="text-orange-400">Includes:</span>
                {motd.items.map((items, index) => (
                  <div className="">
                    <span class=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker mr-2">
                      <p>
                        {items.name}
                        <span key={index} className="font-bold">
                          {" "}
                        </span>{" "}
                        {items.rarity.displayValue == "Epic" ? (
                          <span className="text-purple-500">Epic</span>
                        ) : items.rarity.displayValue == "Rare" ? (
                          <span className="text-blue-500"> Rare</span>
                        ) : items.rarity.displayValue == "Uncommon" ? (
                          <span className="text-green-500 "> Uncommon</span>
                        ) : items.rarity.displayValue == "Icon Series" ? (
                          <span className="text-cyan-500">Icon Series</span>
                        ) : items.rarity.displayValue == "MARVEL SERIES" ? (
                          <span className="text-red-500">Marvel Series</span>
                        ) : (
                          ""
                        )}
                      </p>
                    </span>

                    {/* <p>Description: {items.description}</p> */}
                  </div>
                ))}
              </p>
            </div>

            <div class="px-6 py-4">
              <span class=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker mr-2">
                <span className="font-bold"> Price:</span> {motd.finalPrice}{" "}
                V-Bucks
              </span>

              <span class=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker mr-2">
                <span className="font-bold"> Rarity:</span>{" "}
                {motd.items[0].rarity.displayValue == "Epic" ? (
                  <span className="text-purple-500">Epic</span>
                ) : motd.items[0].rarity.displayValue == "Rare" ? (
                  <span className="text-blue-500"> Rare</span>
                ) : motd.items[0].rarity.displayValue == "Uncommon" ? (
                  <span className="text-green-500 "> Uncommon</span>
                ) : motd.items[0].rarity.displayValue == "Icon Series" ? (
                  <span className="text-cyan-500">Icon Series</span>
                ) : (
                  ""
                )}
              </span>

              <span class=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker">
                <span className="font-bold"> Gittable:</span>{" "}
                {motd.giftable ? "Yes" : "No"}
              </span>
              <span class=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker">
                <span className="font-bold"> Refundable:</span>{" "}
                {motd.giftable ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      )
    )}
  </div>
</>;
