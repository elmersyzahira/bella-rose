import React from "react"
import Before1 from "../images/before1.jpg"
import After1 from "../images/after1.jpg"
import Before3 from "../images/before3.jpg"
import After3 from "../images/after3.jpg"
import Before2 from "../images/before2.jpg"
import After2 from "../images/after2.jpg"

const Gallery = () => {
  const items = [
    {
      title: "Hair Transformation",
      before: Before1,
      after: After1,
    },
    {
      title: "Makeup Makeover",
      before: Before3,
      after: After3,
    },
    {
      title: "Skincare Results",
      before: Before2,
      after: After2,
    },
  ];

  return (
    <section id="gallery" className="bg-white py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-2">
          Before & After Gallery
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          See the amazing transformations our expert team has created for our
          beautiful clients
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-md p-6 text-center"
          >
            <h3 className="font-semibold text-gray-800 mb-4">{item.title}</h3>
            
            {/* Images side by side */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-gray-500 mb-2">Before</span>
                <img
                  src={item.before}
                  alt={`${item.title} before`}
                  className="rounded-lg w-40 h-40 object-cover shadow"
                />
              </div>

              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-gray-500 mb-2">After</span>
                <img
                  src={item.after}
                  alt={`${item.title} after`}
                  className="rounded-lg w-40 h-40 object-cover shadow"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
