import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title, image_url, details, _id} = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
        <figure>
          <img
            src={image_url}
            alt="" />
        </figure>
        
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         
            {
                details.length > 200 ?

                <p>{details.slice(0,200)}<Link 
                to={`/news/${_id}`}
                className="text-blue-600 font-bold"> Read More.....</Link></p>
              
                :<p>{details}</p>
            }
         
          
        </div>
      </div>
    );
};

export default NewsCard;

/* public folder- news.json file ta deko. go to..Router.jsx
 
 const {title} = news; *****<h4 className="text-2xl">{title}</h4> ...daisyUI teke akta card nilam... 
  <h2 className="card-title">{title}</h2> aytay title dilam. ....  img src er url ta kete avabe
src={image_url} ay image_url const title er pore bosabo.

first div className w-96 kete dibo mb -16 dilam. go to Home.jsx

  shadow-xl mb-16"> .... ayta card er nicher shadow , ayta rakbe na katbe deko .  button ta div soho
  katlam. <P> er sentence ta kete news.json er details ta const title ,image_url er pore bosabo
  erpor avabe..  
             
            {
                details        ....sudu details like browsere deko onek boro dekayteche. taay details
                                   erpor deko. avabe..
              }
          </p>
              
            {
                details.length > 200 ?
                
        <p>{details.slice(0,200)}<Link className="text-blue-600 font-bold"> Read More.....</Link></p>
                
           :<p>{details}</p>
             
           }  ..... Link er className er aagge bosbe  to={`/news/${_id}`} .. ay _id ta const title, 
             image_url, details, er pore bosabo .     to er por  ay chinnota  ( `/news/` ) keyboard er 
             Esc er niche. .... go to Router.jsx


*/