import { taskModel } from "@models/tasks";
import { Query } from "types/RepositoryTypes";
import { task, Taskrepository } from "types/taskTypes";

export class taskRepository implements Taskrepository{


    async create(data: task): Promise<task> {
       const newtask = new taskModel(data)
        return await newtask.save()
    }

    async find(): Promise<task[]>{
        return await taskModel.find().exec()
    }

    async findOne(query: Query): Promise<task | null> {
        return await taskModel.findOne(query);
    }

    async findById(id: string): Promise<task | null>{
        return await taskModel.findById(id).exec()
    }
    
    async update(id: string, data: Partial<task>): Promise<task | null>{
        return await taskModel.findByIdAndUpdate(id, data, {new: true}).exec()
    }

    async delete(id: string): Promise<boolean>{
        const deleted = await taskModel.findByIdAndDelete(id).exec();
        return deleted !== null;
        
    }
} 