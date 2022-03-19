import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { Users } from "./routes/users"
import { Layout } from "./Layout"
import { User } from "./routes/User"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/users" element={<Users />}>
                <Route index element={<div>Seleccione un usuario</div>} />
                <Route path=":userId" element={<User />} />
            </Route>

            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<div>404 - not found</div>} /> */}
            <Route path="*" element={<Navigate replace to="/"/>} />
           </Route>
        </Routes>
    </BrowserRouter>,
 document.getElementById("root")
);