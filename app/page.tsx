"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Motos", href: "#modelos" },
  { label: "Electricas", href: "#electricas" },
  { label: "Financiamiento", href: "#financiamiento" },
  { label: "Accesorios", href: "#accesorios" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Contacto", href: "#contacto" },
];

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
  { ciudad: "Jarabacoa", tel: "809-574-7925", href: "tel:8095747925", region: "La Vega" },
  { ciudad: "Constanza", tel: "809-539-1471", href: "tel:8095391471", region: "La Vega" },
  { ciudad: "San Francisco de Macoris", tel: "809-294-3030", href: "tel:8092943030", region: "Duarte" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      const progress = Math.min(window.scrollY / heroHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textOpacity = Math.max(0, 1 - scrollProgress * 2.5);
  const leftX = -scrollProgress * 120;
  const rightX = scrollProgress * 120;
  const overlayOpacity = Math.max(0, 1 - scrollProgress * 1.4);
  const img2Opacity = Math.min(1, scrollProgress * 1.8);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1220px] bg-black">

        <nav className="sticky top-0 z-50 flex h-[80px] items-center justify-between border-b border-white/10 bg-black/95 px-6 backdrop-blur-md lg:px-8">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo("#inicio"); }} className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Smilt Motors" className="h-[58px] w-[58px] object-contain" style={{ filter: "drop-shadow(0 0 14px rgba(124,255,0,0.5))" }} />
            <div className="leading-[0.85]">
              <div className="text-[26px] font-black uppercase tracking-tight text-white">SMILT</div>
              <div className="text-[26px] font-black uppercase tracking-tight text-white">MOTORS</div>
            </div>
          </a>
          <div className="hidden items-center gap-6 text-[11px] font-black uppercase tracking-widest lg:flex">
            {NAV_LINKS.map((link, i) => (
              <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className={"cursor-pointer transition hover:text-[#7cff00] " + (i === 0 ? "text-[#7cff00]" : "text-white/80")}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/18095747925" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-[#7cff00] px-5 py-2.5 text-[13px] font-black text-black transition hover:scale-105 hover:bg-[#90ff20]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
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
              <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className={"block py-3 text-[13px] font-black uppercase tracking-widest border-b border-white/5 cursor-pointer " + (i === 0 ? "text-[#7cff00]" : "text-white/70")}>
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/18095747925" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 rounded-xl bg-[#7cff00] px-5 py-3 text-[13px] font-black text-black">
              WhatsApp — 809-574-7925
            </a>
          </div>
        )}

        {/* HERO CON EFECTO REVEAL */}
        <section id="inicio" className="relative h-[100vh] overflow-hidden" style={{ minHeight: "580px" }}>
          <img src="/smilt/garage.jpg" alt="Smilt Motors" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "center 40%" }} />
          <img src="/smilt/garage2.jpg" alt="Smilt Motors Reveal" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "center 40%", opacity: img2Opacity }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.3) 100%)", opacity: overlayOpacity }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)", opacity: overlayOpacity }} />

          <div className="relative z-10 flex h-full items-center px-8 lg:px-12">
            <div className="max-w-[580px]" style={{ opacity: textOpacity }}>
              <div style={{ transform: `translateX(${leftX}px)`, transition: "none" }}>
                <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#7cff00]">Distribuidor oficial</p>
              </div>
              <div style={{ transform: `translateX(${leftX * 1.2}px)`, transition: "none" }}>
                <div className="text-[58px] font-black uppercase italic leading-[0.88] tracking-[-0.04em] sm:text-[76px]">Motos?</div>
              </div>
              <div style={{ transform: `translateX(${rightX * 1.1}px)`, transition: "none" }}>
                <div className="text-[58px] font-black uppercase italic leading-[0.88] tracking-[-0.04em] sm:text-[76px] text-[#7cff00]">Smilt Motors</div>
              </div>
              <div style={{ transform: `translateX(${leftX * 0.9}px)`, transition: "none" }}>
                <div className="text-[58px] font-black uppercase italic leading-[0.88] tracking-[-0.04em] sm:text-[76px]">es la respuesta.</div>
              </div>
              <div style={{ transform: `translateX(${rightX * 0.8}px)`, transition: "none" }} className="mt-5">
                <p className="text-[14px] font-black uppercase leading-snug text-white/90">Las mejores marcas, precios<br />y financiamiento a tu alcance.</p>
              </div>
              <div style={{ transform: `translateX(${leftX * 0.7}px)`, transition: "none" }} className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => scrollTo("#modelos")} className="rounded-xl bg-[#7cff00] px-8 py-3.5 text-[14px] font-black text-black transition hover:scale-105 hover:bg-[#90ff20]">VER MODELOS</button>
                <button onClick={() => scrollTo("#financiamiento")} className="rounded-xl border border-white/30 bg-black/40 px-8 py-3.5 text-[14px] font-black backdrop-blur-sm transition hover:bg-white/10">FINANCIAR AHORA</button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ opacity: textOpacity }}>
            <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/40">scroll</span>
            <div className="h-10 w-px bg-white/15 relative overflow-hidden">
              <div className="absolute top-0 w-px h-full bg-[#7cff00]/60" style={{ animation: "scrolldown 2s ease-in-out infinite" }} />
            </div>
          </div>
          <style>{`@keyframes scrolldown { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }`}</style>
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
                <button onClick={() => scrollTo("#sucursales")} className="w-full rounded-xl border border-white/20 py-3 text-[12px] font-black uppercase transition hover:bg-[#7cff00] hover:text-black hover:border-[#7cff00]">{card.button}</button>
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
            <button key={item.img} onClick={() => scrollTo("#sucursales")} className="group relative overflow-hidden rounded-2xl text-left">
              <img src={item.img} alt={item.label} className="h-[270px] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[16px] font-black uppercase text-[#7cff00]">{item.label}</div>
                <div className="text-[13px] text-white/70">{item.detail}</div>
              </div>
            </button>
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
              <button onClick={() => scrollTo("#sucursales")} className="mt-4 w-full rounded-xl bg-[#7cff00] py-3 text-[12px] font-black uppercase text-black transition hover:bg-[#90ff20]">SOLICITAR INFORMACION</button>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[#7cff00]/20">
                <div className="relative">
                  <img src="/smilt/llevatelo-fiao.jpg" alt="Llevatelo Fiao" className="h-[420px] w-full object-cover" style={{ objectPosition: "center 20%" }} />
                </div>
                <div className="bg-black/60 p-4 text-center">
                  <a href="https://wa.me/18095747925?text=Hola%2C%20me%20interesa%20llevarme%20la%20HK1%20Striker%20fiada." target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-[13px] font-black uppercase text-white transition hover:bg-[#20bd5a]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    LLEVATELO FIAO — WhatsApp
                  </a>
                </div>
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
              <button key={item.text} onClick={() => scrollTo("#sucursales")} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 text-center transition hover:border-[#7cff00]/50 hover:bg-[#7cff00]/5">
                <span className="text-[12px] font-black uppercase leading-snug">{item.text}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="sucursales" className="px-4 pt-8 pb-4 sm:px-6">
          <div className="mb-6 text-center">
            <div className="text-[22px] font-black italic uppercase text-[#7cff00]">Visitanos en</div>
            <div className="text-[48px] font-black italic uppercase leading-none">Nuestro Showroom</div>
          </div>
          <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#0a0a0a]">
            <img src="/smilt/showroom.jpg" alt="Showroom Smilt Motors" className="h-auto w-full" style={{ maxHeight: "420px", objectFit: "contain" }} />
            <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 backdrop-blur-sm">
              <div className="text-[11px] font-black uppercase tracking-widest text-[#7cff00]">Smilt Motors</div>
              <div className="text-[16px] font-black uppercase text-white">Tu concesionario de confianza</div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {SUCURSALES.map((s) => (
              <div key={s.ciudad} className="rounded-2xl border border-white/10 bg-[#090909] p-6 transition hover:border-[#7cff00]/30">
                <div className="mb-1 text-[11px] font-black uppercase tracking-widest text-[#7cff00]">{s.region}</div>
                <div className="mb-3 text-[24px] font-black uppercase leading-tight text-white">{s.ciudad}</div>
                <a href={s.href} className="flex items-center gap-2 text-[15px] font-black text-white/70 transition hover:text-[#7cff00]">
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {s.tel}
                </a>
                <a href={"https://wa.me/1" + s.href.replace("tel:", "")} target="_blank" rel="noopener noreferrer" className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7cff00] py-2.5 text-[12px] font-black uppercase text-black transition hover:bg-[#90ff20]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#7cff00]/20 bg-[#090909] p-6">
              <div className="text-[18px] font-black uppercase text-[#7cff00]">Horario</div>
              <div className="mt-3 space-y-2 text-[14px]">
                <div className="flex justify-between"><span className="font-black text-[#7cff00]">Lunes - Viernes</span><span className="text-white/60">8:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span className="font-black text-[#7cff00]">Sabados</span><span className="text-white/60">8:00 AM - 4:00 PM</span></div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-[#7cff00]/20 bg-[#090909] p-6">
              <div className="text-center">
                <div className="text-[13px] font-black uppercase text-white/50">Siguenos en redes</div>
                <div className="mt-3 flex justify-center gap-3">
                  <a href="https://www.instagram.com/smiltmotorcycle/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  </a>
                  <a href="https://facebook.com/Smiltmotors" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://tiktok.com/@smiltmotors" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                  </a>
                  <a href="https://wa.me/18095747925" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contacto" className="mt-8 border-t border-white/10 px-6 py-7">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo("#inicio"); }} className="flex items-center gap-3">
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
              <a href="https://www.instagram.com/smiltmotorcycle/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://facebook.com/Smiltmotors" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#7cff00] hover:text-[#7cff00]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
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
            <span className="text-[13px] font-black uppercase text-white/40">2025 Smilt Motors - Desarrollado por: <a href="https://www.instagram.com/osvaldojim/" target="_blank" rel="noopener noreferrer" className="text-[#7cff00] hover:text-white transition">@osvaldojim</a></span>
          </div>
        </footer>

      </div>
    </main>
  );
}
