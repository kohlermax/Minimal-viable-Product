import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  Clock,
  Target,
  Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/input_file_0.png" alt="Startup Makler Logo" className="h-10 md:h-12 object-contain" referrerPolicy="no-referrer" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-[#1a6b8e] transition-colors">Leistungen</a>
          <a href="#process" className="text-sm font-medium text-slate-600 hover:text-[#1a6b8e] transition-colors">Ablauf</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-[#1a6b8e] transition-colors">Über mich</a>
          <a href="#booking" className="bg-[#1a6b8e] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#145571] transition-all shadow-lg shadow-blue-900/10">
            Termin buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4 border-t border-slate-100"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Leistungen</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Ablauf</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Über mich</a>
            <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#1a6b8e] text-white px-6 py-3 rounded-xl text-center font-semibold">
              Termin buchen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5 pointer-events-none">
        <img src="/input_file_1.png" alt="Pattern" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1a6b8e] text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin size={14} /> Regensburgs Partner für Gründer
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Absicherung für <span className="text-[#1a6b8e]">Macher</span> & Visionäre.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Wir verstehen die Dynamik von Startups und KMU. Als spezialisierter Versicherungsmakler in Regensburg schützen wir das, was du aufgebaut hast – damit du dich voll auf dein Wachstum konzentrieren kannst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="bg-[#1a6b8e] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#145571] transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 group">
              Kostenloser Check-Up <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="bg-white border-2 border-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-[#1a6b8e] hover:text-[#1a6b8e] transition-all flex items-center justify-center">
              Unsere Leistungen
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-500" /> 100% Unabhängig
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-500" /> Startup-DNA
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-500" /> Digital & Persönlich
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a6b8e]/40 to-transparent" />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1a6b8e]">
                <Zap size={20} />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</div>
            </div>
            <div className="text-lg font-bold text-slate-900 leading-tight">Optimale Absicherung für dein Team</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Startups",
      description: "Von der Gründung bis zum Exit. Wir sichern deine Haftung (D&O), dein Equipment und deine Mitarbeiter ab.",
      icon: <Rocket className="w-8 h-8" />,
      features: ["D&O Versicherung", "Cyber-Schutz", "Inhaltsversicherung"]
    },
    {
      title: "KMU & Mittelstand",
      description: "Etablierte Strukturen brauchen soliden Schutz. Wir optimieren bestehende Verträge und schließen Lücken.",
      icon: <Target className="w-8 h-8" />,
      features: ["Betriebshaftpflicht", "Rechtsschutz", "Flottenversicherung"]
    },
    {
      title: "Unternehmer",
      description: "Deine persönliche Absicherung als Kopf des Ganzen. Krankenvollversicherung und Vorsorge auf höchstem Niveau.",
      icon: <Users className="w-8 h-8" />,
      features: ["PKV Beratung", "Berufsunfähigkeit", "Keyman-Absicherung"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#1a6b8e] uppercase tracking-[0.2em] mb-4">Unsere Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Maßgeschneiderte Lösungen für jede Phase</h3>
          <p className="text-lg text-slate-600">
            Wir sind kein klassischer "Versicherungs-Onkel". Wir sind Sparringspartner für moderne Unternehmen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1a6b8e] flex items-center justify-center mb-8">
                {s.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {s.description}
              </p>
              <ul className="space-y-3">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-[#1a6b8e]" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "20 Min. Erstgespräch",
      desc: "Wir analysieren kurz und knackig deinen aktuellen Status Quo und identifizieren Potenziale.",
      icon: <Clock size={24} />
    },
    {
      title: "Schriftliche Analyse",
      desc: "Du erhältst eine detaillierte Zusammenfassung deiner aktuellen Situation schwarz auf weiß.",
      icon: <FileText size={24} />
    },
    {
      title: "Dein individueller Guide",
      desc: "Wir liefern dir einen klaren Fahrplan für die nächsten Schritte zur optimalen Absicherung.",
      icon: <Target size={24} />
    }
  ];

  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-[#1a6b8e] uppercase tracking-[0.2em] mb-4">Der Ablauf</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">In 3 Schritten zur Sicherheit</h3>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a6b8e] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield size={200} />
            </div>
            <h4 className="text-3xl font-bold mb-6 relative z-10">Warum wir?</h4>
            <p className="text-slate-400 mb-10 text-lg relative z-10">
              Wir kombinieren die Expertise eines klassischen Maklers mit der Geschwindigkeit und dem Mindset eines Startups. In Regensburg verwurzelt, digital vernetzt.
            </p>
            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div>
                <div className="text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Unabhängig</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Digitaler Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">Regio</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Fokus Regensburg</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">Expert</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">Startup Fokus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingTool = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = [
    { day: 'Mo', date: '16. Mär' },
    { day: 'Di', date: '17. Mär' },
    { day: 'Mi', date: '18. Mär' },
    { day: 'Do', date: '19. Mär' },
    { day: 'Fr', date: '20. Mär' },
  ];

  const times = ['09:00', '10:30', '13:00', '14:30', '16:00'];

  return (
    <section id="booking" className="py-24 bg-[#1a6b8e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-slate-900 p-12 text-white flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Termin vereinbaren
              </div>
              <h3 className="text-4xl font-bold mb-6 leading-tight">Lass uns über deine Sicherheit sprechen.</h3>
              <p className="text-slate-400 text-lg mb-8">
                In 20 Minuten finden wir heraus, ob du optimal aufgestellt bist. Kostenlos & unverbindlich.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Clock size={20} /></div>
                  <span>20 Minuten Erstgespräch</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><MessageSquare size={20} /></div>
                  <span>Persönlich oder Video-Call</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><FileText size={20} /></div>
                  <span>Inkl. schriftlichem Guide</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=makler" alt="Makler" className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500" />
              <div>
                <div className="font-bold text-lg">Dein Experte</div>
                <div className="text-slate-400 text-sm">Spezialist für Startup-Versicherungen</div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 bg-white">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h4 className="text-2xl font-bold text-slate-900 mb-8">Wähle einen passenden Tag</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
                    {dates.map((d, i) => (
                      <button 
                        key={i}
                        onClick={() => setSelectedDate(d.date)}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${selectedDate === d.date ? 'border-[#1a6b8e] bg-blue-50 text-[#1a6b8e]' : 'border-slate-100 hover:border-blue-200 text-slate-600'}`}
                      >
                        <span className="text-xs font-bold uppercase opacity-60">{d.day}</span>
                        <span className="text-lg font-bold">{d.date}</span>
                      </button>
                    ))}
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 mb-8">Wähle eine Uhrzeit</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                    {times.map((t, i) => (
                      <button 
                        key={i}
                        onClick={() => setSelectedTime(t)}
                        className={`p-4 rounded-2xl border-2 transition-all font-bold ${selectedTime === t ? 'border-[#1a6b8e] bg-blue-50 text-[#1a6b8e]' : 'border-slate-100 hover:border-blue-200 text-slate-600'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <button 
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(2)}
                    className="w-full bg-[#1a6b8e] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#145571] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-900/10"
                  >
                    Weiter zum letzten Schritt
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button onClick={() => setStep(1)} className="text-[#1a6b8e] font-bold flex items-center gap-2 mb-8 hover:underline">
                    Zurück zur Auswahl
                  </button>
                  <h4 className="text-2xl font-bold text-slate-900 mb-8">Deine Kontaktdaten</h4>
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Vorname</label>
                        <input required type="text" className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-[#1a6b8e] outline-none transition-all" placeholder="Max" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Nachname</label>
                        <input required type="text" className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-[#1a6b8e] outline-none transition-all" placeholder="Mustermann" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">E-Mail Adresse</label>
                      <input required type="email" className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-[#1a6b8e] outline-none transition-all" placeholder="max@startup.de" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Unternehmen</label>
                      <input required type="text" className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-[#1a6b8e] outline-none transition-all" placeholder="Startup GmbH" />
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-xl text-sm text-[#1a6b8e] font-medium flex gap-3">
                      <Calendar size={18} className="flex-shrink-0" />
                      Dein Termin am {selectedDate} um {selectedTime} Uhr.
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#1a6b8e] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#145571] transition-all shadow-xl shadow-blue-900/10"
                    >
                      Termin jetzt bestätigen
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">Termin bestätigt!</h4>
                  <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                    Vielen Dank! Wir haben dir eine Bestätigung und den Einladungslink per E-Mail gesendet. Wir freuen uns auf das Gespräch!
                  </p>
                  <button 
                    onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); }}
                    className="text-[#1a6b8e] font-bold hover:underline"
                  >
                    Anderen Termin buchen
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <img src="/input_file_0.png" alt="Logo" className="h-12 mb-8 brightness-0 invert" referrerPolicy="no-referrer" />
            <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
              Dein spezialisierter Versicherungsmakler für Startups, KMU und Unternehmer in Regensburg. Digital, unabhängig und auf Augenhöhe.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6">Navigation</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Ablauf</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Über mich</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Termin buchen</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6">Rechtliches</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Erstinformation</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-slate-500 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Startup Makler Regensburg. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1a6b8e] text-white p-8 rounded-3xl shadow-xl">
              <div className="text-3xl font-bold mb-1">10+ Jahre</div>
              <div className="text-sm opacity-80 uppercase tracking-widest">Erfahrung</div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-[#1a6b8e] uppercase tracking-[0.2em] mb-4">Über mich</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Persönlich. Kompetent. Regensburg.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Ich bin selbst Unternehmer und weiß, wie viel Herzblut in einem eigenen Business steckt. Versicherungen sind oft ein lästiges Thema – aber sie sind das Sicherheitsnetz, das dich vor dem freien Fall bewahrt.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mein Ziel ist es, dieses Thema für dich so einfach und effizient wie möglich zu gestalten. Keine komplizierten Klauseln, sondern klare Kommunikation und echter Schutz für deine Vision.
            </p>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#1a6b8e]">
                <MapPin size={24} />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg">Standort Regensburg</div>
                <div className="text-slate-500">Vor Ort für dich da oder komplett digital.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#1a6b8e]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <BookingTool />
      </main>
      <Footer />
    </div>
  );
}
