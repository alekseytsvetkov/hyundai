import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {TEvent} from '_app/components/EventItem/types';
import {RootState} from '..';

const url = 'https://api.github.com/events';
const per_page = 25;

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await fetch(url + '?per_page=' + per_page, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return (await response.json()) as TEvent[];
});

export const eventsAdapter = createEntityAdapter<TEvent>();

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEvents.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      eventsAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchEvents.rejected, state => {
      state.loading = false;
    });
  },
});

export const {selectAll: selectAllEvents} = eventsAdapter.getSelectors(
  (state: RootState) => state.events,
);

export default eventsSlice.reducer;
