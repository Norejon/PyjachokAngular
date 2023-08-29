import {IEstablishment} from "./establishment.interface";
import {EType} from "./type.enum";

export interface INews{
  id: number;
  title:string;
  text: string;
  photo: string;
  type: EType;
  establishment: IEstablishment;
}
