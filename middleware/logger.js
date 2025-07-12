import moment from "moment";
export const logger = (req, res, next) => {
    console.log(`the request ic coming from ${req.url} with the methd ${req.method} on the url ${req.protocol}://${req.get("host")}C${req.originalUrl}: ${moment().format()}`);
    next();
};