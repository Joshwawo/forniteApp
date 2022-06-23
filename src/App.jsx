import { useEffect, useState } from "react";
import Bundles from "./components/Bundles";
import Daily from "./components/Daily";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import SpecialFeatured from "./components/SpecialFeatured";

function App() {
  const newsUrl = "https://fortnite-api.com/v2/news";
  const dailyUrl = "https://fortnite-api.com/v2/shop/br";

  const [news, setNews] = useState([]);
  const [daily, setDaily] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [bundles, setBundles] = useState([]);
  const [specialFeatured, setSpecialFeatured] = useState([]);
  const [vbucksIcon, setVbucksIcon] = useState([]);


  const fetchDaily = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDaily(data.data.daily.entries);
        setFeatured(data.data.featured.entries);
        setBundles(data.data.featured.entries);
        setSpecialFeatured(data.data.specialFeatured.entries)
        setVbucksIcon(data.data.vbuckIcon);
        // console.log(data.data.specialFeatured.entries );
      })
      .catch((err) => console.log(err));
  };

  const fetchNews = (url) => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setNews(data.data.br.motds);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews(newsUrl);
  }, []);

  useEffect(() => {
    fetchDaily(dailyUrl);
  }, []);

  return (
    <>
      <Navbar />
      <News news={news} />
      <Daily daily={daily} />
      <Bundles bundles={bundles} />
      <Featured featured={featured} />
      <SpecialFeatured specialFeatured={specialFeatured}
       vbucksIcon={vbucksIcon}
      />

      <Footer />
    </>
  );
}

export default App;
