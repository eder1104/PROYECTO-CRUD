import { rolesrepository, roleServices, roles } from "types/RolesTypes";

export class RolesServices implements roleServices {
  private rolesRepository: rolesrepository;

  constructor(rolesRepository: rolesrepository) {
    this.rolesRepository = rolesRepository;
  }

  async createroles(Roles: roles): Promise<roles> {
    return this.rolesRepository.create(Roles);
  }

  async findroles(): Promise<roles[]> {
    return this.rolesRepository.find();
  }

  async findrolesrById(id: string): Promise<roles | null> { 
    return this.rolesRepository.findById(id);
  }

  async Updateroles(id: string, Roles: Partial<roles>): Promise<roles | null> { 
    return this.rolesRepository.update(id, Roles);
  }

  async Deleteroles(id: string): Promise<boolean> { 
    return this.rolesRepository.delete(id);
  }
}
