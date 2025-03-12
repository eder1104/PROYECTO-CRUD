import { Rolesrepository } from "@repositories/rolesRepositories";
import { taskRepository } from "@repositories/TaskRepositories";
import { RoleServices } from "@servies/RolesServices";
import { tasksrvis } from "@servies/tasksService";
import { Router } from "express";
import { roles, roleServices, rolesrepository } from "types/RolesTypes";
import { Taskrepository, TaskServices, task } from "types/taskTypes";


const router = Router()

const TaskRepository: Taskrepository = new taskRepository();
const taskService: TaskServices = new tasksrvis(TaskRepository);

const RolesRepository: rolesrepository = new Rolesrepository();
const rolesService: roleServices = new RoleServices(RolesRepository)
export default() =>{

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


    /* routes user */

    router.get("/roles", async(req, res)=>{
    const roles = await rolesService.findroles()
        res.json(roles)
    })

    router.get("/roles/:id", async(req, res) => {
        const roles = await rolesService.findrolesrById(req.params.id)
        res.json(roles)
    })

    router.post("/roles", async (req, res) =>{
        const NewRoles: roles = req.body;
        const result = await rolesService.createroles(NewRoles)

        res.json(result)
    })

    router.put("/roles/:id", async(req, res) => {
        const roles = await rolesService.Updateroles(req.params.id, req.body)
        res.json(roles)
    })

    router.delete("/roles/:id", async(req, res) => {
        const roles = await rolesService.Deleteroles(req.params.id)
        res.json(roles)
    })

    return router;
}