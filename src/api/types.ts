export interface Show {
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
  webChannel: null | WebChannel;
  dvdCountry: null;
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
  average: number | null;
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

interface WebChannel {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
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

export interface SearchResponse {
  show: Show;
  score: number;
}
