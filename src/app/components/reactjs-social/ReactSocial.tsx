// "use client"
// import React, { useCallback, useState } from 'react';
// import {
//     LoginSocialFacebook,
//     IResolveParams,
// } from 'reactjs-social-login';

// import {
//     FacebookLoginButton,
// } from 'react-social-login-buttons';


// const REDIRECT_URI =
//     'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';

// const App = () => {
//     const [provider, setProvider] = useState('');
//     const [profile, setProfile] = useState<any>();

//     const onLoginStart = useCallback(() => {
//         alert('login start');
//     }, []);

//     const onLogoutSuccess = useCallback(() => {
//         setProfile(null);
//         setProvider('');
//         alert('logout success');
//     }, []);

//     const onLogout = useCallback(() => { }, []);

//     return (
//         <>

//             <div>
//                 <h1 className="title">ReactJS Social Login</h1>
//                 <LoginSocialFacebook
//                     appId={process.env.REACT_APP_FB_APP_ID || '679994227359801'}
//                     fieldsProfile={
//                         'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
//                     }
//                     onLoginStart={onLoginStart}
//                     onLogoutSuccess={onLogoutSuccess}
//                     redirect_uri={REDIRECT_URI}
//                     onResolve={({ provider, data }: IResolveParams) => {
//                         setProvider(provider);
//                         setProfile(data);
//                     }}
//                     onReject={(err: any) => {
//                         console.log(err);
//                     }}
//                 >
//                     <FacebookLoginButton />
//                 </LoginSocialFacebook>


//             </div>
//         </>
//     );
// };

// export default App;