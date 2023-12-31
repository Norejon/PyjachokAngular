import {IUser} from "./user.interface";
import {IGrade} from "./grade.interface";
import {IDrinker} from "./drinker.interface";
import {INews} from "./news.interface";
import {IContacts} from "./contacts.interface";

export interface IEstablishment{
  id: number;
  name: string;
  photo: string;
  type: string;
  tags: string[];
  rating: number;
  midle_check: number;
  registration_date: string;
  location: string;
  schedule: string;
  activated: boolean;
  contacts:IContacts;
  user: IUser;
  gradesList: IGrade[];
  news: INews[];
  drinkers: IDrinker[];
}
