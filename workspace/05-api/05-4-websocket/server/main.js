const { WebSocketServer } = require("ws");

const sockserver = new WebSocketServer({ port: 3000 });
console.log("socket server 구동 : 3000");

let msgId = 0

sockserver.on("connection", (ws) => {
  console.log("New client connected!");
  ws.send(
    JSON.stringify({
      gubun: "connect",
      msg: "서버와 접속에 성공했습니다.!",
      state: 'ok'
    })
  );
  ws.on("close", () => console.log("Client has disconnected!"));
  ws.on("message", (data) => {
    let receiveObj = JSON.parse(data)
    if(receiveObj.gubun == 'msg'){
      receiveObj.msgId = ++msgId
    }
    let sendStr = JSON.stringify(receiveObj)
    sockserver.clients.forEach((client) => {
      console.log(`send message: ${sendStr}`);
      client.send(`${sendStr}`);
    });
  });
  ws.onerror = function () {
    console.log("websocket error");
  };
});
