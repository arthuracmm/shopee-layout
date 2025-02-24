import { Camera, MessageCircleMore, Search, ShoppingCart } from 'lucide-react'

export function Header() {
    return (
        <div className='flex flex-col relative'>
            <div className="absolute flex w-screen p-2 justify-around items-center z-1">
                <div className="flex bg-white rounded-sm justify-between w-70 h-10 p-2 text-zinc-500 items-center">
                    <div className='flex'>
                        <Search  size={20}/>
                        <input type="text" placeholder='Buscar na Shopee' className='pl-2 placeholder-orange-600' />
                    </div>
                    <Camera  size={20}/>
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
    )
}