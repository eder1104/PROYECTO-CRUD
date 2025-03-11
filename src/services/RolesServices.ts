import { roleServices, rolesrepository, roles } from "types/RolesTypes"

export class RoleServices implements roleServices {
 private RoleRepost: rolesrepository

 constructor(RoleRepost: rolesrepository){
 this.RoleRepost = RoleRepost;
 }
    createroles(Roles: roles): Promise<roles> {
        throw new Error("Method not implemented.");
    }
    findroles(): Promise<roles[]> {
        throw new Error("Method not implemented.");
    }
    findrolesrById(id: string): Promise<roles | null> {
        throw new Error("Method not implemented.");
    }
    Updateroles(id: string, Roles: Partial<roles>): Promise<roles | null> {
        throw new Error("Method not implemented.");
    }
    Deleteroles(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

 async createRole(Role: roles): Promise<roles> {
     return this.RoleRepost.create(Role);
 }

 async findRoles(): Promise<roles[]> {
     return this.RoleRepost.find();
 }

 async findRolerById(id: string): Promise<roles | null> {
     return this.RoleRepost.findById(id);
 }

 async UpdateRole(id: string, Role: Partial<roles>): Promise<roles | null> {
     return this.RoleRepost.update(id, Role);
 }

 async DeleteRole(id: string): Promise<boolean> {
     return this.RoleRepost.delete(id)
 }
}