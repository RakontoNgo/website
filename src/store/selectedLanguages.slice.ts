import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

interface SelectedLanguageState {
  selectedLanguage: string;
}

const initialState: SelectedLanguageState = {
  selectedLanguage: 'En',
};

interface RootState {
  selectedLanguage: SelectedLanguageState;
}

interface ReturnSelectedLanguagesFromStore {
  selectedLanguage: string;
  // eslint-disable-next-line no-unused-vars
  setSelectedLanguage: (language: string) => void;
}

const selectedLanguagesSlice = createSlice({
  name: 'selectedLanguage',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = selectedLanguagesSlice.actions;

export const useSelectedLanguagesFromStore =
  (): ReturnSelectedLanguagesFromStore => {
    const selectedLanguage = useSelector(
      (state: RootState) => state.selectedLanguage.selectedLanguage
    );
    const dispatch = useDispatch();
    const setSelectedLanguage = (language: string) =>
      dispatch(setLanguage(language));

    return { selectedLanguage, setSelectedLanguage };
  };

export default selectedLanguagesSlice.reducer;
