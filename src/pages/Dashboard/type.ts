import type { IObjectLiteral } from '@/types/type.ts';

export interface DashboardProps {
  users?: IObjectLiteral;
  characters?: IObjectLiteral;
  charactersLoading?: boolean;
  fetchCharacters: (formData: IObjectLiteral) => void;
  cleanCharacter: () => void;
}
