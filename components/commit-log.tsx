"use client";


import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


export default function CommitLogs() {

  return (
    <div className="w-full overflow-hidden">
      <ul className="space-y-6">

          <li className="relative flex items-start gap-4 min-h-[72px]">


          
            <div className="flex-none ">

            </div>

         
            <div className="w-[500px] max-w-full mt-4 p-4 rounded-md shadow bg-white ring-1 ring-gray-200">

          
              <div className="flex items-center text-xs text-gray-500 gap-x-1">
                <span className="font-semibold text-gray-900 text-sm ">

                </span>

                <span className="text-gray-400 text-sm ">(committed)</span>
                <Link
                  href={`#`}
                  target="_blank"
                  className="inline-flex items-center text-blue-600 hover:underline gap-x-1 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

             
              <p className="font-semibold text-sm mt-2 p-2 ml-2 border border-primary rounded-md "></p>

            
              <div className="mt-3"></div>

             
              <div className="text-sm prose border  rounded-md prose-sm ml-2 p-4 italic text-gray-600">
   
              </div>

         
              <div className="mt-3"></div>

            </div>
          </li>
    
      </ul>
    </div>
  );
}
