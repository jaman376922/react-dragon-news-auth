import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2>News details</h2>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;

/* <h2>News details</h2> ayta dilam erpor browser a Read Moore a click koro ... header/Navbar import koro
<Header></Header>/<Navbar></Navbar>

* <div className="grid md:grid-cols-4">
                <div className="col-span-3">

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>  ...... 3 ta div nilam.

 *   const {id} = useParams(); ****  3 number div a dibo <p>{id}</p> browser a deko.
      (somossa hole-useParams is not define ata react teke import korte hobe) go to Home.jsx

*/