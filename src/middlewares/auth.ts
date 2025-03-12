import { taskRepository } from "@repositories/TaskRepositories";
import { tasksrvis } from "@servies/tasksService";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { task, Taskrepository, TaskServices } from "types/taskTypes";

const TaskRepository: Taskrepository = new taskRepository();
const taskService: TaskServices = new tasksrvis(TaskRepository);


/* verificacion de token */
export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const jwtsecret = process.env.JWT_SECRET as string;
        const token = req.headers.authorization?.replace(/^Bearer\s+/, "") as string;
        console.log("Authorization Header:", req.headers.authorization);

        if (!token) {
            res.status(401).json({ message: "No token provided" });
            return;
        }

        const decoded = jwt.verify(token, jwtsecret) as task;
        const getUser = await taskService.findTaskrById(decoded.id);

        if (!getUser) {
            res.status(400).json({ message: "Usuario no encontrado" });
            return;
        }

        req.currentUser = getUser;
        next();
    } catch (error: any) {
        console.log("Error en la autenticación:", error);
        res.status(401).json({ message: "Token inválido" });
        return;
    }
};
