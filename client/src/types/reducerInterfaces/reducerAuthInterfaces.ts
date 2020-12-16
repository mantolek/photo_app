export interface IAuthReducer {
    type: string;
    payload?: {
      isAuthenticated: boolean;
      token: string;
      user: Object;
    };
  }