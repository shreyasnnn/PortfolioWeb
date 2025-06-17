import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/homeScreen";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;