import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./App";
import Listaformulario from "./pages/GetFormulario";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Formulario />}/>
          <Route path="/Listaformulario" element={<Listaformulario/>} />
      </Routes>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<App />
</BrowserRouter>
);

reportWebVitals();