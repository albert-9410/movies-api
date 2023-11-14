export interface Review {
  _id: string;
  movieId: string;
  platformId: string;
  author: string;
  body: string;
  score: number;
}
