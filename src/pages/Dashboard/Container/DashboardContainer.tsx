import DashboardComponent from '@pages/Dashboard/Dashboard';
import * as leadFormSlice from '@pages/Dashboard/slice.ts';
import { useAppDispatch, useAppSelector } from '@store/reduxHook';
import type { IObjectLiteral } from '@/types/type';

const DashboardContainer = (props: IObjectLiteral) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state?.rootReducer?.user);
  const characters = useAppSelector(
    (state) => state?.rootReducer?.character?.payload
  );

  props = { ...props, users, characters };

  const fetchCharacters = (formData: any): any => {
    return dispatch(leadFormSlice.fetchCharacters(formData));
  };

  const cleanCharacter = (): any => {
    return dispatch(leadFormSlice.cleanCharacter());
  };

  return (
    <DashboardComponent
      fetchCharacters={fetchCharacters}
      cleanCharacter={cleanCharacter}
      {...props}
    />
  );
};
export default DashboardContainer;
