const imgs = {
  hero: '/smilt/garage.jpg',
  navi: '/smilt/honda-navi.jpg',
  xtz: '/smilt/yamaha-xtz.jpg',
  aerox: '/smilt/yamaha-aerox.jpg',
  crux: '/smilt/crux-rev.jpg',
  hk1: '/smilt/hk1-main.jpg',
  hk1red: '/smilt/hk1-red.jpg',
  hk1black: '/smilt/hk1-black.jpg',
  hk1chasis: '/smilt/hk1-chasis.jpg',
  hk1sellado: '/smilt/hk1-sellado.jpg',
  hk1susp: '/smilt/hk1-suspension.jpg',
  tauro: '/smilt/tauro-dio.jpg',
  fenix: '/smilt/fenix.jpg',
  huracan: '/smilt/huracan.jpg',
  casco: '/smilt/casco.jpg',
  showroom: '/smilt/showroom.jpg',
};

const models = [
  { title: 'HONDA NAVI', brand: 'Honda', img: imgs.navi, desc: 'Urbana, compacta y lista para moverte diario.' },
  { title: 'YAMAHA XTZ', brand: 'Yamaha', img: imgs.xtz, desc: 'Aventura y resistencia para cualquier terreno.' },
  { title: 'YAMAHA AEROX', brand: 'Yamaha', img: imgs.aerox, desc: 'Scooter deportiva con presencia agresiva.' },
  { title: 'CRUX REV', brand: 'Yamaha', img: imgs.crux, desc: 'Clásica, eficiente y fuerte para el trabajo.' },
];

const finance = [
  { title: 'TAURO DIO', img: imgs.tauro, info: 'Inicial RD$10,000 · Cuota RD$5,500' },
  { title: 'FENIX 105 CC', img: imgs.fenix, info: 'Inicial RD$10,000 · Cuota RD$4,850' },
  { title: 'HURACÁN', img: imgs.huracan, info: 'Inicial RD$5,000 · Cuota RD$4,350' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="text-2xl font-black tracking-tight"><span className="text-lime-400">SMILT</span> MOTORS</div>
          <div className="hidden gap-7 text-xs font-bold uppercase tracking-widest text-zinc-300 md:flex">
            <a href="#motos">Motos</a><a href="#electricas">Eléctricas</a><a href="#financiamiento">Financiamiento</a><a href="#showroom">Sucursales</a>
          </div>
          <a href="https://wa.me/18095747925" className="rounded-full bg-lime-400 px-5 py-2 text-sm font-black text-black shadow-[0_0_30px_rgba(132,255,0,.35)]">WhatsApp</a>
        </div>
      </nav>

      <section className="relative min-h-screen pt-24 flex items-center">
        <img src={imgs.hero} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[.35em] text-lime-400">Tu movilidad, nuestra pasión</p>
            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[.82] tracking-tight md:text-8xl lg:text-9xl">
              ¿Motos?<br/><span className="text-lime-400">Smilt Motors</span><br/>es la respuesta.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">Las mejores marcas, financiamiento a tu alcance y modelos para ciudad, trabajo, aventura y alto rendimiento.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#motos" className="rounded-xl bg-lime-400 px-7 py-4 font-black text-black transition hover:scale-105">Ver modelos</a>
              <a href="#financiamiento" className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur transition hover:border-lime-400 hover:text-lime-400">Financiar ahora</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-3 text-sm font-bold">
              <div className="rounded-2xl bg-black/70 p-5"><span className="text-lime-400">✓</span> Mejores marcas</div>
              <div className="rounded-2xl bg-black/70 p-5"><span className="text-lime-400">✓</span> Financiamiento</div>
              <div className="rounded-2xl bg-black/70 p-5"><span className="text-lime-400">✓</span> Servicio técnico</div>
              <div className="rounded-2xl bg-black/70 p-5"><span className="text-lime-400">✓</span> Repuestos</div>
            </div>
          </div>
        </div>
      </section>

      <section id="motos" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-black uppercase tracking-[.35em] text-lime-400">Nuestras</p>
          <h2 className="text-5xl font-black uppercase md:text-7xl">Marcas</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {models.map((m) => (
            <article key={m.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-2 hover:border-lime-400/60">
              <div className="relative h-80 overflow-hidden">
                <img src={m.img} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-lime-400 px-3 py-1 text-xs font-black text-black">{m.brand}</div>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-black uppercase italic tracking-tight">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{m.desc}</p>
                <button className="mt-6 w-full rounded-xl border border-white/10 py-3 text-sm font-black transition hover:bg-lime-400 hover:text-black">Ver modelos</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="electricas" className="relative border-y border-white/10 bg-zinc-950 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[.35em] text-lime-400">HK1 Striker 2026</p>
              <h2 className="mt-4 text-6xl font-black uppercase italic leading-none md:text-8xl">100%<br/><span className="text-lime-400">Eléctrica</span></h2>
              <p className="mt-6 max-w-lg text-zinc-400">Offroad eléctrico con actitud extrema, detalles técnicos y presencia visual brutal.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['110 KM autonomía','72V 45AH lithium','100 KM/H max speed','4H charge time'].map((s)=><div key={s} className="rounded-2xl border border-white/10 bg-black p-4 text-center text-sm font-black">{s}</div>)}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10"><img src={imgs.hk1} className="h-[620px] w-full object-cover" /></div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[imgs.hk1red, imgs.hk1black, imgs.hk1chasis, imgs.hk1sellado, imgs.hk1susp].map((img,i)=>(
              <div key={i} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black"><img src={img} className="h-72 w-full object-cover" /></div>
            ))}
          </div>
        </div>
      </section>

      <section id="financiamiento" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-black uppercase tracking-[.35em] text-lime-400">Financiamiento</p>
          <h2 className="text-5xl font-black uppercase md:text-7xl">Móntate hoy</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {finance.map((f)=>(
            <article key={f.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
              <img src={f.img} className="h-[460px] w-full object-cover" />
              <div className="p-6"><h3 className="text-3xl font-black uppercase italic">{f.title}</h3><p className="mt-2 text-lime-400 font-bold">{f.info}</p><a href="https://wa.me/18095747925" className="mt-5 block rounded-xl bg-lime-400 py-3 text-center font-black text-black">Solicitar</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden bg-white text-black">
          <img src={imgs.casco} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
          <div className="relative z-10 p-10 lg:p-16"><h2 className="max-w-lg text-5xl font-black uppercase italic md:text-7xl">Los que llegan lejos, salen <span className="text-lime-500">protegidos</span></h2></div>
        </div>
        <div id="showroom" className="relative min-h-[520px] overflow-hidden bg-zinc-950">
          <img src={imgs.showroom} className="absolute inset-0 h-full w-full object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-10 lg:p-16">
            <h2 className="text-5xl font-black uppercase italic md:text-7xl">Showroom</h2>
            <p className="mt-4 max-w-xl text-zinc-300">Jarabacoa · 809-574-7925 / Constanza · 809-539-1471 / San Francisco de Macorís · 809-294-3030</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-zinc-500">
        <strong className="text-white">SMILT MOTORS</strong> — ¡Te esperamos! Tu movilidad, <span className="text-lime-400">nuestra pasión</span>.
      </footer>
    </main>
  );
}
