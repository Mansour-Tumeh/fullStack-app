export default (state, action) =>{
 
 switch(action.type){
     case  'REGISTER_SUCCESS':
         console.log('hey ',action.payload.token);
         localStorage.setItem('token',action.payload.token)
     return {
         ...state,
         ...action.payload,
         isAuthenticated : true,
         loading : false
         };
         case  'REGISTER_FAIL':
             localStorage.removeItem('token');
             return {
                ...state,
                token:null,
                isAuthenticated : false,
                loading : false,
                user : null,
                error : action.payload
                };
     case 'CLEAR_ERRORS' : 
     return {
         ...state,
         error:null
     }

     default : return state;

 }
} 