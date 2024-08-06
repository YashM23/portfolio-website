import React from "react";

function MobileNavbar() {
  return (
    <div className="bg-black bg-opacity-90 absolute h-screen w-1/2  bottom-0 z-10 ">
      <div className="flex flex-col items-center justify-evenly font-mono">
        <h1 className="text-white px-2">Introduction</h1>
        <h1 className="text-white px-2">Skills</h1>
        <h1 className="text-white px-2">Projects</h1>
      </div>
    </div>
  );
}

export default MobileNavbar;
