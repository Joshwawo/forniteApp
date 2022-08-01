import Comparador from "./Comparador";

const Daily = ({ daily = [] }) => {
  // console.log(color);
  // console.log(daily[0].items[0].type);
  // console.log(daily[0].newDisplayAsset.materialInstances[0].colors.Background_Color_A);
  // console.log(daily);
  console.log(daily)

  daily.map((daily, index) => {console.log(daily.newDisplayAsset== null ? "" : daily.newDisplayAsset.materialInstances[0].images.Background)})
  
  return (
    <div>
      <h3 id="daily" className="text-2xl text-center text-black py-10 uppercase">
        Daily Offers ⛏️🔥
      </h3>

      <div className="">
        <div className="md:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5  mx-4">
          {daily.map((daily, index) => (
            <div key={index} className="flex flex-wrap justify-center  ">
              <div className="max-w-md   rounded overflow-hidden shadow-lg my-2  ">
                <img
                  // style={{backgroundColor: color}}
                  loading="lazy"
                  className="w-full bg-black/80"
                  src={
                   daily.newDisplayAsset == null ? "" : daily.newDisplayAsset.materialInstances[0].images.Background                 }
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <p className="font-bold">{daily.items[0].name}</p>
                  {/* <p className="font-normal"><span className="font-semibold">Price:</span> {daily.finalPrice} V-Bucks</p>
                  <p className="font-normal"><span className="font-semibold">Regular Price:</span> {daily.regularPrice} V-Bucks</p> */}

                  <p className="text-grey-darker font-semibold text-base">{daily.items[0].type.displayValue}</p>
                </div>
                <div className="px-4 py-4">
                  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                    <span className="font-bold">Price:</span>{" "}
                    {daily.regularPrice} V-Bucks
                  </span>
                  <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                    <span className="font-bold">Rarity:</span>{" "}
                   <Comparador>{daily.items[0].rarity.displayValue}</Comparador>
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

{/* <img
                  // style={{backgroundColor: color}}
                  className="w-full bg-black/80"
                  src={
                    daily.items[0].images.featured
                      ? daily.items[0].images.featured
                      : daily.items[1].images.featured
                  }
                  alt="Sunset in the mountains"
                /> */}

export default Daily;
