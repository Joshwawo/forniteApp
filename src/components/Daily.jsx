import React from "react";

const Daily = ({ daily = [] }) => {
  // console.log(color);
  // console.log(daily[0].items[0].type);
  // console.log(daily[0].newDisplayAsset.materialInstances[0].colors.Background_Color_A);

  return (
    <div>
      <h3 id="daily" className="text-2xl text-center text-black py-10 uppercase">
        Daily Offers ⛏️🔥
      </h3>

      <div className="">
        <div className="text-center pt-5  text-xl md:grid md:grid-cols-4 gap-5 mx-4">
          {daily.map((daily, index) => (
            <div key={index} className="flex flex-wrap justify-center ">
              <div className="max-w-sm  rounded overflow-hidden shadow-lg my-2">
                <img
                  // style={{backgroundColor: color}}
                  className="w-full bg-black/80"
                  src={
                    daily.items[0].images.featured
                      ? daily.items[0].images.featured
                      : daily.items[1].images.featured
                  }
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <p className="font-normal">{daily.items[0].name}</p>
                  {/* <p className="font-normal"><span className="font-semibold">Price:</span> {daily.finalPrice} V-Bucks</p>
                  <p className="font-normal"><span className="font-semibold">Regular Price:</span> {daily.regularPrice} V-Bucks</p> */}

                  <p className="text-grey-darker text-base">{daily.items[0].type.displayValue}</p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                    <span className="font-bold">Price:</span>{" "}
                    {daily.regularPrice} V-Bucks
                  </span>
                  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                    <span className="font-bold">Rarity:</span>{" "}
                    {daily.items[0].rarity.displayValue == "Rare" ? (
                      <span className="text-blue-400">Rare</span>
                    ) : daily.items[0].rarity.displayValue ? (
                      <span className="text-gray-500">Common</span>
                    ) : (
                      (daily.items[0].rarity.displayValue = "Uncommon" ? (
                        <span className="text-green-400">Uncommon</span>
                      ) : (
                        (daily.items[0].rarity.displayValue = "Epic" ? (
                          <span className="text-purple-500">Epic</span>
                        ) : daily.items[0].rarity.displayValue ==
                          "Legendary" ? (
                          <span className="text-orange-500">Legendary</span>
                        ) : (
                          "Unkown"
                        ))
                      ))
                    )}
                  </span>
                  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                    <span className="font-bold">Giftable:</span>
                    {daily.giftable ? "Yes" : "No"}
                  </span>
                  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                    <span className="font-bold">Refundable:</span>
                    {daily.refundable ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daily;
