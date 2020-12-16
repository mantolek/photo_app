export interface IPhoto {
  getPhotos: Function;
  overwritePhoto: Function;
  savePhoto: Function;
  getMyPhotos: Function;
  change_one: Function;
}

export interface IPhotoState {
  general_state: {
    photo_current_id: string;
  };
  photo: {
    photos: {
      download_list: string;
      _id: string;
      src: string;
    }[];
    option: string;
  };
}
