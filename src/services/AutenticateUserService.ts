import { getCustomRepository } from "typeorm"

import { compare} from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"




interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email,password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories)

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect");
        }

        //Verificar se senha esta correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        //Gerar token
        const token = sign(
            {
                email: user.email
            },
            "5fd8cdb1f3eab35bcb796f92d35b3817",
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return token;
    }

}

export { AuthenticateUserService}