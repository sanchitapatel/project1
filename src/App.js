import Navbar from "./components/Navbar/index";
import Home from "./pages/home/index";
import Community from "./pages/community/index";
import Blog from "./pages/Blog";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App(){
  return (
      <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/community" element={<Community/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
        
        </BrowserRouter>
      </>
  )
}
export default App;
