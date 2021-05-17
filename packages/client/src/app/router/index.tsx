import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspencer } from "components";
import { routes } from "./routes";
import { Layout } from "./layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspencer>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Suspencer>
      </Layout>
    </BrowserRouter>
  );
};
