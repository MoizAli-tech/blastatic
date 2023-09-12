"use client"
import React, { useEffect } from 'react'
import FBButton from './FBButton'
import Script from "next/script"

const FBSDK = () => {
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '679994227359801',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v17.0'
            });
            // window.FB.login(function (response) {
            //     console.log(response)
            // });
        };
    }, [])



    return (
        <div>
            <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" />
            <FBButton />


        </div>
    )
}

export default FBSDK