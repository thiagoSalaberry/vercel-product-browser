import { NextApiRequest, NextApiResponse } from "next";

export function getQuery(req:NextApiRequest, maxLimit:number, maxOffset:number) {
    const queryLimit = Number(req.query.limit);
    const queryOffset = Number(req.query.offset);
    const limit = queryLimit <= maxLimit ? queryLimit : maxLimit;
    const offset = queryOffset < maxOffset ? queryOffset : 0
    const {q} = req.query
    return {q, limit, offset}
}