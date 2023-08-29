import {environment} from "../../environments/environment";

const {API} = environment;

const users = `${API}/users`;
const establishments = `${API}/establishments`;
const news = `${API}/news`;
const drinkers=`${API}/drinkers`;
const grades = `${API}/grades`;
const complaints = `${API}/complaints`;
const analitic = `${API}/analitic`
const image =`${API}/image`

const urls = {
  allUsers: users,
  authUser:`${users}/me`,
  userById:(id:number):string=>`${users}/${id}`,

  allEstablishment: establishments,
  allActivatedEstablishment:`${establishments}/activated`,
  allDesActivatedEstablishment:`${establishments}/desactivated`,
  activateEstablishment:(id:number)=>`${establishments}/activate/${id}`,
  desActivateEstablishment:(id:number)=>`${establishments}/desactivate/${id}`,
  establishmentsOfUser:`${establishments}/user`,
  establishmentsById: (id: number): string => `${establishments}/${id}`,
  newToEstablishment:(id:number): string=>`${establishments}/${id}/news/add`,
  newsOfEstablishment:(id:number):string=>`${establishments}/${id}/news`,
  addEstablishmentToFavorite:(id:number):string=>`${establishments}/${id}/add_favorite`,
  deleteFromFavorite:(id:number):string=>`${establishments}/${id}/remove_favorite`,
  changer:(establishmentId:number,userId:number):string=>`${establishments}/${establishmentId}/users/${userId}`,

  image: image,

  allNews: news,
  newById:(id:number):string=>`${news}/${id}`,
  login: `${users}/login`,
  drinkers:(id:number):string=>`${drinkers}/${id}`,
  allGrades:grades,
  gradeById:(id:number):string=>`${grades}/${id}`,

  allComplaints:complaints,
  complaintsById:(id:number):string=>`${complaints}/${id}`,

  allAnalitics:analitic,
  analiticsById:(id:number):string=>`${analitic}/${id}`,

  logout:`${users}/logout`
}
export {
  urls
}
