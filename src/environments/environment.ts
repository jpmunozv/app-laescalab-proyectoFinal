// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://swapi.dev/api/',
  firebase: {
    apiKey: "AIzaSyAxLbn5FpnNvnAwVGueVAGi3VgJuvOVYec",
    authDomain: "curso-laescala-jpm.firebaseapp.com",
    databaseURL: "https://curso-laescala-jpm.firebaseio.com",
    projectId: "curso-laescala-jpm",
    storageBucket: "curso-laescala-jpm.appspot.com",
    messagingSenderId: "5968789147",
    appId: "1:5968789147:web:c774725fa89e825327d03e"
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
