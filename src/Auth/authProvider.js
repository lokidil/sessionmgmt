import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { Logger, LogLevel } from "msal";

// Msal Configurations
// const config = {
//   auth: {
//     authority: 'https://login.microsoftonline.com/common',
//     clientId: '5a8167cb-a771-480e-b743-58b2d81f853f',
//     redirectUri: window.location.origin
//   },
//   cache: {
//     cacheLocation: "localStorage",
//     storeAuthStateInCookie: true
//   }
// };

// // Authentication Parameters
// const authenticationParameters = {
//   scopes: ["openid"]
// }

// // Options
// const options = {
//   loginType: LoginType.Popup,
//   tokenRefreshUri: window.location.origin + '/auth.html'
// }


// export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)

// The auth provider should be a singleton. Best practice is to only have it ever instantiated once.
// Avoid creating an instance inside the component it will be recreated on each render.
// If two providers are created on the same page it will cause authentication errors.
export const authProvider = new MsalAuthProvider(
  {
    auth: {
      authority: "https://login.microsoftonline.com/common",
      clientId: "0f2c6253-3928-4fea-b131-bf6ef8f69e9c",
      postLogoutRedirectUri: window.location.origin,
      redirectUri: window.location.origin,
      validateAuthority: true,

      // After being redirected to the "redirectUri" page, should user
      // be redirected back to the Url where their login originated from?
      navigateToLoginRequestUrl: false
    },
    // Enable logging of MSAL events for easier troubleshooting.
    // This should be disabled in production builds.
    system: {
      logger: new Logger(
        (logLevel, message, containsPii) => {
          console.log("[MSAL]", message);
        },
        {
          level: LogLevel.Verbose,
          piiLoggingEnabled: false
        }
      )
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true
    }
  },
  {
    scopes: ["openid"]
  },
  {
    loginType: LoginType.Popup,
    // When a token is refreshed it will be done by loading a page in an iframe.
    // Rather than reloading the same page, we can point to an empty html file which will prevent
    // site resources from being loaded twice.
    tokenRefreshUri: window.location.origin + "/auth.html"
  }
);