"use client";

import { useState } from "react";

const NAV_LINKS = ["Inicio", "Motos", "Electricas", "Financiamiento", "Accesorios", "Sucursales", "Contacto"];

const FEATURES = [
  { title: "MEJORES MARCAS", sub: "GARANTIA OFICIAL" },
  { title: "FINANCIAMIENTO", sub: "FACIL Y RAPIDO" },
  { title: "SERVICIO TECNICO", sub: "ESPECIALIZADO" },
  { title: "REPUESTOS ORIGINALES", sub: "SIEMPRE DISPONIBLES" },
];

const BRANDS_TABS = ["Todas", "Honda", "Yamaha", "HK1 Striker", "Tauro", "Kymco"];

const BRAND_CARDS = [
  { image: "/smilt/honda-navi.jpg", brand: "Honda", name: "NAVI", button: "VER MODELOS", color: "text-red-500" },
  { image: "/smilt/yamaha-xtz.jpg", brand: "Yamaha", name: "XTZ", button: "VER MODELOS", color: "text-white" },
  { image: "/smilt/yamaha-aerox.jpg", brand: "Yamaha", name: "AEROX", button: "VER MODELOS", color: "text-white" },
  { image: "/smilt/hk1-main.jpg", brand: "HK1", name: "STRIKER", button: "100% ELECTRICA", color: "text-[#7cff00]" },
];

const HK1_SPECS = [
  { val: "110 KM", label: "AUTONOMIA" },
  { val: "72V 45AH", label: "BATERIA" },
  { val: "100 KM/H", label: "MAX SPEED" },
  { val: "4H", label: "CHARGE TIME" },
  { val: "100%", label: "ELECTRICA" },
];

const SUCURSALES = [
  { ciudad: "Jarabacoa", tel: "809-574-7925", href: "tel:8095747925" },
  { ciudad: "Constanza", tel: "809-539-1471", href: "tel:8095391471" },
  { ciudad: "San Francisco de Macoris", tel: "809-294-3030", href: "tel:8092943030" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1220px] bg-black">

        <nav className="sticky top-0 z-50 flex h-[80px] items-center justify-between border-b border-white/10 bg-black/95 px-6 backdrop-blur-md lg:px-8">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Smilt Motors" className="h-[58px] w-[58px] object-contain" style={{ filter: "drop-shadow(0 0 14px rgba(124,255,0,0.5))" }} />
            <div className="leading-[0.85]">
              <div className="text-[26px] font-black uppercase tracking-tight text-white">SMILT</div>
              <div className="text-[26px] font-black uppercase tracking-tight text-white">MOTORS</div>
            </div>
          </a>
          <div className="hidden items-center gap-6 text-[11px] font-black uppercase tracking-widest lg:flex">
            {NAV_LINKS.map((link, i) => (
              <a key={link} href={"#" + link.toLowerCase()} className={"transition hover:text-[#7cff00] " + (i === 0 ? "text-[#7cff00]" : "text-white/80")}>
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/18095747925" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-[#7cff00] px-5 py-2.5 text-[13px] font-black text-black transition hover:scale-105 hover:bg-[#90ff20]">
              WhatsApp
            </a>
            <button className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span className={"block h-0.5 w-5 bg-white transition-all " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
              <span className={"block h-0.5 w-5 bg-white transition-all " + (menuOpen ? "opacity-0" : "")} />
              <span className={"block h-0.5 w-5 bg-white transition-all " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-b border-white/10 bg-black px-6 py-4 lg:hidden">
            {NAV_LINKS.map((link, i) => (
              <a key={link} href={"#" + link.toLowerCase()} className={"block py-3 text-[13px] font-black uppercase tracking-widest border-b border-white/5 " + (i === 0 ? "text-[#7cff00]" : "text-white/70")} onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
          </div>
        )}

        <section id="inicio" className="relative h-[460px] overflow-hidden sm:h-[500px]">
          <img src="/smilt/garage.jpg" alt="Smilt Motors" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          <div className="relative z-10 flex h-full items-center px-8 lg:px-12">
            <div className="max-w-[540px]">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#7cff00]">Distribuidor oficial</p>
              <h1 className="text-[56px] font-black uppercase italic leading-[0.88] tracking-[-0.04em] sm:text-[72px]">
                Motos?<br />
                <span className="text-[#7cff00]">Smilt Motors</span><br />
                es la respuesta.
              </h1>
              <p className="mt-5 text-[14px] font-black uppercase leading-snug text-white/90">Las mejores marcas, precios<br />y financiamiento a tu alcance.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#modelos" className="rounded-xl bg-[#7cff00] px-8 py-3.5 text-[14px] font-black text-black transition hover:scale-105 hover:bg-[#90ff20]">VER MODELOS</a>
                <a href="#financiamiento" className="rounded-xl border border-white/30 bg-black/40 px-8 py-3.5 text-[14px] font-black backdrop-blur-sm transition hover:bg-white/10">FINANCIAR AHORA</a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-4 sm:px-6">
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={"flex items-center gap-4 p-5 " + (i < 3 ? "border-b border-white/10 lg:border-b-0 lg:border-r" : "")}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7cff00]/15 text-[#7cff00] font-black text-lg">
                  {i === 0 ? "S" : i === 1 ? "$" : i === 2 ? "T" : "R"}
                </div>
                <div>
                  <div className="text-[13px] font-black">{f.title}</div>
                  <div className="text-[11px] text-white/50">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="modelos" className="pt-12 text-center">
          <div className="text-[22px] font-black italic uppercase text-[#7cff00]">Nuestras</div>
          <div className="text-[58px] font-black italic uppercase leading-none">Marcas</div>
        </section>

        <div className="mt-5 flex flex-wrap justify-center gap-2 px-4 text-[11px] font-black uppercase sm:px-6">
          {BRANDS_TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} className={"border border-white/15 px-5 py-2.5 transition " + (activeTab === i ? "bg-[#7cff00] text-black" : "bg-[#090909] text-white hover:bg-white/10")}>
              {tab}
            </button>
          ))}
        </div>

        <section className="grid gap-4 px-4 pt-5 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
          {BRAND_CARDS.map((card) => (
            <div key={card.image} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition hover:border-[#7cff00]/30">
              <div className="relative h-[380px] overflow-hidden">
                <img src={card.image} alt={card.brand + " " + card.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className={"text-[11px] font-black uppercase tracking-widest " + card.color}>{card.brand}</div>
                  <div className={"text-[28px] font-black italic uppercase leading-none " + card.color}>{card.name}</div>
                </div>
              </div>
              <div className="p-4">
                <button className="w-full rounded-xl border border-white/20 py-3 text-[12px] font-black uppercase transition hover:bg-[#7cff00] hover:text-black hover:border-[#7cff00]">{card.button}</button>
              </div>
            </div>
          ))}
        </section>

        <section id="financiamiento" className="pt-14 text-center">
          <div className="text-[46px] font-black italic uppercase text-[#7cff00]">Financiamiento</div>
          <div className="text-[28px] font-black italic uppercase">A tu medida</div>
          <p className="mx-auto mt-3 max-w-lg text-[14px] text-white/50">Lleva tu moto hoy. Planes accesibles con aprobacion en 24 horas.</p>
        </section>

        <section className="grid gap-4 px-4 pt-6 sm:px-6 sm:grid-cols-3">
          {[
            { img: "/smilt/tauro-dio.jpg", label: "TAURO DIO", detail: "Cuota: $5,500 - Inicial: $10,000" },
            { img: "/smilt/fenix.jpg", label: "FENIX 105CC", detail: "Inicial: RD$10,000 - Cuota: RD$4,850" },
            { img: "/smilt/huracan.jpg", label: "HURACAN", detail: "Inicial: RD$5,000 - Cuotas: RD$4,350" },
          ].map((item) => (
            <div key={item.img} className="group relative overflow-hidden rounded-2xl">
              <img src={item.img} alt={item.label} className="h-[270px] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[16px] font-black uppercase text-[#7cff00]">{item.label}</div>
                <div className="text-[13px] text-white/70">{item.detail}</div>
              </div>
            </div>
          ))}
        </section>

        <section id="electricas" className="px-4 pt-6 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909] lg:grid lg:grid-cols-[1.4fr_1fr]">
            <div className="relative h-[240px] overflow-hidden lg:h-auto">
              <img src="/smilt/hk1-main.jpg" alt="HK1 Striker 2026" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
              <div className="absolute bottom-4 left-4">
                <div className="text-[11px] font-black uppercase tracking-widest text-[#7cff00]">HK1 2026</div>
                <div className="text-[32px] font-black italic uppercase leading-none">STRIKER</div>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-4 text-[13px] font-black uppercase text-[#7cff00]">Especificaciones</div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {HK1_SPECS.map((spec) => (
                  <div key={spec.label} className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-[14px] font-black text-[#7cff00]">{spec.val}</div>
                    <div className="mt-1 text-[9px] font-black uppercase text-white/50">{spec.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-[#7cff00]/10 border border-[#7cff00]/20 p-4">
                <div className="text-[22px] font-black uppercase text-[#7cff00]">100% ELECTRICA</div>
                <div className="text-[12px] text-white/60 mt-1">Sin combustible - Sin emisiones - Mantenimiento minimo</div>
              </div>
            </div>
          </div>
        </section>

        <section id="accesorios" className="grid gap-4 px-4 pt-6 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-2xl">
            <img src="/smilt/casco.jpg" alt="Cascos Xecuro" className="h-[220px] w-full object-cover lg:h-[260px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <div className="text-[13px] font-black uppercase text-[#7cff00]">Los que llegan lejos,</div>
              <div className="text-[28px] font-black italic uppercase leading-tight">SALEN PROTEGIDOS</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { text: "CASCOS CERTIFICADOS" },
              { text: "PROTECCION PARA TU RUTA" },
              { text: "ACCESORIOS DE CALIDAD" },
              { text: "SEGURIDAD SIEMPRE" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 text-center transition hover:border-[#7cff00]/30">
                <span className="text-[12px] font-black uppercase leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="sucursales" className="grid gap-4 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_1fr_0.7fr]">
          <div className="relative overflow-hidden rounded-2xl">
            <img src="/smilt/showroom.jpg" alt="Showroom Smilt Motors" className="h-[220px] w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-[11px] font-black uppercase tracking-widest text-[#7cff00]">Nuestro showroom</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#090909] p-6">
            <div className="text-[12px] font-black uppercase text-white/50">Visitanos en nuestro</div>
            <div className="text-[44px] font-black italic uppercase leading-none text-[#7cff00]">Showroom</div>
            <div className="mt-5 space-y-3 text-[14px]">
              {SUCURSALES.map((s) => (
                <div key={s.ciudad}>
                  <div className="font-black text-white">{s.ciudad}</div>
                  <a href={s.href} className="text-white/60 hover:text-[#7cff00] transition">{s.tel}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#7cff00]/20 bg-[#090909] p-6">
            <div className="text-[20px] font-black uppercase text-[#7cff00]">Horario</div>
            <div className="mt-1 h-px bg-[#7cff00]/20" />
            <div className="mt-4 space-y-4 text-[13px]">
              <div>
                <div className="font-black text-[#7cff00]">Lunes - Viernes</div>
                <div className="text-white/60">8:00 AM - 6:00 PM</div>
              </div>
              <div>
                <div className="font-black text-[#7cff00]">Sabados</div>
                <div className="text-white/60">8:00 AM - 4:00 PM</div>
              </div>
              <div className="rounded-xl bg-[#7cff00]/10 p-3 text-center">
                <div className="text-[11px] font-black uppercase text-[#7cff00]">Abierto hoy!</div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contacto" className="border-t border-white/10 px-6 py-7">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <a href="#" className="flex items-center gap-3">
              <img src="/logo.png" className="h-[52px] w-[52px] object-contain" alt="Smilt Motors" />
              <div className="leading-[0.85]">
                <div className="text-[20px] font-black uppercase">SMILT</div>
                <div className="text-[20px] font-black uppercase">MOTORS</div>
              </div>
            </a>
            <div className="text-center text-[13px] font-black uppercase">
              Te esperamos! Tu movilidad, <span className="text-[#7cff00]">nuestra pasion</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-black uppercase text-white/50">Siguenos</span>
              <a href="https://facebook.com/Smiltmotors" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/smiltmotorcycle" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://tiktok.com/@smiltmotors" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
              </a>
              <a href="https://wa.me/18095747925" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-5 border-t border-white/5 pt-5 text-center">
            <span className="text-[13px] font-black uppercase text-white/40">Desarrollado y Disenado por <a href="https://instagram.com/osvaldojim" target="_blank" rel="noopener noreferrer" className="text-[#7cff00] hover:text-white transition">@osvaldojim</a></span>
          </div>
        </footer>

      </div>
    </main>
  );
}
