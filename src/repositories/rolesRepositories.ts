import {rolesrepository, roles} from "types/RolesTypes";
import { RolesModel } from "@models/Roles";
import { Query } from "types/RepositoryTypes";


export class Rolesrepository implements rolesrepository{
    async create(data: roles): Promise<roles> {
       const newRole = new RolesModel(data)
        return await newRole.save()
        
    }

    async find(query?: Query): Promise<roles[]>{
        return await RolesModel.find(query || {}).exec()
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