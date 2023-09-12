"use client"
import React from 'react'

const FBButton = () => {
    function login() {
        window.FB.login((response) => {
            console.log(response.authResponse)
            if (response.status === 'connected') {
                console.log("The Facebook Login Was Successful")
            } else {
                console.log("The Facebook Login Failed")
            }
        }, {
            config_id: "152559381237174"
        })

                      .
            window.FB.getLoginStatus(function (response) {   
                if (response.status === 'connected') {   
                    console.log("i got connected")
                } else {                                
                    console.log("there was some error")
                }
            });
    
    }
    return (
        <div>
            <button onClick={login} className={`border-2 border-red-500`}>
                facebook
            </button>
        </div>
    )
}

export default FBButton