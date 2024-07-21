export interface INav {
  id: number;
  text: string;
  special: boolean;
}
export interface ICarousel {
  id: number;
  path: string;
}
export interface IProduct {
  title: string;
  details: IDetails[];
}
export interface IDetails {
  id: number;
  path: string;
  productName: string;
  productSpecies: string;
  price: string;
  salesPrice?: string;
}
export interface IBlog {
  id: number;
  imgPath: string;
  title: string;
  text: string;
}
