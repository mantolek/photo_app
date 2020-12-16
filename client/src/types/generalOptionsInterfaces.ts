export interface IGeneralOptions {
  name: string;
  min: number;
  max: number;
}

export interface IGeneralOptionsState {
  general_state: {
    id: string;
    list: {
      id: string;
    }[];
    openApp: boolean;
    edit: boolean;
    filters: string[];
    clippaths: {
      name: string;
      value: string;
    }[];
  };
}
