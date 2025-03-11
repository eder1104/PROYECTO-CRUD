import { Repository } from "./RepositoryTypes";

export interface roles {
    title: string;
}

export interface rolesrepository extends Repository<roles>{}

export interface roleServices{
    createroles(Roles: roles): Promise<roles>;
    findroles(): Promise<roles[]>;
    findrolesrById(id: string): Promise<roles | null>;
    Updateroles(id: string, Roles: Partial<roles>): Promise<roles | null>;
    Deleteroles(id: string): Promise<boolean>;
}