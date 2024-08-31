/* eslint-disable import/no-anonymous-default-export */
export default function (Url, Method, Data = null) {
  if (Data) {
    Data = JSON.stringify(Data);
  }
  var ModifiedUrl = process.env.REACT_APP_API_URL + "/admin/" + Url;

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
    }
  });
  return Response;
}
