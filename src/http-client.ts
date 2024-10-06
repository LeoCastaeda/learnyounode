import http from "http";

const url: string = process.argv[2];

http
  .get(url, (response: http.IncomingMessage) => {
    response.setEncoding("utf8");

    response.on("data", (data: string) => {
      console.log(data);
    });

    response.on("error", (err: Error) => {
      console.error("Error:", err);
    });

    response.on("end", () => {
      console.log("No more data");
    });
  })
  .on("error", (err: Error) => {
    console.error("Error:", err);
  });