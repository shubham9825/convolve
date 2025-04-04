import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../presentation/Dashboard"));
const Profile = lazy(() =>
  import("../presentation/Dashboard/ProfileComponent")
);
const Logout = lazy(() => import("../presentation/Auth/LogoutComponent"));
const NotFound = lazy(() => import("../presentation/Auth/NotFoundComponent"));

const Routing = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
