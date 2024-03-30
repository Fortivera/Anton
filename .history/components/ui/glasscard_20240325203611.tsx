import React from 'react';

type GlassyComponentProps = {
    // Define your props here, if necessary
};

const GlassyComponent: React.FC<GlassyComponentProps> = (props) => {
    return (
        <div className="relative p-6 border-2 rounded-lg backdrop-blur-md bg-opacity-20 border-[#46465666] bg-gradient-to-b from-[#36364466] to-[#28242f65]">
            <h1 className="text-lg font-semibold text-[#D1D1D2]">Project</h1>
            <p className="text-[#D1D1D2]">We should bring the glass effect to the app</p>
            {/* ... other component parts */}
            <button className="mt-4 bg-purple-600/75 hover:bg-purple-800/75 text-white font-bold py-2 px-4 rounded">
                Save issue
            </button>
        </div>
    );
};

export default GlassyComponent;
