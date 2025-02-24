import { CircleDollarSign, Grid2X2, ShoppingBag, ShoppingCart, Smartphone, TextSearch,Tickets, Truck, Video, Wallet } from "lucide-react";

export function MainButtons(){
    return(
        <div className="grid grid-cols-5 grid-rows-2 mt-4 gap-y-6">
            <div className="flex flex-col text-center items-center">
                <CircleDollarSign size={40} className="text-yellow-500 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Moedas <span className="block"> e Prêmios</span></p>
            </div>
            <div className="flex flex-col text-center items-center">
                <Video size={40} className="text-blue-900 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Live</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <ShoppingBag size={40} className="text-red-800 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Lojas Oficiais</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <Smartphone size={40} className="text-blue-700 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Tecnologia</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <TextSearch size={40} className="text-orange-600 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Mais Categorias</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <Tickets size={40} className="text-orange-600 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Cupons</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <Truck size={40} className="text-green-700 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Frete Gratis</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <Wallet size={40} className="text-orange-600 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">ShopeePay</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <ShoppingCart size={40} className="text-blue-400 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Mercado</p>
            </div>
            <div className="flex flex-col text-center items-center">
                <Grid2X2 size={40} className="text-green-700 p-2 border-1 border-zinc-300 rounded-lg"/>
                <p className="text-xs font-semibold">Mercado</p>
            </div>
        </div>
    )
}