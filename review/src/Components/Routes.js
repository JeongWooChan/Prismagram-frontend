// Router Component는 어떤 라우터를 보여줄지 다루는 Component이다. 
import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from 'react-router-dom';
import Feed from "../Routes/Feed/";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path = "/explore" component={Explore} />
        <Route exact path = "/search" component={Search} />
        <Route path = "/:username" component={Profile} />
        <Redirect from="*" to="/" />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Redirect from="*" to="/" />
    </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />
);

// Router는 항상 proptypes를 가져야 한다. 
AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default AppRouter;