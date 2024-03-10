import { Context } from "./Context.js";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import podcastData from "./podcasts.json";
import PodcastsCards from "./components/PodcastsCards";
import { CategoriesInterface } from "./interfaces/index.js";

const App = () => {
  const [context, setContext] = useState(podcastData);
  const [podcasts, setPodcasts] = useState(context);
  const [click, setClick] = useState<boolean | undefined>(undefined);
  const [categories, setCategories] = useState<any>({});
  const [searchPodcast, setSearchPodcast] = useState<string>("");

  useEffect(() => {
    let obj: CategoriesInterface = {};
    const listCategories = podcasts.map((elem: any) => elem.categories);
    listCategories.forEach((elem: any) => Object.assign(obj, elem));
    setCategories(obj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    click === undefined ? setClick(true) : setClick(!click);
  };

  const handleClickSearch = () => {
    const results = context.filter((elem: any) => {
      if (searchPodcast === "") return setPodcasts([]);
      return elem.title.toLowerCase().includes(searchPodcast.toLowerCase());
    });
    if (results.length > 0) {
      setPodcasts(results);
    } else {
      setPodcasts([]);
    }
  };

  const createHandleMenuClick = (menuItem: string) => {
    let array: any = [];
    array = context.filter((elem: any) =>
      elem.categories?.hasOwnProperty(menuItem)
    );
    if (array.length > 0) {
      setPodcasts(array);
    } else {
      setPodcasts(podcasts);
    }
  };

  const handleClickImage = () => {
    setPodcasts(context);
    setSearchPodcast("");
  };

  useEffect(() => {
    if (click != null) {
      if (click) {
        let sortAZ = context.sort((a: any, b: any) =>
          a.title.localeCompare(b.title)
        );
        setPodcasts(sortAZ);
      } else {
        let sortZA = context.sort((a: any, b: any) =>
          b.title.localeCompare(a.title)
        );
        setPodcasts(sortZA);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <Context.Provider value={[context, setContext]}>
      <Navbar
        podcasts={podcasts}
        handleSearch={handleClickSearch}
        createHandleMenuClick={createHandleMenuClick}
        handleClickImage={handleClickImage}
        categories={categories}
        searchPodcast={searchPodcast}
        setSearchPodcast={setSearchPodcast}
        click={click}
        handleClick={handleClick}
      />
      <PodcastsCards podcasts={podcasts} />
    </Context.Provider>
  );
};

export default App;
