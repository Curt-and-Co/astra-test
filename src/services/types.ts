interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null; // Assuming it's always null, otherwise, define a type for it
  dvdCountry: null; // Same as above
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: Link;
  previousepisode: Link;
}

interface Link {
  href: string;
}

export interface SearchShowsApiResponse {
  score: number;
  show: Show;
}
[];
