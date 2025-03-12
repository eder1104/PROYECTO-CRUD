import { taskRepository } from "@repositories/TaskRepositories";
import { tasksrvis } from "@servies/tasksService";
import { Request, Response } from "express";
import { task, Taskrepository, TaskServices } from "types/taskTypes";

const TaskRepository: Taskrepository = new taskRepository();
const taskService: TaskServices = new tasksrvis(TaskRepository);

export const registerUser = async (req:Request, res: Response) =>{
    try{
        const {email}:task =req.body;
        const userExists= await taskService.findUsersByemail(email);
        if (userExists) return res.status(400).json({message:"email already existis!!!"})

        const newUser = await taskService.createTask(req.body)

        res.status(201).json(newUser)
        }
    catch (error) {
        console.log('error', error);
        res.status(500).json(error)
    }
}