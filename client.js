const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected:", socket.id);
    socket.emit("message", "Hello from client!");
});

socket.on("message", (data) => {
    console.log("From server:", data);
});

socket.on("disconnect", () => {
    console.log("Disconnected");
});
