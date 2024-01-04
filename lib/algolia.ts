import algoliasearch from "algoliasearch";
const client = algoliasearch("D5UAZZE2SK", "f08733000230a8bf01b5cac949e93397");
export const productsIndex = client.initIndex("products");