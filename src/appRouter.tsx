import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomeScreen = lazy(() => import("./screens/homeScreen"));
const ProjectsDetails = lazy(() => import("./screens/projectScreen/index"));
const BackgroundSilk = lazy(() => import("./components/backgrounds/backgroundSilk"))
const AppRouter = () => {
  return (
    <div className="relative min-h-screen">
  <BackgroundSilk/>
  <div className="relative z-10">
    <Suspense>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/project/:id/:title" element={<ProjectsDetails />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Suspense>
  </div>
</div>
    
  );
};

export default AppRouter;
