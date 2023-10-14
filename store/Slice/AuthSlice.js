import { createSlice} from '@reduxjs/toolkit';

const intialState = {
	loginData: {},
	authLoading: false,
	screenLoading: false,
	buttonLoading: false
};

const AuthSlice = createSlice({
	name: 'admin_client',
	initialState: intialState,
	reducers: {
		AuthData: (state,action) => {
			state.loginData = action.payload;
		},
		AuthLoading: (state,action) => {
			state.authLoading = action.payload
		},
		ScreenLoading: (state,action) => {
			state.screenLoading = action.payload
		},
		ButtonLoading:  (state,action) => {
			state.buttonLoading = action.payload
		}
	}
});


export const {
	AuthData,
	AuthLoading,
	ScreenLoading,
	ButtonLoading
} = AuthSlice.actions;

export default AuthSlice.reducer;