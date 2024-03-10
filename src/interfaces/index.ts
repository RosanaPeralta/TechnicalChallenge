export interface Categories {
  number: string;
}

export interface PodcastInformation {
  id: number;
  url: string;
  title: string;
  description: string;
  author: string;
  image: string;
  artwork: string;
  newestItemPublishTime: number;
  itunesId: number;
  trendScore: number;
  language: number;
  categories: Categories;
}

export interface SortComponent {
  click: boolean | undefined;
  handleClick(): any;
}

export interface PodcastInformationList {
  podcasts: PodcastInformation[];
}

export interface NavbarInterface {
  handleSearch(searchPodcast: string): any;
  podcasts: any;
  categories: any;
  createHandleMenuClick: any;
  handleClickImage: any;
  searchPodcast: string;
  setSearchPodcast(searchPodcast: string): any;
  click: boolean | undefined;
  handleClick(): any;
}
