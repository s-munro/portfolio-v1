import React from "react";

import GallerySection from "./components/GallerySection";
import { sectionData as tesData } from "./data/TESdata";
import { sectionData as vrData } from "./data/VRFunderData";
import { sectionData as hairStudiosData } from "./data/HairStudiosData";

const ProjectGallery = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center">
      <GallerySection sectionData={tesData} />
      <GallerySection sectionData={vrData} />
      <GallerySection sectionData={hairStudiosData} />
    </div>
  );
};

export default ProjectGallery;
