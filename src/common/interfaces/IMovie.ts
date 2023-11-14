export interface Movie {
  _id: string;
  title: string;
  slug?: string;
  image: Buffer;
  imageMimeType: string;
  director: string;
  platforms: string[];
  score?: number;
  createdAt: Date;
  updatedAt: Date;
  reviews: string[];
}

export interface MovieParamsToSave {
  _id?: string;
  title: string;
  slug?: string;
  image: Buffer;
  imageMimeType: string;
  director: string;
  platforms: string[];
  score?: number;
  createdAt?: Date;
  updatedAt?: Date;
  reviews?: string[];
}

export type MovieFormData = Pick<
  Movie,
  'title' | 'image' | 'director' | 'platforms' | 'imageMimeType'
>;

export interface GetMoviesPaginatedDTO extends Partial<Movie> {
  page: number;
  limit: number;
}

export interface UpdateMovieDTO {
  title?: string;
  director?: string;
  image?: Buffer;
  imageMimeType?: string;
  platforms?: string[];
}
