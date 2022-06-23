import React from "react";

const Daily = ({ daily = [] }) => {
  // console.log(daily);

  return (
    <div>
      <h3 id="daily" className="text-2xl text-center text-black py-10">Daily Offers 🔥</h3>

      <div className="">
        <p className="text-center pt-5  text-xl ">
          {daily.map((daily, index) => (
            <div key={index} className="flex flex-wrap justify-center ">
              <div class=" max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  class="w-full bg-black"
                  src={
                    daily.items[0].images.featured
                      ? daily.items[0].images.featured
                      : daily.items[1].images.featured
                  }
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <p class="font-normal">{daily.items[0].name}</p>
                  {/* <p class="font-normal"><span className="font-semibold">Price:</span> {daily.finalPrice} V-Bucks</p>
                  <p class="font-normal"><span className="font-semibold">Regular Price:</span> {daily.regularPrice} V-Bucks</p> */}

                  <p class="text-grey-darker text-base">???</p>
                </div>
                <div class="px-6 py-4">
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                    <span className="font-bold">Price:</span>{" "}
                    {daily.regularPrice}
                  </span>
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
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
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                    <span className="font-bold">Giftable:</span>
                    {daily.giftable ? "Yes" : "No"}
                  </span>
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                    <span className="font-bold">Refundable:</span>
                    {daily.refundable ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Daily;
