export const Navbar = () => {
    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16"> 
                    <a href="#home" className="font-mono font-bold text-xl text-white">
                        S<span className="text-blue-500">M</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}