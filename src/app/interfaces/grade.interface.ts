import {IEstablishment} from "./establishment.interface";
import {IUser} from "./user.interface";

export interface IGrade{
  id: number;
  grade: number;
  text: string;
  user: IUser;
  establishment: IEstablishment;
}
