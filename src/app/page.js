import Image from "next/image";
import Link from "next/link";
import  {AiFillLinkedin} from "react-icons/ai";

export default function Home() {
  return (
    <div className="home flex justify-center  flex-row  items-center p-12">
      <div className="w-1/2 ml-14">
        <div className="font-bold text-5xl text-white">
          <h1>Hello everyone! </h1>
        </div>
        <div className="text-red-300 text-xl mt-3 ">My Name is Pavandeep , <strong className="text-yellow-500">I am Software Engineer</strong></div>
        <div className="flex flex-row mt-5">
          <div className="bg-blue-500 text-white px-3 py-2 rounded-3xl  mr-5 ">
            <Link className="px-4 font-bold pt-1" href="resume.pdf">My CV</Link>
          </div>
          <div className="bg-blue-500 text-white px-3 py-2  rounded-3xl  mr-5 flex">
            <Link href="https://www.linkedin.com/in/pavandeep-kumar-0b0366231/" className="px-2 font-bold  ">
              Linkdin 
            </Link>
            <AiFillLinkedin width={10} height={10} className="mt-1"/>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src="home.png" alt="this is the image of software enginer" style={{height: "500px", width: "500px"}} />
      </div>
    </div>
  );
}
