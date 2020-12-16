export interface IPhotoReducer {
  type: string;
  payload?: {
    photoInfo: string;
    option: string;
    photos: Array<any> | null;
  }[];
}
