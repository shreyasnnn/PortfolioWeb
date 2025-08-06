import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/homeScreen";
import ProjectsDetails from "./components/projectsDetails/projectsDetails"
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/project/:id" element={<ProjectsDetails />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;