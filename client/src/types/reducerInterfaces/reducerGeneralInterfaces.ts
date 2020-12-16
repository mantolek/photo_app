export interface IGeneral {
  type: string;
  payload?: {
    loadName: string;
    loadSubName: string;
    loadValue: string;
    id: string;
    loadType: string;
    loadFilters: string;
    loadFilterName: string;
  };
}

export interface initialStateGeneral {
  id: string | null;
  idx: string | null;
  filters: string[];
  openApp: boolean;
  element: boolean;
  global: boolean;
  page: string;
  edit: boolean;
  infomove: boolean;
  infonotmove: boolean;
  randomNumber_1: number;
  randomNumber_2: number;
  photo_current_id: string;
  list: {
    id: string;
    left: string;
    top: string;
    height: number;
    width: number;
    opacity: number;
    element: object;
    rotate: number;
    filter: {
      name: string;
      value: string;
      final: string;
    }[];
    clippath: string;
    borderRadius: number;
    zIndex: number;

    heightA: {
      play: boolean;
      time: number;
      timing_func_name: string;
      timing_func_value_1: string;
      timing_func_value_2: string;
      timing_func_value_3: string;
      timing_func_value_4: string;
      timing_func_final: string;
    }[];
    widthA: {
      play: false;
      time: 1;
      timing_func_name: string;
      timing_func_value_1: string;
      timing_func_value_2: string;
      timing_func_value_3: string;
      timing_func_value_4: string;
      timing_func_final: string;
    }[];
  }[];
  options: object[];
  clippath: string;
  clippaths: object[];
  animations: object[];
  animTimFunc: object[];
  menuLeft: object[];
}
