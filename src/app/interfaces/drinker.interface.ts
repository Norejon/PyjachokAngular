import {IUser} from "./user.interface";
import {IEstablishment} from "./establishment.interface";

export interface IDrinker{
  id: number;
  date: string;
  time: string;
  description: string;
  countOfPeople: number;
  whoPay: string;
  budget: number;
  phone:string;
  user: IUser;
  establishment: IEstablishment;
}
