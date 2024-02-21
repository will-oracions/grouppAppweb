
import { Base } from "../base";

export interface User extends Base {
    name: string
    username: any
    email: string
    phone: string
    isAdmin: string
    password: string
    adress: string
    roleId: string
    branchId: string
    sexe: string
    roles: any
    access_token: any
}