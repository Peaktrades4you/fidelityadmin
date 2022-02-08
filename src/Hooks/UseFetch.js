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
    headers: {
      "Content-Type": "application/json",
      cor: "no-cors",
      Authorization: `Bearer ${
        localStorage.getItem("user")
          ? JSON?.parse(localStorage?.getItem("user"))
          : ""
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
