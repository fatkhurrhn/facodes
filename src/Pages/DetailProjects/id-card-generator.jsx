// import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import thumbnail from "/Project/sample.png";

const ProjectDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Flex container for title and sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Title and main content (left side) */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 break-words">
              ID card Generator
            </h1>

            {/* Project Thumbnail */}
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-6 h-70 md:h-90 flex items-center justify-center">
              <img src={thumbnail} alt="Project Thumbnail" className="w-full h-full object-cover" />
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="mb-4 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum quod numquam doloremque nesciunt impedit, suscipit minima blanditiis provident amet cum vero tempore unde iusto eveniet, quis quo dicta. Totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi dolorum ab perferendis quisquam et atque ipsum natus beatae veritatis exercitationem ullam recusandae quam molestias, cum tenetur laboriosam velit nihil?
              </p>
              <p className="mb-4">
                The design is page-speed optimized and provides faster loading times. It is also a search engine-optimized theme that helps get your website the desired ranking. Additionally, it is a cross-browser-compatible theme and runs smoothly on all available browsers.
              </p>
            </div>

            {/* Screenshots Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "/Project/sample.png",
                  "/Project/sample.png",
                  "/Project/sample.png",
                  "/Project/sample.png"
                ].map((src, index) => (
                  <div key={index} className="bg-gray-200 rounded-lg h-40 flex items-center justify-center overflow-hidden">
                    <img src={src} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side (aligned to top) */}
          <div className="lg:w-1/3 lg:pt-0">
            {/* Download Card - Styled like the image */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold">
                  ID card Generator
                </h3>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                {/* Tombol View Code */}
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded-md font-medium shadow-md transition duration-300"
                >
                  <i className="ri-code-box-line text-base"></i>
                  View Code
                </a>

                {/* Tombol Download */}
                <a
                  href="https://example.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-3 rounded-md font-medium shadow-md transition duration-300"
                >
                  <i className="ri-download-2-line text-base"></i>
                  Download
                </a>
              </div>

              {/* Fitur yang Ditawarkan */}
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Open source</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Use in commercial projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Life time free updates</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-bold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['portfolio', 'dark-mode', 'responsive', 'free-template'].map((tag) => (
                  <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Popular Projects</h3>
              <div className="space-y-4">
                {/* Project Card 1 */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <img src={thumbnail} />
                  <h4 className="font-bold text-[18px] mb-0">Sparrow – Simple, Seamless...</h4>
                  <p className="text-gray-600 text-sm mb-2">A clean and minimal portfolio template</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">1783 Views</span>
                    <span className="text-gray-500 text-sm">980 Downloads</span>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <img src={thumbnail} />
                  <h4 className="font-bold text-[18px] mb-0">Bundle – 16 HTML5 Templates</h4>
                  <p className="text-gray-600 text-sm mb-2">Complete collection of templates</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">1633 Views</span>
                    <span className="text-gray-500 text-sm">330 Downloads</span>
                  </div>
                </div>

                {/* Special Offer Card */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-700 mb-1">GASKEUN CUYYY</h4>
                  <p className="text-yellow-700 text-sm">Get this bundle of HTML5 templates!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;