import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {

  return(
    <main className="flex flex-col items-center justify-center mt-24">
      <Link href={'/dashboard'}>
            <Button variant={'ghost'} className="bg-blue-400 hover:bg-blue-500">
                Dashboard 
           </Button>
      </Link>
      <p className="text-black text-md mt-4 font-semibold">Click this button to navigate to the dashboard!</p>

    </main>
  )
}