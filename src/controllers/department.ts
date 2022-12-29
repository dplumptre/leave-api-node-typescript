import {Request,Response} from "express";


exports.getDepartments = (req:Request,res:Response)=>{
    res.status(200).json({"name":"Account"});
};

