import Amazon from "../assets/images/Amazon.png";
import DoiniIttefa from "../assets/images/doinikIttefa.png";
import Dpi from "../assets/images/dpi.png";
import Train from "../assets/images/train.jpg";
import Container from "./Container";
import ProjectsLinks from "./ProjectsLinks";
import SectionTitle from "./SectionTitle";
const Project = () => {
  return (
    <Container id="project">
      <SectionTitle title="I have build these" titleNo="03" />
      <div className=" mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="h-[180px] overflow-hidden">
          <a href="https://a-simple-project-dpi.vercel.app/">
            <img
              className="hover:scale-110 duration-300 my-4"
              src={Dpi}
              alt="DPI Website"
            />
          </a>
        </div>
        <div className="h-[185px] overflow-hidden">
          <a href="https://a-simple-project-dpi.vercel.app/">
            <img
              className="hover:scale-110 duration-300 my-4"
              src={Dpi}
              alt="DPI Website"
            />
          </a>
        </div>
      </div>
      <SectionTitle title="Continous Clone Project" titleNo="03" />
      <div
        className="mt-10
      "
      >
        {/*project one */}
        <div className="flex flex-col lg:flex-row gap-6 py-8 my-16">
          <a
            href="https://www.amazon.in/ref=nav_logo"
            className="w-full lg:w-1/2 h-auto relative group  rounded-lg overflow-hidden"
          >
            <img
              src={Amazon}
              alt="Amazon"
              className="w-full h-full object-cover group-hover:scale-105 duration-200"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-12 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-green-500">O-auth</span> and then make the
              purchage using <span className="text-designColor">stripe</span>
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkColor">
              <li>JextJs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLinks projectLink={"https://www.amazon.com/ "} />
          </div>
        </div>

        {/* project two */}
        <div className="flex flex-col lg:flex-row-reverse gap-6 mb-6">
          <a
            href="https://www.ittefaq.com.bd/"
            className="w-full lg:w-1/2 h-auto relative group  rounded-lg overflow-hidden"
          >
            <img
              src={DoiniIttefa}
              alt="Amazon"
              className="w-full h-full object-cover group-hover:scale-105 duration-200"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-start lg:-mr-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">
                The Daily Ittefaq Clone 2.0
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ">
              The Daily Ittefaq clone website for visualizing personalized
              Amazon website. View your products, Add your account with{" "}
              <span className="text-green-500">O-auth</span> and then make the
              purchage using <span className="text-designColor">stripe</span>
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkColor">
              <li>JextJs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLinks projectLink={"https://www.amazon.com/ "} />
          </div>
        </div>
        {/* project three */}

        <div className="flex flex-col lg:flex-row gap-6 py-8 my-16">
          <a
            href="https://eticket.railway.gov.bd/"
            className="w-full lg:w-1/2 h-auto relative group  rounded-lg overflow-hidden"
          >
            <img
              src={Train}
              alt="Amazon"
              className="w-full h-full object-cover group-hover:scale-105 duration-200"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-12 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">
                Bangladesh Railway Clone 2.0
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md lg:-ml-16">
              Bangladesh Railway clone website for visualizing personalized
              Amazon website. View your products, Add your account with{" "}
              <span className="text-green-500">O-auth</span> and then make the
              purchage using <span className="text-designColor">stripe</span>
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkColor">
              <li>JextJs</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLinks projectLink={"https://www.amazon.com/ "} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
