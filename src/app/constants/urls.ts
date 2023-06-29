import {environment} from "../../environments/environment";

const {API}= environment;

const users = `${API}/users`;
const establishments=`${API}/establishments`;
const news = `${API}/news`

const urls ={
  allUsers:users,
  allEstablishment:establishments,
  allNews:news,
  login:`${users}/login`
}
export {
  urls
}
