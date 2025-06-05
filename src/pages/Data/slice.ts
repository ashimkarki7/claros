import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v2Fetch } from '@/util/httpUtil';

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

export const fetchEpisodeByID = createAsyncThunk(
  'episodeId/fetch',
  (formData: any, { rejectWithValue }) => {
    let queryParams = '';
    Object.keys(formData).forEach((key) => {
      switch (key) {
        case 'id': {
          if (formData[key]) queryParams += `${formData[key]}`;
          break;
        }
      }
    });

    return v2Fetch(`/episode/${queryParams}`)
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

export const episodeIdSlice = createSlice({
  name: 'episodeId',
  initialState: initialState,
  reducers: {
    cleanEpisodeID: (state) => {
      state.loading = false;
      state.payload = [];
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodeByID.pending, (state) => {
      state.loading = true;
      state.error = {};
      state.payload = [];
    });

    builder.addCase(fetchEpisodeByID.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
    });
    builder.addCase(fetchEpisodeByID.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.payload;
    });
  },
});

export const { cleanEpisodeID } = episodeIdSlice.actions;
export default episodeIdSlice.reducer;
