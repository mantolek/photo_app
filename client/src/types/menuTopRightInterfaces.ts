export interface IMenuTopRight {
  change_one: Function;
  logout: Function;
}

export interface IMenuTopRightState {
  general_state: {
    global: boolean;
    edit: boolean;
    list: {
      id: string;
    }[];
    id: string;
  };
  auth: {
    isAuthenticated: boolean;
    user: {
      name: string;
    };
  };
}
