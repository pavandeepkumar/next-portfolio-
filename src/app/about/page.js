import React from "react";

const page = () => {
  return (
    <div
      className="bg-black text-white flex "
      style={{ height: "100%", width: "100vw" }}
    >
      <div className="p-10 w-1/2 " >
        <div className="flex  text-white pl-10 text-2xl mb-5 font-bold">
          <span className="text-yellow-500 mr-3">About</span>
          <span className="text-red-300">Me</span>
        </div>

        <div>
          <div className="pl-10 mb-5">
            <h1>Hii there My Name is Pavandeep Kumar</h1>
          </div>
          <div className="border-2 border-yellow-500  p-6 ml-10 ">
            I am software engineering student (3th semester) at university of 4
            Silver Oak University
            <br /> and art B.Tech under the supervision of the
            silver oak university of computer science.
            <br /> 
            <br />I'm passionate about (Web
            development using ReactJS/ NextJS) and (mobile app development using
            flutter react native).
            <br /> 
            <br />I am also familiar with graphic design
            principles for creating visually applying and user-friendly
            interfaces, and proficient in figma and adobe photoshop of Ul and UX
            design.
            <br />
            <br />
             Learning new things always excites me, and I am constantly
            seeking new challenges to expand My knowledge and skills.
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-10 " style={{ height: "500px", width: "500px",marginTop: "130px"}}>
        <img src="aboutImage.png" alt="this is the image of about software enginer"  />
      </div>
    </div>
  );
};

export default page;
