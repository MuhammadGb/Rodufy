import { lazy, Suspense, useState, createContext, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loader from "./components/global/Loader";
import ProtectedRoutes from "./routes/ProtectedRoutes"; //Authenticated routes
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Homepage = lazy(() => import("./pages/Homepage"));
const NoFoundComponent = lazy(() => import("./pages/PageNotFound"));

export const AccessState = createContext({
  logged_in: false,
  setLogged_in: () => {},
});
export const App = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [logged_in, setLogged_in] = useState(false);
  const value = useMemo(() => ({ logged_in, setLogged_in }), [logged_in]);

  return (
    <AccessState.Provider value={value}>
      <Router>
        <Suspense fallback={<Loader className="loader" />}>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/home" />} />
            <PublicRoutes exact path="/home" isAuthenticated={isPublic}>
              <Homepage />
            </PublicRoutes>
            <PublicRoutes exact path="/verify" isAuthenticated={isPublic}>
              <Dashboard logged_in={logged_in} setLogged_in={setLogged_in} />
            </PublicRoutes>
            <PrivateRoutes path="/" isAuthenticated={logged_in}>
              <ProtectedRoutes />
            </PrivateRoutes>
            <Route path="*">
              <NoFoundComponent />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </AccessState.Provider>
  );
};

export default App;
