// ===================>  firebase
// ===================>  firebase
// ===================>  firebase



// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     updateProfile,
//     onAuthStateChanged,
//     signOut,
//   } from 'firebase/auth';
//   import { auth } from '../../firebase/config';
//   import { updateUserProfile, authStateChange, authSignOut } from './authReducer';
  
//   export const authSignUpUser =
//     ({ login, email, password, photo }) =>
//     async (dispatch, state) => {
//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
  
//         const user = auth.currentUser;
  
//         await updateProfile(user, {
//           displayName: login,
//           photoURL: photo,
//         });
  
//         const {
//           uid,
//           displayName,
//           email: emailBase,
//           photoURL: photoUrlBase,
//         } = auth.currentUser;
  
//         const userProfile = {
//           userId: uid,
//           login: displayName,
//           email: emailBase,
//           photoURL: photoUrlBase,
//         };
  
//         dispatch(updateUserProfile(userProfile));
//         return user;
//       } catch (error) {
//         return error.code;
//       }
//     };
  
//   export const authSignInUser =
//     ({ login, email, password }) =>
//     async (dispatch, state) => {
//       try {
//         return await signInWithEmailAndPassword(auth, email, password);
//       } catch (error) {
//         return error.code;
//       }
//     };
  
//   // refactor to change avatar or login
//   export const authUpdateUser =
//     ({ avatarURL }) =>
//     async (dispatch, state) => {
//       try {
//         const user = auth.currentUser;
  
//         await updateProfile(user, {
//           photoURL1: avatarURL,
//         });
  
//         const {
//           uid,
//           displayName,
//           email: emailBase,
//           photoURL: photoUrlBase,
//         } = auth.currentUser;
  
//         const userProfile = {
//           userId: uid,
//           login: displayName,
//           email: emailBase,
//           photoURL: photoUrlBase,
//         };
  
//         dispatch(updateUserProfile(userProfile));
//       } catch (error) {
//         return error.code;
//       }
//     };
  
//   export const authStateChangeUser = () => async (dispatch, state) => {
//     onAuthStateChanged(auth, user => {
//       // console.log(user)
//       if (user) {
//         const userProfile = {
//           userId: user.uid,
//           login: user.displayName,
//           email: user.email,
//           photoURL: user.photoURL,
//         };
  
//         dispatch(authStateChange({ stateChange: true }));
//         dispatch(updateUserProfile(userProfile));
//       }
//     });
//   };
  
//   export const authSignOutUser = () => async (dispatch, state) => {
//     await signOut(auth);
  
//     dispatch(authSignOut());
//   };


//  ================================================> REST API
//  ================================================> REST API
//  ================================================> REST API





// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const auth = {
// 	set(token) {
// 		axios.defaults.headers.common.auth = `Bearer ${token}`;
// 	},
// 	unset() {
// 		axios.defaults.headers.common.auth = '';
// 	},
// };

// axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

// export const registerUser = createAsyncThunk(
// 	'signup',
// 	async (credentials, thunkAPI) => {
// 		try {
// 			const response = await axios.post('/user/register', credentials);
// 			auth.set(response.data.token);
// 			return response.data;
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.response.data);
// 		}
// 	}
// );
// export const loginUser = createAsyncThunk(
// 	'login',
// 	async (credentials, thunkAPI) => {
// 		try {
// 			const response = await axios.post('/user/login', credentials);
// 			auth.set(response.data.token);
// 			return response.data;
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.response.data);
// 		}
// 	}
// );
// export const userUpdate = createAsyncThunk(
// 	'update',
// 	async (credentials, thunkAPI) => {
// 		try {
// 			const response = await axios.patch('/user/update', credentials);
// 			return response.data;
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.response.data);
// 		}
// 	}
// );
// export const userUpdateAvatar = createAsyncThunk(
// 	'avatars',
// 	async (credentials, thunkAPI) => {
// 		try {
// 			const response = await axios.post('/user/avatars', credentials, {
// 				headers: {
// 					'Content-Type': 'multipart/form-data',
// 				},
// 			});
// 			return response.data;
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.response.data);
// 		}
// 	}
// );
// export const logOut = createAsyncThunk('logout', async (_, thunkAPI) => {
// 	try {
// 		const response = await axios.post('/user/logout');
// 		auth.unset();
// 		return response.data;
// 	} catch (e) {
// 		return thunkAPI.rejectWithValue(e.message);
// 	}
// });

// export const syncUser = createAsyncThunk('sync', async (_, thunkAPI) => {
// 	const state = thunkAPI.getState();
// 	const persistedToken = state.auth.token;
// 	if (persistedToken === null) {
// 		return thunkAPI.rejectWithValue('Unable to fetch user');
// 	}
// 	try {
// 		auth.set(persistedToken);
// 		const response = await axios.get('/user/current');
// 		return response.data;
// 	} catch (e) {
// 		return thunkAPI.rejectWithValue(e.message);
// 	}
// });