import Image from "next/image"

export const Banner = () => {
    return (

        <main className="bg-fondo-principal">
            <section className="container mx-auto text-white flex items-center">
                <article className="w-1/2 p-10">
                    <div className="flex gap-5">
                        <Image src="/icons/foto1.webp" alt="Imagen 1" className="wave-animation rounded-full delay-1s" width={48} height={48} />
                        <Image src="/icons/foto2.webp" alt="Imagen 2" className="wave-animation rounded-full delay-2s" width={48} height={48} />
                        <Image src="/icons/foto3.webp" alt="Imagen 3" className="wave-animation rounded-full delay-3s" width={48} height={48} />
                        <Image src="/icons/foto4.webp" alt="Imagen 4" className="wave-animation rounded-full delay-4s" width={48} height={48} />
                        <Image src="/icons/foto5.webp" alt="Imagen 5" className="wave-animation rounded-full delay-5s" width={48} height={48} />
                        <Image src="/icons/foto6.webp" alt="Imagen 6" className="wave-animation rounded-full delay-6s" width={48} height={48} />
                        <Image src="/icons/foto7.webp" alt="Imagen 6" className="wave-animation rounded-full delay-6s" width={48} height={48} />
                        <Image src="/icons/foto8.webp" alt="Imagen 6" className="wave-animation rounded-full delay-1s" width={48} height={48} />
                    </div>
                    <h1 className="text-5xl font-black mt-5">Centro de Capacitación y Desarrollo Global</h1>
                    <p className="mt-5 w-10/12">Más de 12 años brindando programas virtuales; Somos una empresa educativa que cuenta con certificación de calidad ISO 9001-2015</p>
                    <button className="text-white bg-yellow-500 rounded-md p-3 mt-5 font-bold">Registrate y comienza a estudiar</button>
                </article>
                <article>
                    <Image src="/img/personas.png" alt="Desarrollo Global - Personas" width={656} height={404} className="pt-10" />
                </article>
            </section>
        </main>


    )
}
