'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function ArchiveButton() {

    const [open,setOpen] = useState(false);
    return(
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <div className='flex items-center justify-center'>
                    <DialogContent >
                    <DialogHeader>
                        <DialogTitle>Delete Project</DialogTitle>
                        <DialogDescription>Are you sure you want to delete this project?</DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex justify-end gap-3">
                        <Button variant={'destructive'}>
                        Confirm
                    </Button>
                    <Button variant="secondary" onClick={()=> setOpen(false)}>
                        Cancel
                    </Button>

                    </div>
                    
                
                </DialogContent>


                </div>
                
            </Dialog>
        

        <Button size={'sm'} variant={'destructive'} onClick={()=> {
            setOpen(true);
        
        }}>
            Archive
              
        </Button>
</>
      
    )
}

