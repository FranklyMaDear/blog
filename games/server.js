const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

let players = {};

io.on('connection', (socket) => {
    console.log('Νέος παίκτης:', socket.id);
    
    players[socket.id] = { id: socket.id, x: 0, z: 0, value: 2 };

    socket.on('update', (data) => {
        if (players[socket.id]) {
            players[socket.id].x = data.x;
            players[socket.id].z = data.z;
            players[socket.id].value = data.value;
        }

        // Απλός έλεγχος σύγκρουσης μεταξύ παικτών (για demo)
        let current = players[socket.id];
        if (!current) return;
        for (let otherId in players) {
            if (otherId === socket.id) continue;
            let other = players[otherId];
            let dx = current.x - other.x;
            let dz = current.z - other.z;
            if (Math.hypot(dx, dz) < 1.5) {
                if (current.value > other.value && other.value > 0) {
                    current.value += other.value;
                    delete players[otherId];
                    console.log(`Ο ${socket.id} έφαγε τον ${otherId}`);
                    io.emit('player_eaten', { winner: socket.id, loser: otherId });
                } else if (other.value > current.value && current.value > 0) {
                    other.value += current.value;
                    delete players[socket.id];
                    console.log(`Ο ${otherId} έφαγε τον ${socket.id}`);
                    io.emit('player_eaten', { winner: otherId, loser: socket.id });
                    socket.disconnect();
                }
            }
        }

        io.emit('players', players);
    });

    socket.on('disconnect', () => {
        console.log('Αποσυνδέθηκε:', socket.id);
        delete players[socket.id];
        io.emit('players', players);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server τρέχει στο ${PORT}`));
