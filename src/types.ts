export type CharacterCard = {
  created: string;
  episode: Array<string> | undefined;
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
};

export type InfoType = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
