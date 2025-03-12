import { taskRepository } from "@repositories/TaskRepositories";
import { tasksrvis } from "@servies/tasksService";
import { Request, Response } from "express";
import { task, Taskrepository, TaskServices } from "types/taskTypes";
import jwt from 'jsonwebtoken'

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


export const loginUser = async (req: Request, res: Response) =>{
    try{
        const {email, password}:task =req.body

        const user = await taskService.findUsersByemail(email);
        if(!user) return res.status(400).json({message:"invalid user or1 password"});

        const comparePass = await user.comparePassword(password);
        if(!comparePass) return res.status(400).json({message:"invalid use2r or password"});

        

        res.json(user);
    }
    catch (error) {
        console.log('error', error);
        res.status(500).json(error)
    }
}