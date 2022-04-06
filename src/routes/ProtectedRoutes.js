import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { privateRoutes } from "./Routes"; // Route list
import Loader from "../components/global/Loader";

const ProtectedRoutes = (props) => (
  <Switch>
    <Suspense fallback={<Loader className="loader" />}>
      {privateRoutes.map(({ component: Component, path, exact }) => (
        <Route path={`/${path}`} key={path}>
          <Component />
        </Route>
      ))}
    </Suspense>
  </Switch>
);

export default ProtectedRoutes;
