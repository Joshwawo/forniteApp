const News = ({ news = [] }) => {
    console.log(news.motds);
  
    news.motds.map((motd) => {
      console.log(motd.description);
    });
  
    return (
      <>
        <p className="text-center text-2xl">Fortnite News</p>
        {news.motds.map((motd, index) => (
          <div key={index} className="flex flex-wrap justify-center">
              <div>
                  <img src={motd.image} alt="" />
                  <p className="text-center text-2xl">{motd.title}</p>
                  <p className="text-center text-2xl">{motd.body}</p>
                  <p className="text-center text-2xl">{motd.description}</p>
              </div>
          </div>
        ))}
      </>
    );
  };
  
  export default News;
  