import { Rolesrepository } from "@repositories/rolesRepositories";
import { RolesServices } from "@servies/RolesServices";
import { roles, roleServices, rolesrepository } from "types/RolesTypes";
import { Request, Response } from "express";


const RolesRepository: rolesrepository = new Rolesrepository();
const Rolesservices: roleServices = new RolesServices(RolesRepository);

export const findRoles = async (req: Request, res: Response) => {
    try {
        
        const roles = await Rolesservices.findroles();
        if(roles.length === 0) return res.status(404).json({message:"no Roles found."})

        res.json(roles)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const findRolesById = async (req: Request, res: Response) => {
    try {
        const roles = await Rolesservices.findrolesrById(req.params.id);
        if(!roles) return res.status(404).json({message:"no Roles found."})

        res.json(roles)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const createRoles = async (req: Request, res: Response) => {
    try {
        const NewRoles: roles = req.body;
    const result = await Rolesservices.createroles(NewRoles);
    res.json(result);
    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const UpdateRoles = async (req: Request, res: Response) => {
    try {
        const roles = await Rolesservices.Updateroles(req.params.id, req.body);
        if(!roles) return res.status(404).json({message:"no roles found."})

        res.json(roles)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}

export const DeleteRoles = async (req: Request, res: Response) => {
    try {
        const roles = await Rolesservices.Deleteroles(req.params.id);
        if(!roles) return res.status(404).json({message:"no users found."})

        res.json(roles)

    } catch (error) {
        console.log("error :>> ", error);
        res.status(500).json(error);
    }
}