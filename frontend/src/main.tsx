import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import SignUp from "./auth/SignUp.tsx";
import RequireAuthLayout from "./auth/AuthLayout.tsx";
import {UserPage} from "./user/UserPage.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequireAuthLayout>
                            <App/>
                        </RequireAuthLayout>
                    }
                />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/user" element={
                    <RequireAuthLayout>
                        <UserPage user={undefined}/>
                    </RequireAuthLayout>
                }/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
