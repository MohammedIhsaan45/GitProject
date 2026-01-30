"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Presentation, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";



export default function MeetingCard() {

  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [fileName,setFileName] =useState("Unknown");



  return (
    <Card
      className="w-full flex flex-col items-center justify-center rounded-md p-4 bg-white border shadow-md"
      
    >
        <>
          <Presentation className="h-10 w-10 animate-bounce mt-4" />
          <div className="flex flex-col items-center justify-center">
            <h3 className="mt-2 text-md font-semibold text-gray-900">
              Create a new meeting
            </h3>
            <p className="mt-1 text-center text-xs  text-gray-500">
              Analyse your meeting with Gitview
            </p>

            <p className="text-xs text-gray-400">Powered by AI</p>
          </div>

          <div className="mt-4">
            <Button disabled={isUploading}>
              <Upload className="-ml-0.5 mr-1.5 h-5 w-5 " aria-hidden="true" />
              Upload Meeting
            </Button>
          </div>
        </>
     


    </Card>
  );
}
