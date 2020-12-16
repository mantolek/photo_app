export interface IConsole {
  change_one: Function;
  reset: Function;
}

export interface IConsoleState {
  general_state: {
    page: string;
    randomNumber_1: string;
    randomNumber_2: string;
    openApp: boolean;
    menuLeft: {
      name: string;
    }[];
    element: string;
    options: {
      name: string;
      value: number;
      min: number;
      max: number;
    }[];
    animations: {
      name: string;
      subName: string;
    }[];
  };
  auth: {
    isAuthenticated: boolean;
  };
  image: {
    openCloseFolders: boolean;
    folders: {
      name: string;
      children: {
        id: string;
        pics: {
          src: string;
          alt: string;
        }[];
      }[];
    }[];
    backgrounds: {
      src: string;
      alt: string;
    }[];
  };
}