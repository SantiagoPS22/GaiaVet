import { DataTypes, IntegerDataType, Model } from 'sequelize';
import sequelize from '../db/connection';

interface UserAttributes {
  cedula: number;
  nombre: string;
  apellido: string;
  correo: string;
  contraseña: string;
  direccion: string;
  telefono: string;
  estado:boolean;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public cedula!: number;
  public nombre!: string;
  public apellido!: string;
  public correo!: string;
  public contraseña!: string;
  public direccion!: string;
  public telefono!: string;
  public estado!:boolean;

  // Configuración del modelo
  static initModel(): void {
    this.init(
      {
        cedula: {
          type: DataTypes.STRING(15),
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        apellido: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        correo: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        contraseña: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        direccion: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        telefono: {
          type: DataTypes.STRING(12),
          allowNull: true,
        },
        estado:{
          type:DataTypes.BOOLEAN
        }
      },
      {
        sequelize,
        tableName: 'usuario', // Nombre de la tabla en MySQL
        timestamps: false, // Deshabilitar campos createdAt y updatedAt
        underscored: true, // Utilizar nombres de columna en snake_case
      }
    );
  }
}

export default User;
