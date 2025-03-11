import { Repository } from "./RepositoryTypes";

export interface task {
    id: string;
    title: string;
    description: string;
    expirationDate: Date;
    state: number;
}

export interface Taskrepository extends Repository<task>{}

export interface TaskServices{
    createTask(task: task): Promise<task>;
    findtasks(): Promise<task[]>;
    findTaskrById(id: string): Promise<task | null>;
    UpdateTask(id: string, task: Partial<task>): Promise<task | null>;
    DeleteTask(id: string): Promise<boolean>;
}