import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { techStackImages } from "../constants";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("biswajitswain820@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/profile-pic.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Biswajit</p>
              <p className="grid-subtext">
                With 18 months of experience, I have refined my skills in
                front-end development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="grid grid-cols-4 gap-4 md:gap-6 flex-grow">
              {techStackImages.map(({ src, alt, title }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className="w-full sm:h-[60px] h-fit object-contain"
                  title={title}
                />
              ))}
            </div>

            <div className="mt-4">
              <p className="grid-headtxt">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // "//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 12.964807,
                    lng: 77.543263,
                    text: "Find Me!",
                    color: "white",
                    size: 200,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most time zones
              </p>
              <p className="grid-subtext">
                I'm based in Bangalore and open to remote opportunities.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass={"w-full mt-10"}
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My passion for Coding.</p>
              <p className="grid-subtext">
                I love solving problems and building through code. Coding isn't
                just my profession; it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />

                <p className="md:text-xl font-medium text-gray_gradient text-white">
                  biswajitswain820@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
