import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/adminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/applicationFormPage/ApplicationFormPage";
import CreateTripPage from "../pages/createTripPage/CreateTripPage";
import HomePage from "../pages/homePage/HomePage";
import ListTripsPage from "../pages/listTripsPage/ListTripsPage";
import LoginPage from "../pages/loginPage/LoginPage";
import TripDetailsPage from "../pages/tripDetailsPage/TripDetailsPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<HomePage/>} />

                <Route exact path={"/trips/list"} element={<ListTripsPage />} />

                <Route exact path={"/trips/application"} element={<ApplicationFormPage />} />

                <Route exact path={"/login"} element={<LoginPage />} />

                <Route exact path={"/admin/trips/list"} element={<AdminHomePage />} />

                <Route exact path={"/admin/trips/create"} element={<CreateTripPage />} />

                <Route exact path={"/admin/trips/:id"} element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};