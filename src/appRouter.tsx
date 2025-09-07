import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import HomeScreen from "./screens/homeScreen";
const ProjectsDetails = lazy(() => import("./screens/projectScreen/index"));
const BackgroundSilk = lazy(() => import("./components/backgrounds/backgroundSilk"));

const AppRouter = () => {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    // Load background after first paint
    requestIdleCallback(() => setShowBg(true));
  }, []);

  return (
    <div className="relative min-h-screen">
      {showBg && (
        <Suspense fallback={null}>
          <BackgroundSilk />
        </Suspense>
      )}
      <div className="relative z-10">
        <Suspense fallback={<div>Loading...</div>}>
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
