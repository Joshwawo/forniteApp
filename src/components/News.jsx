const News = ({ news = [] }) => {
  // console.log(news.map((motd) => motd.title));
  // console.log(news);

  return (
    <div className=" ">
      <p className="text-center pt-20 pb-8  text-2xl uppercase">Fortnite News</p>
      <div id="news" className="md:flex gap-5 justify-center mx-4">
        {/* <img src="https://cdn.fortnite-api.com/news/v2/2817aa1aa08f6d9dd62b59877caecaa9a219975a.gif" alt="" /> */}
        {news.map((motd, index) => (
          <div key={index} className="flex flex-wrap justify-center ">
            <div class=" max-w-xs rounded overflow-hidden shadow-lg my-2">
              <img
                class="w-full"
                src={motd.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{motd.title}</div>
                <p class="text-grey-darker text-base">{motd.body}</p>
              </div>
              <div class="px-6 py-4">
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  #{motd.tabTitle}
                </span>
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"></span>
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
