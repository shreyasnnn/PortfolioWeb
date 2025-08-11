import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/homeScreen";
import ProjectsDetails from "./screens/projectScreen/index"
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/project/:id/:title" element={<ProjectsDetails />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;