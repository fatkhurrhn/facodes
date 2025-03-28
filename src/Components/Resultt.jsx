import React, {  } from "react";
export default function Page() {

    return (
        <>
            <div className="h-1/2 border-t border-gray-700 flex-1 overflow-hidden">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="bg-white"
                    scrolling="no"
                />
            </div>
        </>
    );
}