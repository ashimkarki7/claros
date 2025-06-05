import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v2Fetch } from '@/util/httpUtil.ts';

interface CharacterState {
  payload: any[];
  error: any;
  loading: boolean;
}

const initialState: CharacterState = {
  payload: [],
  error: {},
  loading: true,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  (formData: any, { rejectWithValue }) => {
    let queryParams = '';
    Object.keys(formData).forEach((key) => {
      switch (key) {
        case 'page': {
          if (formData[key]) queryParams += `page=${formData[key]}`;
          break;
        }
        case 'name': {
          if (formData[key])
            queryParams += `&name=${encodeURIComponent(formData[key])}`;
          break;
        }
      }
    });

    return v2Fetch(`https://rickandmortyapi.com/api/character?${queryParams}`)
      .then((response: any) => {
        if (response.status === 200) {
          return Promise.resolve(response?.data);
        } else {
          // TODO
        }
      })
      .catch((error) => {
        const errorThrown = JSON.parse(error);
        return rejectWithValue(errorThrown?.message);
      });
  }
);

export const characterSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    cleanCharacter: (state) => {
      state.loading = false;
      state.payload = [];
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
      state.error = {};
      state.payload = [];
    });

    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.payload;
    });
  },
});

export const { cleanCharacter } = characterSlice.actions;
export default characterSlice.reducer;
