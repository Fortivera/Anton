import React from "react";

type GlassyComponentProps = {
    // Define your props here
};

const GlassyComponent: React.FC<GlassyComponentProps> = (props) => {
    return (
        <div className="relative rounded-lg border border-gray-200 bg-opacity-20 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 p-6 backdrop-blur-md">
            <h1 className="text-lg font-semibold">Add translucent modals</h1>
            <p>We should bring the glass effect to the app</p>
            {/* The rest of your component */}
            <button className="mt-4 rounded bg-blue-500/75 px-4 py-2 font-bold text-white hover:bg-blue-700/75">
                Save issue
            </button>
        </div>
    );
};

export default GlassyComponent;
