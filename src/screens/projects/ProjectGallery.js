import React, { Suspense, lazy } from "react";
import Loading from "../../g-components/Loading";

import GallerySection from "./components/GallerySection";
import { sectionData } from "./data/TESdata";

const EasyScoreSection = lazy(() => import("./EasyScoreSection.js"));
const VRFunderSection = lazy(() => import("./VRFunderSection"));
const HairStudiosSection = lazy(() => import("./HairStudiosSection"));

const ProjectGallery = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center">
      <Suspense fallback={<Loading />}>
        <GallerySection sectionData={sectionData} />
        <EasyScoreSection />
        <VRFunderSection />
        <HairStudiosSection />
      </Suspense>
    </div>
  );
};

export default ProjectGallery;
