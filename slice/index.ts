import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LoginProps {
  email: string;
  password: string;
  favorites: [];
  recentsView: [];
}

const LoginValue: LoginProps = {
  email: '',
  password: '',
  favorites: [],
  recentsView: [],
};

export type MenuBarProps = {
  value: string;
};

const MenuBarValue: MenuBarProps = {
  value: "closed" || "open",
};

export interface StateProps {
  user: LoginProps;
  MenuBarAside: MenuBarProps;
  MenuBarHeader: MenuBarProps;
}

const initialState: StateProps = {
  user: LoginValue,
  MenuBarAside: MenuBarValue,
  MenuBarHeader: MenuBarValue,
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

    handleMenuBarAside: (state) => {
      state.MenuBarAside.value = state.MenuBarAside.value === 'closed' ? 'open' : 'closed';
    },
    handleMenuBarHeader: (state) => {
      state.MenuBarHeader.value = state.MenuBarHeader.value === 'closed' ? 'open' : 'closed';
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInUser, handleMenuBarAside, handleMenuBarHeader } = Slice.actions;
export default Slice.reducer;
