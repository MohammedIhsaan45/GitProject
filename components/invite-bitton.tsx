'use client';

import { useState } from "react";
import { Dialog,DialogHeader,DialogContent,DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function InviteButton() {
    const [open,setOpen] = useState(false);
    return(
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <div className='flex items-center justify-center'>
                    <DialogContent >
                    <DialogHeader>
                        <DialogTitle>Invite Team Members</DialogTitle>
                        <DialogDescription>Ask them to copy and paste this link</DialogDescription>
                    </DialogHeader>
                    
                    <Input className="mt-4" value={'github url'}/>
                
                </DialogContent>


                </div>
                
            </Dialog>

            <Button size={'sm'} className="bg-primary" onClick={()=> setOpen(true)}>
                Invite Members

            </Button>
          

        
        
        </>


    )
}