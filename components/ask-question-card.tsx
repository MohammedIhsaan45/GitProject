'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";



export default function AskQuestionCard() {


    const [open,setOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [loading,setLoading] = useState(false);
    const [filesReferences,setFilesReferences] = useState<{fileName:string;sourceCode:string;summary:string}[]>([]);
    const [answer,setAnswer] = useState<string>("");


    // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    // }

    return(
        <>
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="sm:max-w-[80vw]">
                <DialogHeader>
                    <DialogTitle>
                        <div className="mx-auto flex items-center rounded-md overflow-hidden">
                            <Image src='/logo.png' alt='gitview' width={50} height={50}/>
                            <p className="">Gitview Assistant</p>
                        </div>
                        <Button className=''variant={'outline'}>
                            Save Answer 
                        </Button>
                        
                    </DialogTitle>
                </DialogHeader>

                {/* <h1>Files References</h1> */}
                <Button type="button" onClick={()=> {setOpen(false); setAnswer("")}}>
                    Close
                </Button>
               
            </DialogContent>
        </Dialog>

            <Card className="w-full rounded-md bg-white">
                
                <CardHeader className="p-2 px-4 mt-4">
                    <CardTitle className="px-4">
                        
                        Ask Questions!
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form className="p-2" >
                        <Textarea 
                            placeholder="Which file should I edit to change the home page"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full"
                        />
                        <div className="h-4">
                        </div>
                        <Button disabled={loading} className="mb-4">Ask GitView</Button>
                        
                    </form>
                </CardContent>

            </Card>
        </>
    )
}

