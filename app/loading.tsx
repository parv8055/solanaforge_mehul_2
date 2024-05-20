import Image from "next/image";
import logo from "../public/splashlogo.png";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center bg-splashgradient h-screen w-screen space-y-8">
      <div></div>
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={300}
          height={300}
          // className="px-8 py-12"
        />
        <h1 className="text-white mt-4 text-center">Welcome to Trading Bot</h1>
      </div>
      <div className="w-4/12">
     
      </div>
    

      <span className="text-gray-500 text-xs text-center absolute bottom-12">
        This is our beta version, and we're constantly enhancing it with new
        features to provide you with the best trading experience possible. If
        you encounter any issues <br /> or bugs, please don't hesitate to reach
        out to us at BOT@SOLANAFORGE.DEV. Your feedback is invaluable as we work
        to improve and refine our bot
      </span>
    </div>
  );
}
