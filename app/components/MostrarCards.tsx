

export const MostrarCards = () => {
  return (
    <section>
        <article className="container mx-auto">
            <p className="font-bold text-desarrolloGlobal text-center text-xl mt-10">¿QUE PUEDES APRENDER EN <span className="text-[#6161ff]">DESARROLLO GLOBAL</span>?</p>
            <div className="flex justify-between mt-10">
                <button className="rounded-full flex items-center px-7 shadow-lg bg-desarrolloGlobal text-white gap-3 py-3 font-bold">
                    <i className="fi fi-rr-apps flex"></i>
                    <p>Todos</p>
                </button>
                <button className="rounded-full flex items-center px-7 shadow-lg border border-[#2b48b6] text-desarrolloGlobal gap-3 py-3 font-bold">
                    <i className="fi fi-rr-book-alt flex"></i>
                    <p>Diplomas</p>
                </button>
                <button className="rounded-full flex items-center px-7 shadow-lg border border-[#2b48b6] text-desarrolloGlobal gap-3 py-3 font-bold">
                    <i className="fi fi-rr-briefcase flex"></i>
                    <p>Cursos</p>
                </button>
                <button className="rounded-full flex items-center px-7 shadow-lg border border-[#2b48b6] text-desarrolloGlobal gap-3 py-3 font-bold">
                    <i className="fi fi-rr-diploma flex"></i>
                    <p>Diplomados</p>
                </button>
                <button className="rounded-full flex items-center px-7 shadow-lg border border-[#2b48b6] text-desarrolloGlobal gap-3 py-3 font-bold">
                    <i className="fi fi-rr-apps flex"></i>
                    <p>InHouse</p>
                </button>
                <button className="rounded-full flex items-center px-7 shadow-lg border border-[#2b48b6] text-desarrolloGlobal gap-3 py-3 font-bold">
                    <i className="fi fi-rr-box flex"></i>
                    <p>Seminarios</p>
                </button>
                <button className="rounded-full flex items-center px-7 shadow-lg border border-[#2b48b6] text-desarrolloGlobal gap-3 py-3 font-bold">
                    <i className="fi fi-rr-video-camera flex"></i>
                    <p>Grabados</p>
                </button>
            </div>
        </article>
    </section>
  )
}
