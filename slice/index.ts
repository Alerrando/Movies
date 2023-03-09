import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LoginProps {
  email: string;
  password: string;
  favorites: [];
  recentsView: [];
}

const LoginAux: LoginProps = {
  email: '',
  password: '',
  favorites: [],
  recentsView: [],
};

export interface StateProps {
  user: LoginProps;
}

const initialState: StateProps = {
  user: LoginAux,
};

export const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<LoginProps>) => {
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
        favorites: action.payload.favorites,
        recentsView: action.payload.recentsView,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInUser } = Slice.actions;

export const selecValue = (state: RootState) => state.Slice;

export default Slice.reducer;
