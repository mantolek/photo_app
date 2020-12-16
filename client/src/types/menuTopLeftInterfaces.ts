export interface IMenuTopLeft {
  name: string;
  change_one: Function;
}

export interface IMenuTopLeftState {
  general_state: {
    global: boolean;
    edit: boolean;
    list: {}[];
    id: string;
  };
  image: {
    openCloseFolders: boolean;
  };
}
