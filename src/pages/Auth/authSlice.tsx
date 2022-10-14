import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../redux/app/store"
import { authApi } from "../../redux/features/Auth/authApi"

type AuthState ={
    isLoggedIn: boolean,

}

const slice = createSlice({
    name:'auth',
    initialState:{isLoggedIn:false}as AuthState,
    reducers:{
        loginReducer:(state)=>{
            state.isLoggedIn=true;
        },
        logoutReducer:(state)=>{
            localStorage.clear()
            state.isLoggedIn=false;
        },
    },
    extraReducers:(builder)=>{
        builder.addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state)=>{
            state.isLoggedIn=true;
        }
        )
        
    }
})
export default slice.reducer
export const {loginReducer,logoutReducer} = slice.actions
export const selectLoggedState=(state:RootState)=>state.auth.isLoggedIn