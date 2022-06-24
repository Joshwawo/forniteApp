import React from "react";

const Featured = ({ featured = [] }) => {
  // console.log(featured);
  // // console.log(
  //   featured.map((cosa, index) => {
  //     console.log(cosa.bundle == null ? "tengo bundle" : "no tengo bundle");
  //   })
  // );

  //   <img
  //     class="w-full"
  //     src={featured.bundle.image == null ? img : "No tengo imagen "}
  //     alt="Sunset in the mountains"
  //   />;

  return (
    <div className=" ">
      <p className="text-center pt-20 pb-8  text-2xl uppercase">
        Special Featured Store
      </p>
      <div id="news" className="md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5  mx-4">
        {/* <img src="https://cdn.fortnite-api.com/news/v2/2817aa1aa08f6d9dd62b59877caecaa9a219975a.gif" alt="" /> */}
        {featured.map((featured, index) => (
          <div key={index} className="flex flex-wrap justify-center ">
            <div className=" max-w-sm rounded overflow-hidden shadow-lg my-2">
              <img
                className="w-full bg-black/80"
                src={featured.items[0].images.featured}
                alt="Sunset in the mountains"
              />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {featured.items[0].name}
                </div>
                <p className="text-grey-darker text-base">
                  {featured.items[0].type.displayValue}
                </p>
              </div>
              <div className="px-4 py-4">
                <span className=" inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  <span className="font-bold"> Price:</span>{" "}
                  {featured.finalPrice} V-Bucks
                </span>

                <span className=" inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  <span className="font-bold"> Rarity:</span>{" "}
                  {featured.items[0].rarity.displayValue == "Epic" ? (
                    <span className="text-purple-500">Epic</span>
                  ) : featured.items[0].rarity.displayValue == "Rare" ? (
                    <span className="text-blue-500"> Rare</span>
                  ) : featured.items[0].rarity.displayValue == "Uncommon" ? (
                    <span className="text-green-500 "> Uncommon</span>
                  ) : featured.items[0].rarity.displayValue == "Icon Series" ? (
                    <span className="text-cyan-500">Icon Series</span>
                  ) : (
                    ""
                  )}
                </span>

                <span className=" inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                  <span className="font-bold"> Gittable:</span>{" "}
                  {featured.giftable ? "Yes" : "No"}
                </span>
                <span className=" inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                  <span className="font-bold "> Refundable: </span>{" "}
                  {featured.giftable ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
