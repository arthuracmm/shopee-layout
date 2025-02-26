import { Bell, Camera, ChevronDown, Facebook, Globe, HelpCircle, Instagram, MessageCircleMore, Search, ShoppingCart, Twitter } from 'lucide-react'
import ShopeeLogo from "../../../public/shopee-logo.png"

export function Header() {
    return (
        <>
            <div className='sm:flex hidden bg-orange-500 items-center justify-center w-full'>
                <div className="flex flex-col w-full px-45 gap-4 pb-4">
                    <div className="flex items-center text-orange-100 justify-between w-full pt-2">
                        <div className="flex gap-2 items-center">
                            <a href="#" className='text-xs'>Central do Vendedor</a>
                            <p>|</p>
                            <a href="#" className='text-xs'>Central do Vendedor</a>
                            <p>|</p>
                            <a href="#" className='text-xs'>Central do Vendedor</a>
                            <p>|</p>
                            <div className="flex items-center gap-2">
                                <a href="#" className='text-xs'>Central do Vendedor</a>
                                <Instagram />
                                <Twitter />
                                <Facebook />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="flex items-center gap-2">
                                <Bell />
                                <p className='text-xs'>Notificações</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <HelpCircle />
                                <p className='text-xs'>Ajuda</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe />
                                <p className='text-xs'>Português</p>
                                <ChevronDown />
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="#" className='text-xs font-bold'>Cadastrar</a>
                                <p className='text-xs'>|</p>
                                <a href="#" className='text-xs font-bold'>Entrar</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex text-white rounded-md justify-between items-center">
                        <img src={ShopeeLogo} alt="shopee logo" className='w-35' />
                        <div className="flex bg-white w-200 justify-between p-1">
                            <input type="text" placeholder='Buscar na Shopee' className='placeholder-zinc-600 ml-2 outline-none w-2/3 text-zinc-600'/>
                            <Search size={20} className='bg-orange-500 px-4 box-content py-2'/>
                        </div>
                        <ShoppingCart/>
                    </div>
                </div>
            </div>
            <div className='flex sm:hidden flex-col relative'>
                <div className="absolute flex w-screen p-2 justify-around items-center z-1">
                    <div className="flex bg-white rounded-sm justify-between w-70 h-10 p-2 text-zinc-500 items-center">
                        <div className='flex'>
                            <Search size={20} />
                            <input type="text" placeholder='Buscar na Shopee' className='pl-2 placeholder-orange-600' />
                        </div>
                        <Camera size={20} />
                    </div>
                    <ShoppingCart size={20} className='text-white' />
                    <MessageCircleMore size={20} className='text-white' />
                </div>
                <img src="https://rseat.pics/" alt="a" className='h-46 object-cover' />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent shadow-inner"></div>
                <div className="flex absolute bottom-2 gap-2.5 w-screen justify-center">
                    <a href="#" className='h-2 w-2 rounded-full bg-orange-600' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                    <a href="#" className='h-2 w-2 rounded-full bg-white/20' />
                </div>
            </div>
        </>
    )
}