import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import News from "../pages/news/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    }    
]);

export default router;

/*  element: <Home></Home>,
    loader: () => fetch('news.json') ... Home a news.json file ta load korbo. go to Home.jsx

             {
                path: 'news/:id', ...ayta kore pages folder er vitore News folder kore News.jsx file, 

                element:    ay file ta element a import korbo. go to News.jsx
            },
somossa somadan  loader: () => fetch('news.json') ay news er aagge slesh ( / ) diba read Moore... click koro.
 routes folder a create koro PrivateRoute.jsx

  element: <PrivateRoute><News></News></PrivateRoute>... PrivateRoute er vitor News ta bosao.
  browser a jao log out kore Read Moor a click korle login page a niya jabe. akon reload dile
  login page a niya jay seta na jawar jonno.. go to AuthProvider.jsx
*/