export interface IPlayGround {
  change_one: Function;
}

export interface IPlayGroundState {
  general_state: {
    list: {
      src: string;
      id: string;
      element: string;
      clippath: string;
      height: number;
      top: number;
      left: number;
      width: number;
      rotate: number;
      filter: {
        final: string;
      }[];
      bgCol: string;
      opacity: number;
      borderRadius: number;
      zIndex: number;
      widthA: {
        play: boolean;
        time: number;
        timing_func_name: string;
        timing_func_value_1: string;
        timing_func_value_2: string;
        timing_func_value_3: string;
        timing_func_value_4: string;
        timing_func_final: string;
      }[];
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
    }[];
    idx: string;
    edit: boolean;
    global: boolean;
    openApp: boolean;
    id: string;
    element: string;
    infomove: string;
    infonotmove: string;
  };
  auth: {
    isAuthenticated: boolean;
  };
  image: {
    background: string;
  };
}
