import {IUserEstablishmemt} from "./userEstablishment.interface";
import {IEstablishment} from "./establishment.interface";
import {IGrade} from "./grade.interface";
import {IDrinker} from "./drinker.interface";
import {ERole} from "./role.enum";

export interface IUser{
  id: number;
  nickname: string;
  username:string;
  birth:string;
  gender:string;
  password: string;
  email: string;
  favorite: IEstablishment[];
  role: ERole;
  userEstablishments: IUserEstablishmemt[];
  gradesList: IGrade[];
  drinkers: IDrinker[];
  isEnable: boolean;

}
