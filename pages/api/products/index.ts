import { NextApiRequest, NextApiResponse } from "next";
import { getQuery } from "../../../lib/getQuery";
import { productsIndex } from "../../../lib/algolia";
import methods from "micro-method-router";
export default methods({
    async delete(res:NextApiResponse) {
        await productsIndex.clearObjects();
        res.send("Se limpiaron los records")
    }
}) 
// export default async function(req:NextApiRequest, res:NextApiResponse) {
//     const query = getQuery(req, 10, 5);
//     const brand = query.q;
//     const response = await productsIndex.search(brand as string);
//     const products = response.hits.map((p:any) => {
//         return {
//             productID: p.objectID,
//             name: p.name,
//             description: p.description,
//             brand: p.brand,
//             price: p.price
//         }
//     })
//     res.send(query)
// }