import type { IObjectLiteral } from '@/types/type.ts';

export interface DataProps {
  episodeError?: any;
  episode?: IObjectLiteral;
  fetchEpisodeByID: (formData: IObjectLiteral) => void;
  cleanEpisodeID: () => void;
}
