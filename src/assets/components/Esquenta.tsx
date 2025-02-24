import { ChevronRight } from "lucide-react";

export function Esquenta() {
    return (
        <div className="flex relative shadow-lg">
            <div className="flex justify-center">
                <img src="https://rseat.pics/" alt="a" className='h-80 w-full object-cover rounded-2xl' />
                <div className="flex flex-col absolute bottom-2 w-94 justify-between p-2 bg-white rounded-md overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-sm">OFERTAS EM DESTAQUE</h1>
                        <div className="flex items-center gap-1">
                            <a href="#" className="font-bold text-sm">Ver Mais</a>
                            <ChevronRight />
                        </div>
                    </div>
                    <div className="flex mb-4 mt-3 w-500">
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                        <div className="flex relative">
                            <div className="flex flex-col items-center gap-2 p-2 relative">
                                <img src="https://rseat.pics/" alt="a" className="h-20 w-20 object-cover" />
                                <h1 className="font-bold"><span className="text-xs">R$</span>199,90</h1>
                            </div>
                            <p className="absolute text-xs text-white bg-orange-600 p-1 pt-0.5 pb-0.5 top-0 left-0 rounded-md rounded-tl-none rounded-bl-none">Indicado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}