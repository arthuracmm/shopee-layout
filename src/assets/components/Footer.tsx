import { Bell, Home, ShoppingBag, User, Video } from "lucide-react";

export function Footer (){
    return(
        <div className="sm:hidden flex fixed bottom-0 w-full justify-around p-2 pb-4 bg-zinc-100">
            <div className="flex flex-col items-center text-orange-600">
                <Home />
                <p className="text-xs">Inicio</p>
            </div>
            <div className="flex flex-col items-center">
                <ShoppingBag />
                <p className="text-xs">Inicio</p>
            </div>
            <div className="flex flex-col items-center">
                <Video />
                <p className="text-xs">Inicio</p>
            </div>
            <div className="flex flex-col items-center">
                <Bell />
                <p className="text-xs">Inicio</p>
            </div>
            <div className="flex flex-col items-center">
                <User />
                <p className="text-xs">Inicio</p>
            </div>
        </div>
    )
}