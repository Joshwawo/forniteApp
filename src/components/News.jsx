const News = ({ news = [], stw=[]}) => {
  // console.log(news.map((motd) => motd.title));
  // console.log(news.map((item, index ) => console.log(item.websiteUrl)));
  // console.log(stw.messages);
  // console.log(stw.map((newi, index) =>console.log(newi)));
  

  return (
    <div className=" ">
      <p className="text-center pt-20 pb-8 text-2xl uppercase">Fortnite News</p>
      <div id="news" className=" md:flex  gap-5 justify-center mx-4  ">
        {/* <img src="https://cdn.fortnite-api.com/news/v2/2817aa1aa08f6d9dd62b59877caecaa9a219975a.gif" alt="" /> */}
        {news.map((motd, index) => (
          <div key={index} className="flex flex-wrap justify-center ">
            <div className=" max-w-xs rounded overflow-hidden shadow-lg my-2">
              <img
                className="w-full"
                src={motd.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{motd.title}</div>
                <p className="text-grey-darker text-base mb-5">{motd.body}</p>
                {
                  motd.websiteUrl == undefined ? "" : <a className="font-semibold hover:text-green-500 up" href={motd.websiteUrl} >Read Complete...</a>
                }
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  #{motd.tabTitle}
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"></span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"></span>
              </div>
            </div>
          </div>
        ))}
      </div>

     

      <div id="news" className=" md:flex  gap-5 justify-center mt-10  ">

      
        {stw.map((messages, index) => (

          <div key={index} className="flex flex-wrap justify-center ">
            <div className=" max-w-xs rounded overflow-hidden shadow-lg my-2">
              <img
                className="w-full"
                src={messages.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{messages.title}</div>
                <p className="text-grey-darker text-base mb-5">{messages.body}</p>
                
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  #{messages.adspace}
                </span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"></span>
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Fin noticias 2 */}



    </div>
  );
};

export default News;
