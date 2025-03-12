import {task} from "../../../src/types/taskTypes"


declare global {
    namespace Express {
        interface Request{
            currentUser: task;
        }
    }
}