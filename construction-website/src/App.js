import "./App.css";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/home/Home";
import Portfolio from "./pages/PortfolioArchive/Portfolio";
import Services from "./pages/ServicesArchive/Services";
import Contacts from "./pages/contacts/Contacts";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },{
    path: "aboutus",
    element: <AboutUs/>
  },{
    path: "Portfolio",
    element: <Portfolio/>
  },{
    path: "Services",
    element: <Services/>
  },{
    path: "Careers",
    element: <Contacts/>
  },
]);
 export  function apply(){
  alert("thanks for apply")
}

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
