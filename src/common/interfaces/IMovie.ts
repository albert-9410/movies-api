export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface Movie {
  id: string;
  title: string;
  slug?: string;
  image: Buffer;
  imageMimeType: string;
  director: string;
  platforms: string[];
  score?: number;
  createdAt: Date;
  updatedAt: Date;
  reviews: Review[];
}

export interface MovieParamsToSave {
  id?: string;
  title: string;
  slug?: string;
  image: Buffer;
  imageMimeType: string;
  director: string;
  platforms: string[];
  score?: number;
  createdAt?: Date;
  updatedAt?: Date;
  reviews?: Review[];
}


export type MovieFormData = Pick<
  Movie,
  'title' | 'image' | 'director' | 'platforms' | 'imageMimeType'
>;

export interface GetMoviesPaginatedDTO extends Partial<Movie> {
  page: number;
  limit: number;
}