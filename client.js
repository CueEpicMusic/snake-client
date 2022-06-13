const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: TOM')
  });

  conn.on('connect', () => {
    setInterval(() => {
      conn.write('Move: up')
    }, 1000)
  })

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;