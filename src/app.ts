import express, { Application } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes'

// import userRoutes from './routes/userRoutes';
// import petRoutes from './routes/petRoutes';
// import appointmentRoutes from './routes/appointmentRoutes';
// import productRoutes from './routes/productRoutes';
// import db from './db/connection';
import dotenv from 'dotenv';
import User from './models/userModel';
import sequelize from './db/connection';
import { getAllUsers } from './controllers/userController';


// Inicializar modelos
User.initModel(); // Llama a initModel() para cada modelo

// Sincronizar modelos (opcionalmente)
// sequelize.sync();


dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conectar a la base de datos
// db.connect();

// Rutas
app.use('/users', userRoutes);
// app.use('/api/pets', petRoutes);
// app.use('/api/appointments', appointmentRoutes);
// app.use('/api/products', productRoutes);

// Iniciar el servidor
app.listen(port, () => {

    async function testConnection() {
      try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
      } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
      }
    }

    // findAllUsers();
    
    testConnection();
     
  console.log(`Server running on port ${port}`);
});
