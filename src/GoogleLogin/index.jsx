import { useEffect } from "react";

export default function GoogleLogin() {
   const handleCredentialResponse = async (response) => {
      console.log("Encoded JWT ID token: " + response.credential);
      const res = await fetch("http://localhost:5000/google_login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify({ code: response.credential }),
      });
      if (res.ok) {
         let data = await res.json();
         console.log(data);
      }
   };
   useEffect(() => {
      let script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.onload = () => {
         window.google.accounts.id.initialize({
            client_id:
               "241958373384-618qe94mr6jgb0sqshddvhk5oomdgj7i.apps.googleusercontent.com",
            callback: handleCredentialResponse,
         });
         window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" } // customization attributes
         );
         window.google.accounts.id.prompt(); // also display the One Tap dialog
      };
      document.body.appendChild(script);

      return () => {
         document.body.removeChild(script);
      };
   });

   return (
      <div>
         {/* <div
            id="g_id_onload"
            data-client_id="241958373384-618qe94mr6jgb0sqshddvhk5oomdgj7i.apps.googleusercontent.com"
            data-login_uri="http://localhost:5000/google_login"
            data-auto_prompt="false"
         ></div>
         <div
            class="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left"
         ></div> */}
         <div id="buttonDiv" style={{ width: "100px", height: "100px" }}></div>
      </div>
   );
}
