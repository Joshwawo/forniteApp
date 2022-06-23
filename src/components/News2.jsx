const News2 = ({ news = [] }) => {
  // console.log(news.map((motd) => motd.title));
  // console.log(news);

  return (
    <div className="bg-green-300 uppercase flex gap-5">
      
        {news.map((motd, index) => (
         <div key={index} className="col mb-4">
            <div className="card">
                <img src={motd.image}  alt="" />
                <div className="card-body">
                    <h5 className="card-title">hola</h5>

                </div>
            </div>
         </div>
        ))}
      

      
    </div>
  );
};

export default News2;
