import type { IObjectLiteral } from '@/types/type.ts';

export interface DataProps {
  episode?: IObjectLiteral;
  fetchEpisodeByID: (formData: IObjectLiteral) => void;
  cleanEpisodeID: () => void;
}
