import { createBrowserRouter} from "react-router-dom";
 
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPages from "../pages/ErrorPages";
import Login from "../pages/Home/Login/Login";
import Signup from "../pages/Home/Signup/Signup";
import MainNav from "../pages/shared/Navbar/MainNav";
import About from "../pages/Home/About/About";
import Footer from "../pages/shared/Footer/Footer";
import Services from "../pages/Home/Services/Services";
import ServicesDetails from "../pages/Home/Services/ServicesDetails";
import CheckOut from "../pages/Home/Checkout/CheckOut";
import PrivetRouter from "./PrivetRouter";
import AddProduct from "../pages/Home/AddProduct/AddProduct";
import Order from "../pages/Home/Order/Order";
import Pending from "../pages/Home/PendingOrder/Pending";
 

const router = createBrowserRouter([
    {
        path:"/", 
        element:<MainLayout/>, 
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ], 
        errorElement:<ErrorPages/>
    }, 
    {
        path:'/login', 
        element:<Login/>
    },
    {
        path:"/signup", 
        element:<Signup/>
    }, 
    {
        path:"/addProduct",
        element:<PrivetRouter>
            <AddProduct/>
        </PrivetRouter>
    },
    {
        path:"/about",
        element:<div>
            <MainNav/>
            <About/>
            <Footer/>
        </div>
    },
    {
        path:"services", 
        element:<div>
            <MainNav/>
            <Services/>
            <Footer/>
        </div>
    }, 
    {
        path:"/services/:id", 
        element:<ServicesDetails/>,
        loader:({params})=> fetch(`http://localhost:4000/services/${params.id}`)
    }, 
    {
        path:"/checkout/:id",
        element:<PrivetRouter>
             <CheckOut/>
        </PrivetRouter>,
        loader:({params})=> fetch(`http://localhost:4000/services/${params.id}`)
    },
    {
        path:"/order",
        element:<PrivetRouter>
            <Order/>
        </PrivetRouter>
    },
    {
        path:"/pendingOrder", 
        element: <PrivetRouter>
            <Pending/>
        </PrivetRouter>, 
        loader: () => fetch('http://localhost:4000/order')
    }
])

export default router;