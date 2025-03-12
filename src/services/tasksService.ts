import { Query } from "types/RepositoryTypes";
import { TaskServices, Taskrepository, task } from "types/taskTypes"

export class tasksrvis implements TaskServices {
 private taskRepost: Taskrepository

 constructor(taskRepost: Taskrepository){
 this.taskRepost = taskRepost;
 }

 async createTask(task: task): Promise<task> {
     return this.taskRepost.create(task);
 }

 async findtasks(query?: Query): Promise<task[]> {
     return this.taskRepost.find(query);
 }

 async findTaskrById(id: string): Promise<task | null> {
     return this.taskRepost.findById(id);
 }

 findUsersByemail(email: string): Promise<task | null> {
     return this.taskRepost.findOne({ email });
 }

 async UpdateTask(id: string, task: Partial<task>): Promise<task | null> {
     return this.taskRepost.update(id, task);
 }

 async DeleteTask(id: string): Promise<boolean> {
     return this.taskRepost.delete(id)
 }
}