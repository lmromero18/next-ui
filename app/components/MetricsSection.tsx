import React from "react";

const metrics = [
  { value: "400+", label: "Projects completed" },
  { value: "600%", label: "Return on investment" },
  { value: "10k", label: "Global downloads" },
];

const MetricsSection: React.FC = () => (
  <section className="py-20 md:px-32 px-2">
    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center px-4 space-y-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        Unleash the full power of data
      </h2>
      <p className="text-gray-600 text-lg">
        Everything you need to convert, engage, and retain more users.
      </p>
    </div>

    {/* Metrics card */}
    <div className="mt-8 mx-auto p-8 max-w-7xl">
      <div className="bg-gray-50 rounded-lg p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {metrics.map(({ value, label }) => (
          <div key={label} className="p-8">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">
              {value}
            </h3>
            <p className="mt-3 text-sm text-gray-900 font-bold">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
