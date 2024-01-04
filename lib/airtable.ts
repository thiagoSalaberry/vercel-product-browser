import Airtable from "airtable"
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'pat0LCwP2ANVSvG8E.273da4cf034d7189fd1bfb308ae41acd72129975e8fac3a40818112b1ace52aa'
});
export const base = Airtable.base("appgms7M6eEs4d33V");
