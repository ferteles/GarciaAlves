export default function BlogFooter() {
    return (
        <section className="relative w-full bg-primary pt-24 lg:pt-32 overflow-hidden flex flex-col justify-between">
            <div className="max-w-[1512px] mx-auto w-full px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-start z-10">
                <div className="max-w-[500px]">
                    <h2 className="font-handel text-3xl md:text-4xl lg:text-[60px] leading-none text-black mb-4">
                        REG.TECH.LAW<span className="text-white">.ALL</span>
                    </h2>
                    <p className="font-motiva text-xl font-bold text-black mt-4">
                        Tire dúvidas e impulsione seu negócio
                    </p>
                </div>
                <form className="flex flex-col md:flex-row w-full max-w-[700px] shadow-sm mt-8 lg:mt-0">
                    <input type="email" placeholder="EMAIL" className="bg-white px-6 py-5 font-motiva font-bold text-black flex-1 outline-none" />
                    <input type="text" placeholder="BREVE MENSAGEM" className="bg-white/90 px-6 py-5 font-motiva font-bold text-black flex-[2] outline-none" />
                    <button type="submit" className="bg-black text-white font-motiva font-bold px-10 py-5 hover:bg-black/80 transition-colors">ENVIAR</button>
                </form>
            </div>

            {/* Giant Garcia Alves Text */}
            <div className="w-full mt-20 lg:mt-32 flex justify-center overflow-hidden">
                <h1 className="font-handel text-[15vw] leading-[0.8] text-black uppercase tracking-tighter m-0 p-0 pb-0">
                    garcia alves
                </h1>
            </div>
        </section>
    );
}
