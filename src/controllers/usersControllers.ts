import { taskRepository } from "@repositories/TaskRepositories";
import { tasksrvis } from "@servies/tasksService";
import { Request, Response } from "express";
import { Taskrepository, TaskServices, task } from "types/taskTypes";

const TaskRepository: Taskrepository = new taskRepository();
const taskService: TaskServices = new tasksrvis(TaskRepository);

export const findTasks = async (req: Request, res: Response) => {
    try {
        
        const users = await taskService.findtasks();
        if(users.length === 0) return res.status(404).json({message:"no users found."})

        res.json(users)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const findTaskrById = async (req: Request, res: Response) => {
    try {
        const tasks = await taskService.findTaskrById(req.params.id);
        if(!tasks) return res.status(404).json({message:"no users found."})

        res.json(tasks)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const newtask: task = req.body;
        const result = await taskService.createTask(newtask);
        
        res.status(201).json(result);
    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const UpdateTask = async (req: Request, res: Response) => {
    try {
        const tasks = await taskService.UpdateTask(req.params.id, req.body);
        if(!tasks) return res.status(404).json({message:"no users found."})

        res.json(tasks)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const DeleteTask = async (req: Request, res: Response) => {
    try {
        const tasks = await taskService.DeleteTask(req.params.id);
        if(!tasks) return res.status(404).json({message:"no users found."})

        res.json(tasks)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}