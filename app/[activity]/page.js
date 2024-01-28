"use client";

import Variables from "@/public/var/vriables";
import Image from "next/image";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import { useState } from "react";

export default function Home(props) {
  const activity = props.params.activity;
  const Activities = Variables.activitiesData;
  const mainActivity = Activities.find((element) => element.link === activity);

  if (!mainActivity) {
    return <div>Activity not found</div>;
  }

  // State variables to track selected type, hours, and price
  const [selectedType, setSelectedType] = useState(mainActivity.types[0].name);
  const [selectedHours, setSelectedHours] = useState(1);

  // Function to handle type selection
  const handleTypeClick = (typeName) => {
    setSelectedType(typeName);
  };

  // Function to handle hours selection
  const handleHoursClick = (hours) => {
    setSelectedHours(hours);
  };

  // Function to calculate and display the price based on selected type and hours
  const calculatePrice = () => {
    const selectedTypeData = mainActivity.types.find(
      (type) => type.name === selectedType
    );
    const price = selectedTypeData.price[selectedHours - 1];
    return price;
  };

  return (
    <main>
      <section className="contact mx-auto max-w-screen-xl md:p-4 " id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={mainActivity.imageSrc}
              width={800}
              height={800}
              className={"rounded"}
            />
          </div>

          <div className="p-2 md:p-4 rounded-2xl flex flex-col justify-between">
            <h1 className="text-4xl font-medium mb-8">{mainActivity.title}</h1>
            <p>{mainActivity.description}</p>

            {/* Render types if there are multiple types */}
            {mainActivity.types.length > 1 && (
              <div>
                <h3 className="my-4 text-gray-500 block">Types</h3>
                <div className="flex gap-6">
                  {mainActivity.types.map((type, index) => (
                    <div
                      key={index}
                      className={`border p-3 rounded-xl w-full text-center ${
                        selectedType === type.name
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleTypeClick(type.name)}
                    >
                      {type.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Render price options if there are multiple prices */}
            {mainActivity.types.some((type) => type.price.length > 1) && (
              <div>
                <h3 className="my-4 text-gray-500 block">Number of Hours</h3>
                <div className="flex gap-6">
                  {[1, 2].map((hours) => (
                    <div
                      key={hours}
                      className={`border p-3 rounded-xl w-full text-center ${
                        selectedHours === hours
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleHoursClick(hours)}
                    >
                      {hours} hour(s)
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Render price */}
            <div className="">
              <h3 className="my-4 text-gray-500 block">Price : </h3>
              <span className="mt-4 py-3 text-5xl">{calculatePrice()} DH</span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-1 md:p-4 mt-10  max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <h3 className="text-4xl font-medium mb-16">
          What does our clients say about us
        </h3>
        <div>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-5d49eb1b-05b2-4957-80dc-6d4463f4346f"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
      <Gallery />
      <Contact />
    </main>
  );
}
