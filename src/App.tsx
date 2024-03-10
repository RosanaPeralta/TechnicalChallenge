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

  const listCategories = () => {
    let categories: CategoriesInterface = {};
    const listCategories = context.map((elem: any) => elem.categories);
    listCategories.forEach((elem: any) => Object.assign(categories, elem));
    return categories;
  };
  useEffect(() => {
    setTimeout(() => {
      setCategories(listCategories());
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

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
        let sortZA = context.sort((a: any, b: any) =>
          b.title.localeCompare(a.title)
        );
        setPodcasts(sortZA);
      } else {
        let sortAZ = context.sort((a: any, b: any) =>
          a.title.localeCompare(b.title)
        );
        setPodcasts(sortAZ);
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
