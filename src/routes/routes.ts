import { taskRepository } from "@repositories/TaskRepositories";
import { tasksrvis } from "@servies/tasksService";
import { Router } from "express";
import { Taskrepository, TaskServices, task } from "types/taskTypes";


const router = Router()

const TaskRepository: Taskrepository = new taskRepository()
const taskService: TaskServices = new tasksrvis(TaskRepository)
export default() =>{

    router.get("/", (req, res)=>{
        res.send("api is ok")
    })

    router.get("/tasks", async(req, res)=>{
        const tasks = await taskService.findtasks()
        res.json(tasks)
    })

    router.get("/tasks/:id", async(req, res) => {
        const tasks = await taskService.findTaskrById(req.params.id)
        res.json(tasks)
    })

    router.post("/tasks", async (req, res) =>{
        const newtask: task = req.body;
        const result = await taskService.createTask(newtask)

        res.json(result)
    })

    router.put("/tasks/:id", async(req, res) => {
        const tasks = await taskService.UpdateTask(req.params.id, req.body)
        res.json(tasks)
    })

    router.delete("/tasks/:id", async(req, res) => {
        const tasks = await taskService.DeleteTask(req.params.id)
        res.json(tasks)
    })

    return router;
}