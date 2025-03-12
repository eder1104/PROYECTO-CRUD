import {rolesrepository, roles} from "types/RolesTypes";
import { RolesModel } from "@models/Roles";


export class Rolesrepository implements rolesrepository{
    async create(data: roles): Promise<roles> {
       const newRole = new RolesModel(data)
        return await newRole.save()
        
    }

    async find(): Promise<roles[]>{
        return await RolesModel.find().exec()
    }

    async findById(id: string): Promise<roles | null>{
        return await RolesModel.findById(id).exec()
    }
    
    async update(id: string, data: Partial<roles>): Promise<roles | null>{
        return await RolesModel.findByIdAndUpdate(id, data, {new: true}).exec()
    }

    async delete(id: string): Promise<boolean>{
        const deleted = await RolesModel.findByIdAndDelete(id).exec();
        return deleted !== null;
        
    }
} 