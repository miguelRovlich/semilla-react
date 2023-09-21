import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";



const RoutesConfig = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="nosotros" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="servicios" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RoutesConfig