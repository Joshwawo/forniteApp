const SpecialFeatured = ({ specialFeatured = [], vbucksIcon }) => {
  // console.log(vbucksIcon);
  // console.log(specialFeatured[0].items[0]);
  // console.log(specialFeatured.map( (items, index) => console.log(items) ) );

  // console.log(
  //   specialFeatured.map((item, index) => {
  //     item.items.map((items, index) =>
  //       console.log(items.series == null ? "soy null" : items.series.value)
  //     );
  //   })
  // );
  

  // const date4 = new Date();
  return (
    <>
      <p className="text-center pt-20 pb-8  text-2xl uppercase">
        Special Featured Bundless
      </p>
      <div
        id="news"
        className="md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5  mx-4"
      >
        {specialFeatured.map((motd, index) =>
          motd.bundle == null ? (
            <div key={index} className="flex flex-wrap justify-center m-0">
              <div className=" max-w-xs   rounded overflow-hidden shadow-lg my-2">
                {/* {console.log(motd.newDisplayAsset.materialInstances[0].images.Background)} */}
                <img
                  className="w-full bg-black/80"
                  src={motd.newDisplayAsset.materialInstances[0].images.Background}
                  alt="Sunset in the mountains"
                  loading="lazy"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <p>{motd.items[0].name}</p>
                  </div>

                  <span className=" font-semibold">
                    {motd.items[0].series == null ? (
                      ""
                    ) : (
                      <span className="font-semibold text-red-500">
                        {motd.items[0].series.value}
                      </span>
                    )}
                  </span>

                  {/* <p className="text-grey-darker text-base font-semibold  mb-2">
                    {motd.items.map((items, index) =>
                      items.series == null ? (
                        ""
                      ) : (
                        <span key={index} className="text-red-500">
                          {items.series.value}
                        </span>
                      )
                    )}
                  </p> */}
                  <p className="text-grey-darker text-base font-semibold uppercase mb-2">
                    {motd.items[0].type.displayValue}
                  </p>

                  <div className="text-grey-darker text-base">
                    <span className="font-bold">Includes:</span>
                    {motd.items.map((items, index) => (
                      <div key={index} className=" flex">
                        <span className=" py-4 inline-block bg-grey-lighter rounded-full   text-sm font-semibold text-grey-darker ">
                          <p>
                            {items.name}
                            <span  className="font-bold">
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
                              <span className="text-red-500">
                                Marvel Series
                              </span>
                            ) : (
                              ""
                            )}
                          </p>
                        </span>
                        <img
                          className="w-10 "
                          src={items.images.smallIcon}
                          alt="no"
                          loading="lazy"
                        />

                        {/* <p>Description: {items.description}</p> */}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4">
                  <span className=" flex  bg-grey-lighter rounded-full  py-1  text-sm font-semibold text-grey-darker mr-2">
                    <span className="font-bold py-2"> Price:</span>{" "}
                    <span className="py-2">
                      {" "}
                      {motd.finalPrice}
                      {""}
                      V-Bucks{" "}
                    </span>{" "}
                    <img className="w-8 h-8" src={vbucksIcon} alt="icon" loading="lazy" />
                  </span>
                  {/* <span class=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker mr-2">
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
                  </span> */}
                  <span className=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker">
                    <span className="font-bold"> Gittable: </span>{" "}
                    {motd.giftable ? "Yes" : "No"}
                  </span>{" "}
                  <span className=" inline-block bg-grey-lighter rounded-full  py-1 text-sm font-semibold text-grey-darker">
                    <span className="font-bold"> Refundable: </span>{" "}
                    {motd.giftable ? "Yes" : "No"}
                  </span>
                  {/* <p className="font-bold pb-1">ShopHistory</p> */}
                  {/* {motd.items.map((item, index) => (
                    <span key={index} className="font-semibold border ">
                      {item.shopHistory.map((date, index) => (
                        <p>{(date)}</p>
                      ))}
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};
export default SpecialFeatured;

//!Series: {(motd.items.map(( items, index ) => console.log(items.series == null ? "soy null": items.series.value))  )}
