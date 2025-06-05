import DataComponent from '@pages/Data/Data.tsx';
import * as dataSlice from '@pages/Data/slice.ts';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import type { IObjectLiteral } from '@/types/type';

const DataContainer = (props: IObjectLiteral) => {
  const dispatch = useAppDispatch();
  const episode = useAppSelector(
    (state) => state?.rootReducer?.episode?.payload
  );

  const episodeError = useAppSelector(
    (state) => state?.rootReducer?.episode?.error
  );

  props = { ...props, episode, episodeError };

  const fetchEpisodeByID = (formData: any): any => {
    return dispatch(dataSlice.fetchEpisodeByID(formData));
  };

  const cleanEpisodeID = (): any => {
    return dispatch(dataSlice.cleanEpisodeID());
  };

  return (
    <DataComponent
      fetchEpisodeByID={fetchEpisodeByID}
      cleanEpisodeID={cleanEpisodeID}
      {...props}
    />
  );
};
export default DataContainer;
