import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponentWithLoadingIndicator from "./MyComponent";
import Home from "./Home";
import NewComponentWithLoadingIndicator from "./NewComponent";
function Router() {
  

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/Async" element={<MyComponentWithLoadingIndicator />}></Route>
          <Route path="/Loading" element={<NewComponentWithLoadingIndicator/>}></Route>

        </Routes>
      
    </BrowserRouter>
  );
}

export default Router;


