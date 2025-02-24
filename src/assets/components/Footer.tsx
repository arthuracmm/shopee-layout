import { Bell, Home, ShoppingBag, User, Video } from "lucide-react";

export function Footer (){
    return(
        <div className="flex justify-around p-4 pb-6 bg-zinc-100">
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