import express from 'express';
import 'dotenv/config';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;

        this.middlewares();
        this.routes();
    }

    // Middlewares
    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    // Rutas del servidor
    routes() {
        // Ruta principal
        this.app.get('/', (req, res) => {
            res.send('¡Bienvenido a mi servidor BakeNApp!');
        });

        // Ruta de la API
        this.app.get('/api', (req, res) => {
            res.json({
                message: 'peticion get recibida'
            });
        });
    

        this.app.post('/api', (req, res) => {
            res.json({
                message: 'peticion post recibida'
            });
        });
    

       this.app.put('/api', (req, res) => {
            res.json({
                message: 'peticion put recibida'
            });
        });
    

        this.app.delete('/api', (req, res) => {
            res.json({
                message: 'peticion delete recibida'
            });
        });
    }

    // Iniciar servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

const server = new Server();
server.listen();

export default Server;