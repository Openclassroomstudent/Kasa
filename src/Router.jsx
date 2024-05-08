import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Fichelogement/:id"
                 element={<FicheLogement />}
                 />
                 <Route path="/About" element={<About/>}/>
                 <Route path="*" element={<NotFound />}/>

        </Routes>
    );

};

export default Router;