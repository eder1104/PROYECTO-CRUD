import { Document } from "mongoose";
import {Query, Repository } from "./RepositoryTypes";

export interface task extends Document {
    title: string;
    description: string;
    expirationDate: Date;
    state: number;
    password: string;
    email:string;
    username:string;
    comparePassword(password: string): Promise<boolean>
}

export interface Taskrepository extends Repository<task>{
    findOne(query: Query): Promise<task | null>
}

export interface TaskServices{
    createTask(task: task): Promise<task>;
    findtasks(): Promise<task[]>;
    findTaskrById(id: string): Promise<task | null>;
    findUsersByemail(email:string): Promise<task | null>;
    UpdateTask(id: string, task: Partial<task>): Promise<task | null>;
    DeleteTask(id: string): Promise<boolean>;
}