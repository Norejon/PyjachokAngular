import {IUser} from "./user.interface";
import {IEstablishment} from "./establishment.interface";

export interface IUserEstablishmemt{
  id: number;
  user: IUser;
  establishment: IEstablishment;
}
