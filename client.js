const net = require("net");
const {IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: ACA");
    conn.write('Say: GOT BUNS HUN')
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};
