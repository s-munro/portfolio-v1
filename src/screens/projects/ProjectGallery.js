import React, { Suspense, lazy } from "react";
import Loading from "../../g-components/Loading";

const EasyScoreSection = lazy(() => import("./EasyScoreSection.js"));
const VRFunderSection = lazy(() => import("./VRFunderSection"));
const HairStudiosSection = lazy(() => import("./HairStudiosSection"));

const ProjectGallery = () => {
  return (
    <div className="col-12">
      <Suspense fallback={<Loading />}>
        <EasyScoreSection />
        <VRFunderSection />
        <HairStudiosSection />
      </Suspense>
    </div>
  );
};

export default ProjectGallery;
