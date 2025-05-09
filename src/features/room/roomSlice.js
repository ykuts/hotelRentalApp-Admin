import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const API_URL = process.env.REACT_APP_API_URL || "https://hotelrentalappserver.up.railway.app";

const initialState = {
  rooms: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// create room
export const createRoom = createAsyncThunk(
  "room/create",
  async (roomData, thunkApi) => {
    try {
      console.log("Creating room with data:", roomData);
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.token) {
        return thunkApi.rejectWithValue("User is not authorized");
      }
      const res = await fetch(`${API_URL}/api/rooms`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
        method: "POST",
        body: JSON.stringify(roomData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API responded with error:", res.status, errorText);
        return thunkApi.rejectWithValue(errorText);
      }

      const data = await res.json();
      console.log("Room created successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in createRoom:", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// get all rooms
export const getRooms = createAsyncThunk("room/getall", async (_, thunkApi) => {
  try {
    const res = await fetch(`${API_URL}/api/rooms`);
    console.log(res);
    if (!res.ok) {
      const error = await res.json();
      return thunkApi.rejectWithValue(error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

// update room
export const updateRoom = createAsyncThunk(
  "/room/update",
  async (roomData, thunkApi) => {
    try {
      const { roomId, ...rest } = roomData;
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`${API_URL}/api/rooms/${roomId}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
        method: "PUT",
        body: JSON.stringify(rest)
      });
      const data =  res.json();
      console.log(data);
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

export const deleteRoom = createAsyncThunk(
  "room/delete",
  async (roomId, thunkApi) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.token) {
        console.error("No token available");
        return thunkApi.rejectWithValue("Authentication required");
      }
      
      console.log("Deleting room with ID:", roomId);
      
      const res = await fetch(`${API_URL}/api/rooms/${roomId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error(`Error ${res.status}: ${errorText}`);
        return thunkApi.rejectWithValue(errorText || `Error ${res.status}`);
      }
      
      const data = await res.json();
      console.log("Room successfully deleted:", data);
      return data;
    } catch (error) {
      console.error("Error deleting room:", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // add cases here
    builder
      .addCase(createRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(getRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.rooms = action.payload;
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = state.rooms.filter(
          (room) => room._id !== action.payload.id
        );
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = roomSlice.actions;
export default roomSlice.reducer;
