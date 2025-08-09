import { Router } from "express";
import {getCourses,getCoursesD,getSessions,getPaper} from "../controls/controller.js";


const cousrseRoute = Router();

//Get course list
cousrseRoute.get("/:id/courses",getCourses)
cousrseRoute.get("/:id/coursesD",getCoursesD)
cousrseRoute.get("/:id/paper/:course/:session",getPaper)
cousrseRoute.get("/:id/sessions/:course",getSessions)

export default cousrseRoute;