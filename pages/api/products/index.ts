import { NextApiRequest, NextApiResponse } from "next";
import { getLimitAndOffset } from "../../../lib/getQuery";
import { productsIndex } from "../../../lib/algolia";
import methods from "micro-method-router";
export default methods({
    async get(req:NextApiRequest, res:NextApiResponse) {
        const algoliaRecords = await productsIndex.search(req.query.q as string);
        const {limit, offset} = getLimitAndOffset(req, 3, algoliaRecords.hits.length);
        const results = algoliaRecords.hits.map((p:any) => {
            return {
                id: p.objectID,
                title: p.title,
                description: p.description,
                stock: p.stock,
                price: p.price,
                tags: p.tags
            }
        });
        res.status(200).json({
            results: results.slice(offset, limit + offset),
            pagination: {
                offset,
                limit,
                total: results.length
            }
        })
    }
});