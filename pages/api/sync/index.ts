//ESTE ARCHIVO TIENE QUE OBTENER LA INFORMACIÓN DE AIRTABLE ACTUALIZADA PARA PASÁRSELA COMPLETA PERIÓDICAMENTE A ALGOLIA
//ALGOLIA NOS VA A PERMITIR REALIZAR LAS BÚSQUEDAS DE LOS PRODUCTOS
import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { base } from "../../../lib/airtable";
import { productsIndex } from "../../../lib/algolia";
export default methods({
    async get(req:NextApiRequest, res: NextApiResponse) {
        const allRecords = await productsIndex.search("false");
        res.send(allRecords.hits)
    },
    async post(req:NextApiRequest, res:NextApiResponse) {
        base("Productos").select({pageSize: 3}).eachPage(async function(records, fetchNextPage) {
            const recordsForAlgolia = records.map(r => {                
                return {
                    objectID: r.id,
                    ...r.fields
                }
            });
            await productsIndex.saveObjects(recordsForAlgolia);
            console.log("Siguiente página");
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return ; };
            res.send("Terminó la sync")
        })
    }
})