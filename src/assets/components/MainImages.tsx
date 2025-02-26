import { ChevronRight } from "lucide-react";

export function MainImages() {
    return (
        <>
            <div className="hidden sm:flex bg-zinc-100 h-120 w-full justify-center p-10">
                <div className="relative">
                    <img src="https://rseat.pics/" alt="a" className="rounded-xl w-300 h-120 object-cover" />
                </div>
                <div className="flex flex-col absolute bottom-2 w-295 justify-between p-2 bg-white rounded-md overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-sm">OFERTAS EM DESTAQUE</h1>
                        <div className="flex items-center gap-1">
                            <a href="#" className="font-bold text-sm">Ver Mais</a>
                            <ChevronRight />
                        </div>
                    </div>
                    <div className="flex mt-3 w-500">
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 md:h-45 md:w-45 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 md:h-45 md:w-45 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 md:h-45 md:w-45 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 md:h-45 md:w-45 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 md:h-45 md:w-45 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-red-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Oficial</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 md:h-45 md:w-45 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-red-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Oficial</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}