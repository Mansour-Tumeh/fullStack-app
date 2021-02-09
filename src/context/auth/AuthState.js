import React , { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer'
import axios from 'axios';
const AuthSate = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        isAuthenticated : null,
        loading:true,
        user:null,
        error:null
    }

const [state , dispatch] = useReducer(authReducer , initialState);

// load user

// register user
const register = async (formData)=>{
    const config = { 
        headers : {  
            'Content-Type':'application/json'
        }
     }
     try {
         const res = await axios.post('/user/register',formData ,config);
         dispatch({
             type:'REGISTER_SUCCESS',  
             payload:res.data
         })
         console.log(res.data);
         
     } catch (error) {
        dispatch({
            type:'REGISTER_FAIL',
            payload:error.response.data.msg
        })
         
     }

}

// Clear errors 
const clearErrors = ()=>   dispatch({type: 'CLEAR_ERRORS'})  
// login user

//logout

return (
    <AuthContext.Provider value = {{
        token:state.token,
        isAuthenticated:state.isAuthenticated,
        loading : state.loading,
        user:state.user,
        error: state.error,
        register,
        clearErrors
       

    }}
    >
        {props.children}

    </AuthContext.Provider>
);
};
export default AuthSate;