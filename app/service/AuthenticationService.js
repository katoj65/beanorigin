import database from './database.js';
import { Http } from '@nativescript/core';
class AuthenticationService {




login(email, password) {
return Http.request({
url:'https://rvxdszfrgrnfjhqhhhri.supabase.co/auth/v1/token?grant_type=password',
method:'POST',
headers:{
'Content-Type':'application/json',
apikey:database.key,
},
content: JSON.stringify({
email:email,
password:password,
})
});
}




register(fname,lname,email,password) {
return Http.request({
url:'https://rvxdszfrgrnfjhqhhhri.supabase.co/auth/v1/signup',
method:'POST',
//headers
headers:{
'Content-Type':'application/json',
apikey:database.key,
},
//content
content: JSON.stringify({
fname:fname,
lname:lname,
email:email,
password:password,
})

});


}
















}
export default AuthenticationService;







// const response = await Http.request({
//  url:'https://rvxdszfrgrnfjhqhhhri.supabase.co/auth/v1/token?grant_type=password',
// method:'POST',
// headers:{
// 'Content-Type':'application/json',
// apikey:database.key,
// },
// content: JSON.stringify({
// email:this.form.email,
// password:this.form.password,
// })

// });