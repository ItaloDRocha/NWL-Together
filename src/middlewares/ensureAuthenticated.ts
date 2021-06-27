import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
        
    //receber o token
    const authToken = request.headers.authorization;
    
    //Validar se token esta preenchido
    if(!authToken){
        
        return response.status(401).end(); // Pega resposta padrao do erro 401
    }

    const [, token] = authToken.split(" ")
    

    try{ 
        const {sub}= verify(token ,"5fd8cdb1f3eab35bcb796f92d35b3817") as IPayload

        //Recuperar informações do usuário
        request.user_id = sub;

        return next();
    }catch(err){
        
        return response.status(401).end();
    }
    
    //Validar se token é valido

    

   
  }



