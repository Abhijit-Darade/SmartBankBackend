const http = require("http"),
  { exec } = require("child_process");

http
  .createServer((req, res) => {
    const cmd = "myorgcli generate token -key someservice";
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        return res.writeHead(500).end(JSON.stringify(err));
      }
      console.log("token created:", stdout);
      return res.writeHead(200).end(stdout.replace(/(\r\n|\n|\r)/gm, ""));
    });
  })
  .listen(8080, "127.0.0.1");

console.log("Server spawned at http://localhost:8080/");
