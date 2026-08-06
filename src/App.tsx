import { useState } from 'react';
import { Phone, Wrench, ShieldCheck, Clock, MapPin, Hammer, CheckCircle2, Calculator, X } from 'lucide-react';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-amber-600 selection:text-white">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/90 border-b border-zinc-800">
        <div className="hidden lg:block bg-zinc-900 border-b border-zinc-800 py-2 px-6 text-xs text-zinc-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Frechen & Erftkreis (Köln, Hürth, Kerpen)</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Mo - Fr: 07:30 - 18:00 Uhr</span>
              </span>
            </div>
            <a href="tel:022363055272" className="font-bold text-white hover:text-amber-400">
              ☎ 02236 3055272
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 flex items-center justify-center text-zinc-950 font-black shadow-md">
                <Hammer className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-xl font-black uppercase text-white block leading-none">
                  HANDWERKERSERVICE <span className="text-amber-500">NAWRATH</span>
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mt-1">
                  ALLROUND-HANDWERK & INNENAUSBAU FRECHEN
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <a
                href="tel:022363055272"
                className="hidden sm:inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>02236 3055272</span>
              </a>

              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-600/20"
              >
                <span>Angebot Anfragen</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#09090b] bg-craft-grid border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Meisterhafter Allround-Handwerkerservice Frechen</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl uppercase tracking-tight text-white font-black leading-[1.05]">
                RENOVIERUNG & <br />
                <span className="text-amber-500">INNENAUSBAU AUS EINER HAND</span>
              </h1>

              <p className="text-zinc-300 text-lg font-light leading-relaxed max-w-xl">
                Ob Trockenbau, Reparaturen, Bodenverlegung oder Komplettrenovierung – Daniel Nawrath sorgt für saubere, pünktliche Ausführung zum fairen Festpreis im Raum Frechen & Erftkreis.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="bg-amber-600 hover:bg-amber-500 text-zinc-950 font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-amber-600/25 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Kostenfreies Angebot Anfragen</span>
                </button>

                <a
                  href="tel:022363055272"
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>02236 3055272</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl aspect-[4/5] bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
                  alt="Handwerkerservice Nawrath Frechen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-400 font-bold uppercase block">Festpreis-Garantie</span>
                    <span className="text-sm font-bold text-white">Keine versteckten Nebenkosten</span>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-amber-500" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-2">Unsere Leistungen</span>
            <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-tight text-white font-black">Allround-Service für Ihr Zuhause</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Trockenbau & Wandgestaltung', desc: 'Regips-Verkleidungen, Raumaufteilung & moderne Deckenkonstruktionen.' },
              { title: 'Bodenverlegung', desc: 'Verlegung von Laminat, Vinyl, Parkett & Klick-Fliesen in perfekter Qualität.' },
              { title: 'Reparatur & Montageservice', desc: 'Möbelmontage, Türeneinbau, kleine Sanitär- & Elektroarbeiten.' }
            ].map((s, idx) => (
              <div key={idx} className="craft-card rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Handwerkerservice Nawrath Frechen • All Rights Reserved
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setIsImpressumOpen(true)} className="hover:text-amber-400">Impressum</button>
            <button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-amber-400">Datenschutz</button>
          </div>
        </div>
      </footer>

      {/* Calculator Modal */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Angebot Anfragen</h3>
              <button onClick={() => setIsCalculatorOpen(false)} className="text-zinc-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank! Herr Nawrath meldet sich umgehend bei Ihnen.'); setIsCalculatorOpen(false); }} className="space-y-3">
              <input type="text" required placeholder="Ihr Name *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <input type="tel" required placeholder="Ihre Telefonnummer *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <textarea placeholder="Welche Handwerksarbeiten sind gewünscht?" rows={3} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white" />
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-zinc-950 font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider">Anfrage Absenden</button>
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
            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO): Handwerkerservice Nawrath. Wir erheben Daten nur zur Bearbeitung Ihrer Kontaktanfrage.</p>
          </div>
        </div>
      )}

    </div>
  );
}
