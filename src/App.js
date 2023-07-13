import {Route,Routes} from "react-router-dom";

import Main from "./pages/Main";
import Receipe from "./pages/Receipe";

function App() {
  return (
    <div className="App w-[414px] h-screen overflow-hidden pt-4 mx-auto rounded-sm">
    <Routes>
    <Route path="/" element = {<Main/>}/>
    <Route path="/dish/:id" element={<Receipe/>}/>      
    </Routes>
    </div>

  );
}

export default App;
