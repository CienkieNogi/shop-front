import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../redux/app/store"
import { authApi } from "../../redux/features/Auth/authApi"

type AuthState ={
    isLoggedIn: boolean;
    role:'ADMIN'| 'USER'|undefined;
    username:string|undefined;

}

const slice = createSlice({
    name:'auth',
    initialState:{isLoggedIn:false,username:undefined,role:undefined}as AuthState,
    reducers:{
        loginReducer:(state,{payload})=>{
            state.isLoggedIn=true;
            state.role=payload.role;
            state.username=payload.username
        },
        logoutReducer:(state)=>{
            localStorage.clear()
            state.isLoggedIn=false;
            state.role=undefined;
        },
    },
    extraReducers:(builder)=>{
        builder.addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state,payload:any)=>{
            state.isLoggedIn=true;
            state.role=payload.role;

        }
        )
        
    }
})
export default slice.reducer
export const {loginReducer,logoutReducer} = slice.actions
export const selectLoggedState=(state:RootState)=>state.auth.isLoggedIn
export const selectLoggedCredentials=(state:RootState)=>({
    username:state.auth.username,
    role:state.auth.role
})