export default function Home() {
  const hk1Images = [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
  ];

  const scooters = [
    "https://images.unsplash.com/photo-1558981806-c33d3b77b98b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            SMILT
            <span className="text-lime-400"> MOTORS</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg md:text-2xl">
            Potencia, diseño y velocidad en una nueva generación de motores y
            movilidad.
          </p>

          <button className="mt-10 bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            VER CATÁLOGO
          </button>
        </div>
      </section>

      {/* HK1 STRIKER */}
      <section className="py-24 px-6 md:px-20">
        <div className="mb-14">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-wider">
            HK1
            <span className="text-lime-400"> STRIKER</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Diseño agresivo, autonomía eléctrica y rendimiento extremo para los
            amantes de la aventura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {hk1Images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 hover:scale-[1.02] transition"
            >
              <img
                src={img}
                className="w-full h-[500px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">HK1 STRIKER 2026</h3>

                <div className="mt-4 flex gap-4 text-sm text-gray-400">
                  <span>110KM</span>
                  <span>72V</span>
                  <span>100KM/H</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YAMAHA */}
      <section className="py-24 bg-zinc-950 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black">
              CRUX
              <span className="text-lime-400"> REV</span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Yamaha redefine la movilidad urbana con diseño clásico y máxima
              eficiencia.
            </p>

            <button className="mt-8 border border-lime-400 text-lime-400 px-8 py-4 rounded-full hover:bg-lime-400 hover:text-black transition">
              VER MODELOS
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1400&auto=format&fit=crop"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SCOOTERS */}
      <section className="py-24 px-6 md:px-20">
        <div className="mb-14">
          <h2 className="text-5xl md:text-7xl font-black">
            TAURO
            <span className="text-lime-400"> DIO</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Scooters modernos para el día a día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {scooters.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl"
            >
              <img
                src={img}
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-8">
                <h3 className="text-4xl font-black">FENIX 105CC</h3>

                <p className="text-gray-300 mt-2">
                  Inicial RD$10,000 · Cuota RD$4,850
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 md:px-20 text-gray-500">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="text-white text-2xl font-black">
              SMILT MOTORS
            </h3>

            <p className="mt-2">
              Jarabacoa · Constanza · San Francisco de Macorís
            </p>
          </div>

          <div className="text-sm">
            © 2026 Smilt Motors. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}