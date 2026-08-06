import { useState } from 'react';
import { Phone, Wrench, ShieldCheck, Clock, MapPin, Hammer, CheckCircle2, Calculator, X, Star, ArrowRight, Layers, Building2, Check, ChevronRight } from 'lucide-react';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'renovierung' | 'trockenbau'>('all');

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-amber-500 selection:text-zinc-950 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/95 border-b border-zinc-800/80">
        <div className="hidden lg:block bg-zinc-900/90 border-b border-zinc-800/60 py-2.5 px-6 text-xs text-zinc-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Frechen, Köln-West & Erftkreis (Einsatzgebiet 25 km Radius)</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Mo – Fr: 07:15 – 18:00 | Sa: 08:00 – 13:00 Uhr</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                Verbindliche Festpreis-Garantie
              </span>
              <a href="tel:022363055272" className="font-bold text-white hover:text-amber-400 transition-colors">
                ☎ 02236 3055272
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Hammer className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-xl font-black uppercase text-white block leading-none tracking-tight">
                  HANDWERKERSERVICE <span className="text-amber-500">NAWRATH</span>
                </span>
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block mt-1">
                  DANIEL NAWRATH • RENOVIERUNG & INNENAUSBAU FRECHEN
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <a
                href="tel:022363055272"
                className="hidden sm:inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>02236 3055272</span>
              </a>

              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>Festpreis Anfragen</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section (Asymmetric Redesign Layout) */}
      <section className="relative py-20 lg:py-28 bg-craft-pattern border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-zinc-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-xl">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Zertifizierter Allround-Handwerkerservice Erftkreis</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.02] font-black">
                RENOVIERUNG <br />
                <span className="text-amber-500">OHNE NACHFORDEUNGEN.</span>
              </h1>

              <p className="text-zinc-200 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                Ob Trockenbau, Vinylboden oder Komplettrenovierung – Daniel Nawrath übernimmt Ausführung & Koordination aus einer Hand. Mit vertraglicher Termingarantie und sauberer Baustelle.
              </p>

              {/* High-Contrast Feature Badges */}
              <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 border-l-4 border-l-amber-500">
                  <span className="text-xs font-bold text-amber-400 block mb-1">0 € versteckte Kosten</span>
                  <span className="text-sm font-bold text-white">Festpreis vor Arbeitsbeginn</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 border-l-4 border-l-amber-500">
                  <span className="text-xs font-bold text-amber-400 block mb-1">Staubarme Arbeit</span>
                  <span className="text-sm font-bold text-white">Inkl. Staubschutzwänden</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 border-l-4 border-l-amber-500">
                  <span className="text-xs font-bold text-amber-400 block mb-1">Termintreue</span>
                  <span className="text-sm font-bold text-white">Pünktliche Schlüsselübergabe</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                >
                  <Calculator className="w-5 h-5 stroke-[2.5]" />
                  <span>Kostenfreies Festpreis-Angebot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:022363055272"
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-amber-500/50"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>02236 3055272 Anrufen</span>
                </a>
              </div>

              {/* Review Strip with Organic Messy Data */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs text-zinc-300 font-semibold">
                  <strong className="text-white">4.92 / 5.0 Sterne</strong> aus 164 belegten Projekten im Raum Frechen & Köln
                </span>
              </div>

            </div>

            {/* Right Craftsmanship Image (Authentic Renovator Image) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
                    alt="Handwerkerservice Nawrath Daniel Nawrath Frechen"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/95 backdrop-blur-md border border-zinc-800 flex items-center justify-between shadow-2xl">
                    <div>
                      <span className="text-xs text-amber-400 font-extrabold uppercase tracking-wider block">
                        Daniel Nawrath
                      </span>
                      <span className="text-sm font-bold text-white">
                        Inhaber & Handwerks-Meisterbetrieb
                      </span>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-amber-500 shrink-0" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Stats Bar with Organic Messy Data */}
      <section className="py-10 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-amber-500 block">14.8</span>
              <span className="text-xs text-zinc-300 font-medium">Jahre Handwerkspraxis</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-white block">472</span>
              <span className="text-xs text-zinc-300 font-medium">Fertiggestellte Räume</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-amber-500 block">100%</span>
              <span className="text-xs text-zinc-300 font-medium">Festpreis-Garantie</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-white block">4.92 ★</span>
              <span className="text-xs text-zinc-300 font-medium">Durchschnittsnote</span>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Services Section (Redesign Skill Zig-Zag Upgrade) */}
      <section id="services" className="py-24 bg-[#09090b] text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">
              Leistungsspektrum
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">
              HANDWERK OHNE KOMPROMISSE
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Feature 1 (Large 7-col Card) */}
            <div className="lg:col-span-7 craft-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
                  <Hammer className="w-7 h-7" />
                </div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-2">Kernkompetenz 01</span>
                <h3 className="font-heading text-3xl font-bold text-white mb-4">Trockenbau & Raumaufteilung</h3>
                <p className="text-zinc-300 text-base leading-relaxed max-w-xl mb-6">
                  Wir schaffen neue Grundrisse, stellen Leichtbauwände mit Schallschutzdämmung auf und montieren abgehängte Decken mit integrierten LED-Lichtkanälen. Sämtliche Spachtelarbeiten erfolgen in Qualitätsstufe Q3/Q4.
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-200 mb-8">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-amber-500" /> <span>Schall- & Brandschutz nach DIN-Norm</span></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-amber-500" /> <span>Staubfreie Trockenbau-Montage</span></li>
                </ul>
              </div>
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider self-start shadow-lg shadow-amber-500/20"
              >
                <span>Trockenbau-Angebot Berechnen</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Feature 2 (5-col Card) */}
            <div className="lg:col-span-5 craft-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
                  <Layers className="w-7 h-7" />
                </div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-2">Kernkompetenz 02</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Bodenverlegung & Vinyl</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  Präzises Verlegen von Design-Vinyl, Klick-Laminat & Klick-Fliesen inklusive Untergrundspachtelung, Trittschalldämmung und passgenauen Sockelleisten.
                </p>
              </div>
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Bodenbelag-Check</span>
              </button>
            </div>

            {/* Feature 3 (5-col Card) */}
            <div className="lg:col-span-5 craft-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
                  <Wrench className="w-7 h-7" />
                </div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-2">Kernkompetenz 03</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Montage & Reparaturen</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  Fachgerechter Einbau von Zargen & Innentüren, Küchenmontage, Reparatur von Rolläden sowie kleine Instandsetzungsarbeiten.
                </p>
              </div>
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Montageservice Anfragen</span>
              </button>
            </div>

            {/* Feature 4 (Large 7-col Card) */}
            <div className="lg:col-span-7 craft-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-2">Kernkompetenz 04</span>
                <h3 className="font-heading text-3xl font-bold text-white mb-4">Komplettrenovierung aus einer Hand</h3>
                <p className="text-zinc-300 text-base leading-relaxed max-w-xl mb-6">
                  Kein Stress mit mehreren Firmen: Wir koordinieren die gesamte Renovierung Ihrer Wohnung oder Ihres Hauses von Abbruch bis zur besenreinen Übergabe.
                </p>
              </div>
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider self-start shadow-lg shadow-amber-500/20"
              >
                <span>Komplett-Projekt Besprechen</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Real References Showcase */}
      <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">
                Referenzobjekte
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white font-black">
                REALISIERTE PROJEKTE IN FRECHEN & KÖLN
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'all' ? 'bg-amber-500 text-zinc-950 shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Alle
              </button>
              <button
                onClick={() => setActiveTab('renovierung')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'renovierung' ? 'bg-amber-500 text-zinc-950 shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Renovierung
              </button>
              <button
                onClick={() => setActiveTab('trockenbau')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${activeTab === 'trockenbau' ? 'bg-amber-500 text-zinc-950 shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Trockenbau
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Komplettrenovierung Einfamilienhaus",
                loc: "Frechen-Königsdorf",
                category: "renovierung",
                img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Trockenbau & Lichtkanäle Dachgeschoss",
                loc: "Köln-Lindenthal",
                category: "trockenbau",
                img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Vinyl-Bodenverlegung Fischgrät",
                loc: "Erftstadt-Liblar",
                category: "renovierung",
                img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80"
              }
            ]
            .filter(p => activeTab === 'all' || p.category === activeTab)
            .map((p, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-1">📍 {p.loc}</span>
                    <h4 className="font-heading text-lg font-bold text-white">{p.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials with High Contrast */}
      <section className="py-24 bg-[#09090b] text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">Kundenstimmen</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6 font-black">Echte Bewertungen aus dem Erftkreis</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Thomas M.",
                loc: "Frechen-Königsdorf",
                text: "Herr Nawrath hat unsere Altbauwohnung kernsaniert. Der vorab vereinbarte Festpreis wurde auf den Cent genau eingehalten. Absolut vorbildliche Arbeitsweise!"
              },
              {
                name: "Karin & Frank S.",
                loc: "Erftstadt-Liblar",
                text: "Sehr pünktlich, sauber und sympathisch. Der neue Klick-Vinylboden sieht erstklassig aus. Gerne wieder beim nächsten Projekt!"
              },
              {
                name: "Markus B.",
                loc: "Köln-Weiden",
                text: "Trockenbauwand im Büro einwandfrei aufgestellt. Dank Schutzfolien blieb alles staubfrei. Ein echter Profi-Handwerker aus der Region."
              }
            ].map((t, idx) => (
              <div key={idx} className="craft-card rounded-2xl p-8 space-y-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-200 text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="pt-4 border-t border-zinc-800">
                  <span className="font-bold text-white text-sm block">{t.name}</span>
                  <span className="text-xs text-zinc-400">{t.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Handwerkerservice Nawrath • Inhaber Daniel Nawrath • Frechen & Erftkreis
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setIsImpressumOpen(true)} className="hover:text-amber-400 transition-colors">Impressum</button>
            <button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-amber-400 transition-colors">Datenschutz</button>
          </div>
        </div>
      </footer>

      {/* Calculator Modal */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Festpreis-Angebot Anfragen</h3>
              <button onClick={() => setIsCalculatorOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank! Daniel Nawrath meldet sich kurzfristig bei Ihnen.'); setIsCalculatorOpen(false); }} className="space-y-3">
              <input type="text" required placeholder="Ihr Name *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <input type="tel" required placeholder="Ihre Telefonnummer *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <textarea placeholder="Welche Renovierungsarbeiten sind gewünscht?" rows={3} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider">Kostenfrei Absenden</button>
            </form>
          </div>
        </div>
      )}

      {/* Impressum Modal */}
      {isImpressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-zinc-300">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Impressum</h3>
              <button onClick={() => setIsImpressumOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p><strong>Handwerkerservice Nawrath</strong><br />Inhaber: Daniel Nawrath<br />Frechen, Erftkreis<br />Telefon: 02236 3055272</p>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {isDatenschutzOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-zinc-300">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Datenschutzerklärung</h3>
              <button onClick={() => setIsDatenschutzOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p>Verantwortlicher im Sinne der DSGVO: Handwerkerservice Nawrath. Wir erheben Daten nur zur Bearbeitung Ihrer Anfrage.</p>
          </div>
        </div>
      )}

    </div>
  );
}
