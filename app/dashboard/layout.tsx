'use client';

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./app-sidebar";


type Props = {
    children : React.ReactNode
}
export default function SidebarLayout({ children }: Props){

    return(
        <SidebarProvider>
            <AppSidebar/>
            
            <main className="w-full m-2">
                <div className="flex items-center gap-2 border-sidebar-border border shadow rounded-md p-2 px-4">
                   
                    <div className="ml-auto">
                        <div className="bg-amber-100 rounded-lg p-1">User</div>
                    </div>
                    
                </div>
                <div className="h-4"></div>
                {/* main content */}
                <div className="border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4">
                    {children}
                </div>

            </main>
        </SidebarProvider>
    )
}