export interface IAnimations {
    name: string;
  }
  
export interface IAnimationsState {
    general_state: {
      id: string;
      list: {
        id: string;
      }[];
      edit: boolean;
      animTimFunc: {
        value: string;
        name: string;
      }[]
    }
  }