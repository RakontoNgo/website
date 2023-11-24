import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

interface ProjectSelectedSubjectState {
  projectSelectedSuject: string | null;
}

const initialState: ProjectSelectedSubjectState = {
  projectSelectedSuject: null,
};

interface RootState {
  projectSelectedSuject: ProjectSelectedSubjectState;
}

interface ReturnProjectSelectedSubjectFromStore {
  projectSelectedSuject: string | null;
  // eslint-disable-next-line no-unused-vars
  setProjectSelectedSubject: (subject: string | null) => void;
}

const projectSelectedSubjectSlice = createSlice({
  name: 'projectSelectedSuject',
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<string | null>) => {
      state.projectSelectedSuject = action.payload;
    },
  },
});

export const { setSubject } = projectSelectedSubjectSlice.actions;

export const useProjectSelectedSubjectFromStore =
  (): ReturnProjectSelectedSubjectFromStore => {
    const projectSelectedSuject = useSelector(
      (state: RootState) => state.projectSelectedSuject.projectSelectedSuject
    );
    const dispatch = useDispatch();
    const setProjectSelectedSubject = (subject: string | null) =>
      dispatch(setSubject(subject));

    return { projectSelectedSuject, setProjectSelectedSubject };
  };

export default projectSelectedSubjectSlice.reducer;
