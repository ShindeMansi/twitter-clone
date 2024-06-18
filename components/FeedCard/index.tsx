import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1 ">
          <Image
            className="rounded-full"
            src="https://tse2.mm.bing.net/th?id=OIP.OlnxO753VRgHKDLLDzCKoAHaHw&pid=Api&P=0&h=180"
            alt="user Avtar"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5 className="text-white">Mansi Shinde</h5>
          <p className="text-white">
            Is it just me or everyone else? Do you feel the code quality
            decreses as the project size increses? Just refactored a lot of bad
            code #codingLife
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%] ">
            <div className="text-white">
              <BiMessageRounded />
            </div>
            <div className="text-white">
              <FaRetweet />
            </div>
            <div className="text-white">
              <AiOutlineHeart />
            </div>
            <div className="text-white">
              <AiOutlineUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
