import { BrowserRouter, Switch, Route } from "react-router-dom";
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
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};