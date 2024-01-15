export interface ICutInput {
  width: number;
  height: number;
  quantity: number;
}

export interface IBoard {
  width: number;
  height: number;
  freeRectangles: ICut[];
  pieces: ICut[];
}

export interface ICut {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface ICutSizes {
  width: number;
  height: number;
  x?: number;
  y?: number;
}

export interface ICutInitialState {
  cuts: ICutSizes[];
  inputCuts: ICutInput[];
}

export interface IBoardSliceInitialState {
  boards: IBoard[];
}
