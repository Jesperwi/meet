

export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
  };


// const getToken = async (code) => {
//   removeQuery();
//   const encodeCode = encodeURIComponent(code);
//   const { access_token } = await fetch(
//   `https://f1k17pnw2a.execute-api.us-east-1.amazonaws.c
//   om/dev/api/token/${encodeCode}`
//   )
//   .then((res) => {
//   return res.json();
//   })
//   .catch((error) => error);
//   access_token &&
// localStorage.setItem("access_token", access_token);
// return access_token;
// };


// const checkToken = async (accessToken) => {
//     const result = await fetch(
//     `https://www.googleapis.com/oauth2/v1/tokeninfo?acces
//     s_token=${accessToken}`
//     )
//     .then((res) => res.json())
//     .catch((error) => error.json());
//     return result.error ? false : true;
//     };

// const getAccessToken = async () => {
// const accessToken = await
//   localStorage.getItem("access_token");

// const tokenCheck = accessToken && (await
//   checkToken(accessToken));
//     if (!accessToken || !tokenCheck) {
//       await localStorage.removeItem("access_token");

// const searchParams = new
//   URLSearchParams(window.location.search);
// const code = await searchParams.get("code");
// if (!code) {
// const results = await axios.get(
//   "YOUR API getAuth ENDPOINT HERE"
//     );

// const { authUrl } = results.data;
//   return (window.location.href = authUrl);
// }
//     return code && getToken(code);
// }
//   return accessToken;
// };
// const getToken = async (code) => {
//   const removeQuery = () => {
//     if (window.history.pushState &&
//     window.location.pathname) {
//     var newurl =
//     window.location.protocol +
//     "//" +
//     window.location.host +
//     window.location.pathname;
//     window.history.pushState("", "", newurl);
//     } else {
//     newurl = window.location.protocol + "//" +
//     window.location.host;
//     window.history.pushState("", "", newurl);
//     }
//  };

//  return tokenCheck === false ? (
//   <div className="App">
//   <Login />
//   </div>
//   ) : (
//   // in here your previous app code. Don’t forget to
//   close off the ternary after // the final closing
//   </div> );