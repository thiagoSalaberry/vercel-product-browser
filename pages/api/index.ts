import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
export default methods({
    async get(req:NextApiRequest, res: NextApiResponse) {
        res.status(200).send("Bienvenido a la API del desafío del buscador en Next.js")
    }
})
