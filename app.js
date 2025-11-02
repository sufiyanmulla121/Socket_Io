const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "*" },
});

io.on('connection', (socket) => {
    console.log('✅ Client connected:', socket.id);

    socket.on('message', (data) => {
        console.log('📩 Received:', data);
        io.emit('message', `Server received: ${data}`);
    });

    socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`🚀 Socket.IO server running on port ${PORT}`));
