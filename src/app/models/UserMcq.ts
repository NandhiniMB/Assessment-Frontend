import { mcq } from "./mcq";
import { User } from "./user";

export class UserMcq {

    id : Number;
    user : User;
    mcq: mcq;
    score : number;
    attemptedOn : Date;
}