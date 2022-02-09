/* eslint-disable import/no-anonymous-default-export */
export default function (Url, Method, Data = null) {
  if (Data) {
    Data = JSON.stringify(Data);
  }
  // console.log(process.env.REACT_APP_APIBASEURl);
  var ModifiedUrl = "https://fidelity-trades.herokuapp.com/admin/" + Url;
  // const { token } = JSON?.parse(localStorage?.getItem("user"));
  // const { token } = localStorage.getItem("user");

  console.log(ModifiedUrl);
  var Response = fetch(ModifiedUrl, {
    method: Method,
    body: Data,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${
        localStorage.getItem("token") ? localStorage.getItem("token") : ""
      }`,
    },
  });
  Response.then((data) => {
    if (data.status === 401 || data.statusText === "Unauthorized") {
      localStorage.clear();
      // window.location.href = "/";
    }
  });
  return Response;
}
