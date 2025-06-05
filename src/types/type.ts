export type VariableLiteral = string | number | boolean | any | unknown;
export interface IObjectLiteral<T = VariableLiteral> {
  [key: string]: T | any;
}

export interface mainHeaders {
  name: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterState {
  payload: Character[];
  loading: boolean;
  error: string | {} | null;
}
