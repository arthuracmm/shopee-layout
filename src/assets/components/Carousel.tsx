export function Carousel() {
    return (
        <div className="hidden sm:flex justify-center px-10">
            <div className="flex gap-2 items-center w-screen justify-center">
                <div className="flex relative">
                    <img src="https://rseat.pics/" alt="a" className="w-200 h-62 object-cover" />
                    <div className="flex absolute bottom-2 gap-2.5 w-200 justify-center">
                        <a href="#" className='h-2 w-2 rounded-full bg-orange-600' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                        <a href="#" className='h-2 w-2 rounded-full bg-white/50' />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <img src="https://rseat.pics/" alt="a" className=" w-100 h-30 object-cover" />
                    <img src="https://rseat.pics/" alt="a" className=" w-100 h-30 object-cover" />
                </div>
            </div>
        </div>
    )
}