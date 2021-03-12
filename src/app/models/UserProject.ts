import { Course } from "./course";
import { Project } from "./project";
import { User } from "./user";

export class UserProject{
    id : Number;
    user : User;
    project : Project;
    course : Course;
    score : number;
    submittedOn : Date;
    file:FormData;
}