import { Course } from "./course";
import { User } from "./user";

export class mcq {
    id :Number;
    name : String;
    creator : User;
    createdOn : Date;
    course : Course;
}