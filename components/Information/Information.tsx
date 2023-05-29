import Image from "next/image"

export const Information = () => {
    return (
        <section className="flex container mx-auto -mt-14 justify-between font-bold">
            <article className="bg-white rounded-md p-5 flex items-center gap-3 shadow-md">
                <Image src="/img/img1.png" alt="" width={100} height={100} />
                <div>
                    <p>Certificacion de Calidad</p>
                    <p className="text-3xl">ISO 9001-2015</p>
                </div>
            </article>
            <article className="bg-white rounded-md p-5 flex items-center gap-3 shadow-md">
                <Image src="/img/img2.png" alt="" width={100} height={100} />
                <div>
                    <p>Clases</p>
                    <p className="text-3xl">Virtuales</p>
                </div>
            </article>
            <article className="bg-white rounded-md p-5 flex items-center gap-3 shadow-md">
                <Image src="/img/img3.png" alt="" width={100} height={100} />
                <div>
                    <p>Alumnos Capacitados</p>
                    <p className="text-3xl">+50,000</p>
                </div>
            </article>
            <article className="bg-white rounded-md p-5 flex items-center gap-3 shadow-md">
                <Image src="/img/img4.png" alt="" width={100} height={100} />
                <div>
                    <p>Capacitando</p>
                    <p className="text-3xl">+12 años</p>
                </div>
            </article>
        </section>
    )
}
