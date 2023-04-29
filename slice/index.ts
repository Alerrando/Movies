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

export type MenuBarProps = {
  value: string;
};

const MenuBar: MenuBarProps = {
  value: "closed" || "open",
};

export interface StateProps {
  user: LoginProps;
  MenuBarAside: MenuBarProps;
  MenuBarHeader: MenuBarProps;
}

const initialState: StateProps = {
  user: LoginAux,
  MenuBarAside: MenuBar,
  MenuBarHeader: MenuBar,
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
      state.MenuBarAside.value == "closed" ? state.MenuBarAside.value = "open" : state.MenuBarAside.value = 'closed'
    },

    handleMenuBarHeader: (state) => {
      state.MenuBarHeader.value == "closed"? state.MenuBarHeader.value = "open" : state.MenuBarHeader.value = 'closed'
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInUser, handleMenuBarAside, handleMenuBarHeader } = Slice.actions;

export const selecValue = (state: RootState) => state.Slice;

export default Slice.reducer;
