import React from "react";

const page = () => {
  return (
    <div className="flex flex-col  skill align-center items-center boxShadow ">
      <div className="text-3xl my-5 font-bold ">
        <span className="text-red-300">My</span>{" "}
        <span className="text-yellow-500">Skills</span>
      </div>
      <div className="mb-4 text-white">
        Writing Code Using Language C++, Java, HTML, CSS, Python, JavaScript,and
        MYSQL
      </div>
      <div className="flex flex-col   p-10 m-10">
        <div className="flex p-5 flex-row justify-between   ">
          <div
            className=" flex flex-col boxShadow "
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img
                src="html.png"
                alt="image of html "
                width={100}
                height={100}
              />
            </div>
            <div className="text-white text-xl">HTML</div>
          </div>
          <div
            className=" flex flex-col ml-5 boxShadow"
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img
                src="cssImage.png"
                alt="image of html "
                width={100}
                height={100}
              />
            </div>
            <div className="text-white text-xl">CSS</div>
          </div>
          <div
            className=" flex flex-col ml-5 boxShadow"
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                alt="image of html "
                width={100}
                height={100}
              />
            </div>
            <div className="text-white text-xl">JavaScript</div>
          </div>
          <div
            className=" flex flex-col ml-5 boxShadow "
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0wGPWBQCGDSDlM2ap7uDFZK3SAuQUA9xzQ&usqp=CAU"
                alt="image of html "
                width={100}
                height={100}
              />
            </div>
            <div className="text-white text-xl">React</div>
          </div>
        </div>
        <div className="flex p-5 flex-row justify-between  ">
          <div
            className=" flex flex-col boxShadow"
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img
                src="next.png"
                alt="image of html "
                width={100}
                height={100}
              />
            </div>
            <div className="text-white text-xl">NEXT JS</div>
          </div>
          <div
            className=" flex flex-col ml-5 boxShadow"
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img src="tailwind.png" alt="image of html " />
            </div>
            <div className="text-white text-xl">Tailwind </div>
          </div>
          <div
            className=" flex flex-col ml-5 boxShadow"
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img
                src="github.png"
                alt="image of html "
                width={100}
                height={100}
              />
            </div>
            <div className="text-white text-xl">Github</div>
          </div>
          <div
            className=" flex flex-col ml-5 boxShadow"
            style={{ boxSizing: "border-box", width: "100px", height: "100px" }}
          >
            <div>
              <img
                src="react_native.png"
                alt="image of html "
                width={100}
                height={100}
              />
            </div>
            <div className="text-white text-xl">React Native</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
