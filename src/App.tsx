import { useState } from 'react';
import { Phone, Wrench, ShieldCheck, Clock, MapPin, Hammer, CheckCircle2, Calculator, X, Star, ArrowRight, Layers, Building2 } from 'lucide-react';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-amber-500 selection:text-zinc-950 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Bar Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/95 border-b border-zinc-800">
        <div className="hidden lg:block bg-zinc-900 border-b border-zinc-800/80 py-2 px-6 text-xs text-zinc-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Frechen & Erftkreis (Köln, Hürth, Kerpen, Erftstadt)</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Mo - Fr: 07:30 - 18:00 | Sa: 08:00 - 14:00 Uhr</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                Festpreis-Garantie
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
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Hammer className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-2xl font-black uppercase text-white block leading-none tracking-tight">
                  HANDWERKERSERVICE <span className="text-amber-500">NAWRATH</span>
                </span>
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block mt-1">
                  ALLROUND-HANDWERK & RENOVIERUNG FRECHEN
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
                <span>Festpreis-Angebot</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#09090b] bg-craft-grid border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-zinc-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-xl">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Ihr Fachbetrieb in Frechen & Erftkreis seit 15 Jahren</span>
              </div>

              <h1 className="font-heading text-4.5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.02] font-black">
                IHR MEISTERHAFTER <br />
                <span className="text-amber-500 block sm:inline mt-1 sm:mt-0">
                  HANDWERKERSERVICE
                </span>
              </h1>

              <p className="text-zinc-200 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                Ob schlüsselfertige <strong className="text-white font-bold">Renovierung, Trockenbau, Bodenverlegung</strong> oder Allround-Instandhaltung – Daniel Nawrath garantiert saubere Ausführung zum verbindlichen Festpreis.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 border-l-4 border-l-amber-500">
                  <span className="text-xs font-bold text-amber-400 block mb-0.5">0% Nachforderungen</span>
                  <span className="text-sm font-bold text-white">Verbindlicher Festpreis</span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 border-l-4 border-l-amber-500">
                  <span className="text-xs font-bold text-amber-400 block mb-0.5">Saubere Baustelle</span>
                  <span className="text-sm font-bold text-white">Staubarme Renovierung</span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 border-l-4 border-l-amber-500">
                  <span className="text-xs font-bold text-amber-400 block mb-0.5">Termintreue</span>
                  <span className="text-sm font-bold text-white">Pünktliche Übergabe</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                >
                  <Calculator className="w-5 h-5 stroke-[2.5]" />
                  <span>Kostenfreies Angebot Anfragen</span>
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

              {/* Review Strip */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs text-zinc-300 font-semibold">
                  <strong className="text-white">4.9 / 5.0 Sterne</strong> aus 150+ Aufträgen in Frechen & Erftkreis
                </span>
              </div>

            </div>

            {/* Right Craftsmanship Image (AUTHENTIC CRAFTSMAN, NO CODE DEVELOPER!) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
                    alt="Handwerkerservice Nawrath Daniel Nawrath Handwerker"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/95 backdrop-blur-md border border-zinc-800 flex items-center justify-between shadow-2xl">
                    <div>
                      <span className="text-xs text-amber-400 font-extrabold uppercase tracking-wider block">
                        Daniel Nawrath
                      </span>
                      <span className="text-sm font-bold text-white">
                        Inhaber & Handwerks-Profi
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

      {/* Trust Stats Bar */}
      <section className="py-10 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-amber-500 block">15+</span>
              <span className="text-xs text-zinc-300 font-medium">Jahre Erfahrung</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-white block">450+</span>
              <span className="text-xs text-zinc-300 font-medium">Erfolgreiche Projekte</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-amber-500 block">100%</span>
              <span className="text-xs text-zinc-300 font-medium">Festpreis-Garantie</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <span className="font-heading text-3xl font-black text-white block">4.9 ★</span>
              <span className="text-xs text-zinc-300 font-medium">Kundenzufriedenheit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#09090b] text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">
              Leistungsspektrum
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6 font-black">
              Unsere Fachleistungen im Überblick
            </h2>
            <p className="text-zinc-300 text-lg font-light">
              Ob kleine Reparatur oder komplette Hausrenovierung – wir bieten fachgerechte Handwerksarbeit aus einer Hand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Trockenbau & Wandgestaltung",
                desc: "Regips-Wände, Raumaufteilung, Abhängen von Decken mit LED-Spots & professionelle Spachtelarbeiten."
              },
              {
                icon: Layers,
                title: "Bodenverlegung & Laminat",
                desc: "Fachgerechte Verlegung von Vinyl, Parkett, Klick-Laminat & Klick-Fliesen inklusive Trittschalldämmung & Sockelleisten."
              },
              {
                icon: Wrench,
                title: "Reparatur & Montageservice",
                desc: "Möbelmontage, Türen einhängen, Austausch von Armaturen, Rolladen-Reparatur & kleine Instandsetzungen."
              },
              {
                icon: Building2,
                title: "Komplett-Renovierung",
                desc: "Schlüsselfertige Sanierung von Wohnungen & Häusern. Wir koordinieren alle Gewerke für ein sorgenfreies Projekt."
              },
              {
                icon: ShieldCheck,
                title: "Objektinstandhaltung",
                desc: "Regelmäßiger Service für Vermieter & Hausverwaltungen im Raum Frechen, Erftstadt & Köln."
              },
              {
                icon: Calculator,
                title: "Verbindliches Aufmaß vor Ort",
                desc: "Persönliche Beratung vor Ort. Wir messen exakt aus und erstellen Ihnen ein transparentes Festpreis-Angebot."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="craft-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsCalculatorOpen(true)}
                    className="w-full bg-zinc-950 hover:bg-amber-500 text-zinc-200 hover:text-zinc-950 border border-zinc-800 hover:border-amber-500 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                  >
                    <span>Angebot Anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">
              Referenzen
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6 font-black">
              Ausgewählte Kundenprojekte
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Komplettrenovierung Altbau",
                location: "Frechen-Königsdorf",
                img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Moderne Trockenbau-Decke",
                location: "Köln-Lindenthal",
                img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Eichen-Vinyl Bodenverlegung",
                location: "Erftstadt-Liblar",
                img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80"
              }
            ].map((p, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-1">📍 {p.location}</span>
                    <h4 className="font-heading text-lg font-bold text-white">{p.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#09090b] text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-3">Erfahrungen</span>
            <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6 font-black">Das sagen unsere Auftraggeber</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Thomas M.",
                loc: "Frechen",
                text: "Herr Nawrath hat unsere Wohnung komplett renoviert. Pünktlich auf den Tag, sauber gearbeitet und der Festpreis wurde exakt eingehalten!"
              },
              {
                name: "Karin & Frank S.",
                loc: "Erftstadt",
                text: "Sehr freundlich, kompetent und gewissenhaft. Der Vinylboden sieht phänomenal aus. Absolute Empfehlung für den Erftkreis."
              },
              {
                name: "Sven K.",
                loc: "Köln-Lindenthal",
                text: "Trockenbau und Malerarbeiten in Rekordzeit erledigt. Kein Staub in den Nebenräumen thanks Schutzwänden. Top Handwerker!"
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
