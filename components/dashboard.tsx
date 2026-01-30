"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import AskQuestionCard from "@/components/ask-question-card";
import MeetingCard from "@/components/meeting-card";
import ArchiveButton from "@/components/archive-button";
import TeamMembers from "@/components/team-members";
import InviteButton from "./invite-bitton";
import CommitLogs from "./commit-log";


export default function Dashboard() {
  return (
    <div>
      
      <div className="flex items-center justify-between flex-wrap gap-y-4">
        {/* github link */}
        <div className="w-fit rounded-md bg-primary px-4 py-3">
          <div className="flex items-center">
            <Github className="size-5 text-white" />
            <div className="ml-2">
              <p className="text-sm font-medium text-white ">
                This project is linked to{" "}
                <Link
                  href={""}
                  className="inline-flex items-center text-white/80 hover:underline"
                >
                    github.com/username/repo
                  <ExternalLink className="ml-1 size-4" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="h-4"></div>

        <div className="flex items-center gap-2">
           <TeamMembers/>
           <InviteButton />
           <ArchiveButton/>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-2 gap-2 ">
          <AskQuestionCard/>
          <MeetingCard/>
         
        </div>
      </div>

      <div className="mt-8"></div>
      
        <CommitLogs />
    

    </div>
  );
}
