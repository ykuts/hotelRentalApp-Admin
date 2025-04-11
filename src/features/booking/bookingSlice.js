import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const API_URL = process.env.REACT_APP_API_URL || "https://hotelrentalappserver.up.railway.app";

const initialState = {
  bookings: [],
  booking: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const createBooking = createAsyncThunk(
  "booking/create",
  async (bookingData, thunkApi) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`${API_URL}/api/bookings`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user?.token}`
        },
        method: "POST",
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (!res.ok) {
        return thunkApi.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getBookings = createAsyncThunk(
  "booking/getbookings",
  async (_, thunkApi) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`${API_URL}/api/bookings`, {
        headers: {
          "Authorization": `Bearer ${user?.token}`,
          "Content-Type": "application/json"
        },
        method: "GET"
      });
      const data = await res.json();
      if (!res.ok) {
        return thunkApi.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteBooking = createAsyncThunk(
  "booking/delete",
  async (id, thunkApi) => {
    try {
       const user = JSON.parse(localStorage.getItem("user"));
      
      const res = await fetch(`${API_URL}/api/bookings/${id}`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${user?.token}`
        },
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        return thunkApi.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const confirmBooking = createAsyncThunk(
  "booking/confirm",
  async (bookingId, thunkApi) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      
      const res = await fetch(`${API_URL}/api/bookings/${bookingId}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user?.token}`
        },
        method: "PUT",
        body: JSON.stringify({ confirmed: true }),
      });
      const data = await res.json();
      if (!res.ok) {
        return thunkApi.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// booking slice
export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.booking = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = action.payload;
      })
      .addCase(getBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = state.bookings.filter(
          (booking) => booking._id.toString() !== action.payload.id
        );
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(confirmBooking.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(confirmBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = action.payload;
      })
      .addCase(confirmBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookingSlice.actions;

export default bookingSlice.reducer;
