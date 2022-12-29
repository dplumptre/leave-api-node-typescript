import {Router,Request,Response} from "express";
const departmentsController = require("../controllers/department");
const router = Router();


router.get("/departments",departmentsController.getDepartments);
module.exports = router;

