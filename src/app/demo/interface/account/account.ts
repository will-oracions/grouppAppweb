import { Base } from "../base"

export interface Account extends Base {
    name: string
    email: string
    password: string
    confirmPassword: string
    phone: string
    city: string
    address: string
    birthday: string
    picture: string
}