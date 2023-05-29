import Image from "next/image"
import Link from "next/link"


export const Navbar = () => {
    return (
        <header>
            <nav className="container mx-auto">
                <div className="flex p-5 justify-between items-center">
                    <div className="flex items-center gap-5 text-link font-bold">
                        <Image src="/img/DG-Logotipo_Color.webp" alt="Desarrollo Global" width={180} height={45} />
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">Inicio</Link>
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">Cursos</Link>
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">Diplomas</Link>
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">Diplomados</Link>
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">InHouse</Link>
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">Seminarios</Link>
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">Contacto</Link>
                        <Link className="hover:text-desarrolloGlobal hover:border-b-2 hover:border-[#2b48b6]" href="/">Blog</Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="rounded-md bg-gris py-2 px-3 text-link">
                            <i className="fi fi-rr-bell-ring"></i>
                        </div>
                        <div className="rounded-md bg-gris py-2 px-3 text-link">
                            <i className="fi fi-rr-shopping-cart"></i>
                        </div>
                        <button className="rounded-md border border-[#2b48b6] text-desarrolloGlobal flex items-center font-bold gap-2 p-2">
                            <i className="fi fi-rr-user flex"></i>
                            Aula Virtual
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
