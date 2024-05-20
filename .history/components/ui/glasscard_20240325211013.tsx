import React from "react";

type GlassyComponentProps = {
  // Define your props here, if necessary
};

const GlassyComponent: React.FC<GlassyComponentProps> = (props) => {
  return (
    <div className="relative rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#3537439b] to-[#24212ba4] p-6">
      <h1 className="text-lg font-semibold text-[#D1D1D2]">Project</h1>
      <p className="text-[#8b8f8f]">
        We should bring the glass effect to the app
      </p>
      {/* ... other component parts */}
      <button className="mt-4 rounded bg-purple-600/75 px-4 py-2 font-bold text-white hover:bg-purple-800/75">
        Save issue
      </button>
    </div>
  );
};

export default GlassyComponent;
