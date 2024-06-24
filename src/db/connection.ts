import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'GaiaVet',
  username: 'root',
  password: 'Santiago2030',
  host: 'localhost', // o la dirección de tu servidor de base de datos
  dialect: 'mysql', // o el dialecto de tu base de datos (postgresql, sqlite, etc.)
});

export default sequelize;
