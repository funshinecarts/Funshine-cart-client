import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
