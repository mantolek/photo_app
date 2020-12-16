export interface IErrorReducer {
  type: string;
  payload?: {
    msg: string;
  };
}
