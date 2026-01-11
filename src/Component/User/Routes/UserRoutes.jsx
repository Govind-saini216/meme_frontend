import { Route } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import Home from "../Pages/Home";
import Trending from "../Pages/Trending";
import Favourite from "../Pages/Favourite";

const UserRoutes = () => (
  <Route element={<UserLayout />}>
    <Route path="/all" element={<Home />} />
    <Route path="/video/:id" element={<Home />} />

    <Route path="/all/tranding" element={<Trending />} />
    <Route path="/all/favourite" element={<Favourite />} />

  </Route>
);

export default UserRoutes;
