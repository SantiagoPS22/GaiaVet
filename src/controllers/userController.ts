import { Request, Response } from 'express';
import User from '../models/userModel';
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await User.findAll();
      res.status(200).json(users); 
    } catch (error: any) {
      console.error('Error fetching users: ', error);
      res.status(500).json({ message: 'Error fetching users.' });
    }
  };

// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const users = await User.findAll();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const createUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { name, email, password } = req.body;
//     const newUser = await User.create({ name, email, password });
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }

