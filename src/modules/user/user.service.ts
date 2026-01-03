import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from "../../generated/prisma/client";



const register = async (payload:User) => {
    const hashPassword = await bcript
}


const login = async (email:string, password:string) => {

}

export const userService = {
    register,
    login
}