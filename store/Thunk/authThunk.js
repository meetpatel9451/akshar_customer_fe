import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";
import { notificationSuccess } from "store/Slice/notificationSlice";

export const login = createAsyncThunk(
  "loginUser",
  async ({_request, navigate}, { dispatch }) => {
 console.log("_request ", _request);
    try {
      const response = await API.post(
        "/auth/login",
        _request
        );
        console.log("response ", response?.status == 200);
        if(response?.status == 200){
          dispatch(notificationSuccess(response?.data?.message));
          localStorage.setItem("userData", response.data.result);
          localStorage.setItem("header", JSON.stringify(response.data.result));
          navigate('/dashboard');
        }else{
          // navigate(route_info.auth_route.verify_email, {state: response?.data?.data[0]});
        }
      // dispatch(AuthLoading(false));
      return response;
    } catch (err) {
      // dispatch(AuthLoading(false));
      // dispatch(notificationFail(err.response.data.message));
      return err;
    }
  }
);

// export const register = createAsyncThunk(
//   "register",
//   async ({ _request, navigate }: any, { dispatch }) => {
//     try {
//       const response = await API.post(
//         "/api/v1/accounts/create-business-account/",
//         _request
//         );
//       // dispatch(AuthLoading(false));
//       // dispatch(notificationSuccess(response?.data?.message));
//       // navigate(route_info.auth_route.verify_email, {state: response?.data?.data[0]})
//       return response;
//     } catch (err: any) {
//       // dispatch(AuthLoading(false));
//       // dispatch(notificationFail(err.response.data.message));
//       return err;
//     }
//   }
// );

// export const verifyRegisterOtp = createAsyncThunk(
//   "verifyRegisterOtp",
//   async ({ _request, navigate }: any, { dispatch }) => {
//     try {
//       const response = await API.post(
//         "/api/v1/accounts/verify-registration-email-otp/",
//         _request
//         );
//       localStorage.setItem("userData", response.data.data[0]);
//       localStorage.setItem("header", JSON.stringify(response.data.data[0]));
//       navigate(route_info.common.overview);
//         dispatch(notificationSuccess(response?.data?.message));
//         return response;
//       } catch (err: any) {
//       dispatch(notificationFail(err.response.data.message));
//       return err;
//     }
//   }
// );

// export const verifyTrialExtend = createAsyncThunk(
//   "verifyTrialExtend",
//   async ({ _request, navigate }: any, { dispatch }) => {
//     try {
//       const response = await API.post(
//         "/api/v1/accounts/verify-trailextend-link/",
//         _request
//         );
//       localStorage.setItem("userData", response.data.data[0]);
//       localStorage.setItem("header", JSON.stringify(response.data.data[0]));
//       navigate(route_info.common.overview);
//         dispatch(notificationSuccess(response?.data?.message));
//         return response;
//       } catch (err: any) {
//       dispatch(notificationFail(err.response.data.message));
//       return err;
//     }
//   }
// );

// export const postResendOtp = createAsyncThunk(
//   "postResendOtp",
//   async ({ _request }: any, { dispatch }) => {
//     try {
//       const response = await API.post(
//         "/api/v1/accounts/resend-otp-via-email/",
//         _request
//         );
//         dispatch(notificationSuccess(response?.data?.message));
//         return response;
//       } catch (err: any) {
//       dispatch(notificationFail(err.response.data.message));
//       return err;
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   "updateUser",
//   async ({ update_request, navigate }: any, { dispatch }) => {

//     try {
//       const response = await API.put(
//         "/api/v1/accounts/type-business-update/",
//         update_request
//       );
//       dispatch(AuthLoading(false));
//       dispatch(notificationSuccess(response?.data?.message));
//       const header: any = localStorage.getItem("header")

//       localStorage.setItem("userData", header);
//       navigate("/dashboard");
//       return response;
//     } catch (err: any) {
//       navigate("/");
//       dispatch(AuthLoading(false));
//       dispatch(notificationFail(err.response.data.message));
//       return err;
//     }
//   }
// );

// export const forgetPassword = createAsyncThunk(
//     "forgetPassword",
//     async ({ _request, navigate }: any, { dispatch }) => {
//       try {
//         const response = await API.post(
//           "/api/v1/accounts/forgot-password/",
//           _request
//           );
//           if(response?.status == 201 || response?.status == 200) {
//             dispatch(AuthLoading(false));

//             dispatch(notificationSuccess(response?.data?.message));
//             navigate("/");
//           }


//         return response;
//       } catch (err: any) {
//         dispatch(AuthLoading(false));
//         dispatch(notificationFail(err.response.data.message));
//         return err;
//       }
//     }
//   );

//   export const verifyResetPasswordToken = createAsyncThunk(
//     "verifyResetPasswordToken",
//     async ({ _request, navigate }: any, { dispatch }) => {
//       try {
//         const response: any = await API.get(
//           `/api/v1/accounts/forgot-password-token-verify?useridb64=${_request.userId}&token=${_request.token}`
//         );
//         dispatch(ScreenLoading(false));
//         return response;
//       } catch (err: any) {
//         navigate("/forgot-password");
//         dispatch(ScreenLoading(false));
//         dispatch(notificationFail(err.response.data.message));
//         return err;
//       }
//     }
//   );

//   export const resetPassword = createAsyncThunk(
//     "resetPassword",
//     async ({ _request, _params, navigate }: any, { dispatch }) => {
//       try {
//         const response = await API.post(
//           `/api/v1/accounts/forgot-password-confirm/?useridb64=${_params.userId}&token=${_params.token}`,
//           _request
//         );
//         dispatch(AuthLoading(false));
//         dispatch(notificationSuccess(response.data.message));
//         navigate("/");
//         return response;
//       } catch (err: any) {
//         dispatch(AuthLoading(false));
//         dispatch(notificationFail(err.response.data.message));
//         return err;
//       }
//     }
//   );

//   export const loginWithGoogle = createAsyncThunk(
//     "loginWithGoogle",
//     async ({ _request, navigate }: any, { dispatch }) => {

//       try {
//         const response = await API.get(
//           `/api/v1/accounts/social-signup/${_request.platform}/?code=${_request.code}`
//         );
//         dispatch(notificationSuccess(response.data.message));
//         return response;
//       } catch (err: any) {
//         navigate('/')
//         dispatch(notificationFail(err.response.data.message));
//         return err;
//       }
//     },
//   );

//   export const verifyEmail = createAsyncThunk(
//     "verifyEmail",
//     async ({ data }: any, { dispatch }) => {

//       try {
//         const response = await API.post(
//           "/api/v1/accounts/user-email-existence/",
//           data
//           );
//           dispatch(notificationSuccess(response?.data?.message));
//           return response;
//         } catch (err: any) {
//         dispatch(notificationFail(err.response.data.message));
//         return err;
//       }
//     }
//   );
