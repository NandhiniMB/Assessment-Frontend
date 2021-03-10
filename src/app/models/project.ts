import { Course } from "./course";
import { User } from "./user";

export class Project  {

    id: Number;
    name : String ;
    description : String;
    course : Course;
    creator : User;
    createdOn : Date;
}