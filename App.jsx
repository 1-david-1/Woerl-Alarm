import React, { useState } from 'react'
import { Shield, Lock, Flame, Users, Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objectType: '',
    systems: [],
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSystemChange = (system) => {
    setFormData(prev => ({
      ...prev,
      systems: prev.systems.includes(system)
        ? prev.systems.filter(s => s !== system)
        : [...prev.systems, system]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns schnellstmöglich bei Ihnen melden.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      objectType: '',
      systems: [],
      message: ''
    })
  }

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Woerl-Alarm</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { id: 'home', label: 'Startseite' },
                { id: 'einbruch', label: 'Einbruchmeldeanlagen' },
                { id: 'brand', label: 'Brandmeldeanlagen' },
                { id: 'zutritt', label: 'Zutrittskontrolle' },
                { id: 'kalkulation', label: 'Preiskalkulation' },
                { id: 'kontakt', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`nav-link px-3 py-2 text-sm font-medium ${
                    activeSection === item.id ? 'text-blue-600 active' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

  const HeroSection = () => (
    <section className="hero-section text-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Schützen Sie sich und Ihr Eigentum vor ungebetenen Gästen!
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 slide-up">
            Professionelle Sicherheitstechnik für Ihr Zuhause und Ihr Unternehmen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('kalkulation')}
              className="btn-security"
            >
              Kostenlose Beratung anfragen
            </button>
            <button 
              onClick={() => setActiveSection('kontakt')}
              className="btn-security-outline"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </section>
  )

  const ServiceCard = ({ icon: Icon, title, description, features }) => (
    <div className="security-card p-6">
      <div className="security-icon">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  const HomeSection = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="feature-highlight">Sicherheitslösungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Beratung bis zur Installation - wir bieten Ihnen maßgeschneiderte Sicherheitstechnik 
            für jeden Bedarf und jedes Budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={Shield}
            title="Einbruchmeldeanlagen"
            description="Zuverlässiger Schutz vor Einbrechern mit modernster Technologie"
            features={[
              "Verkabelte und Funk-Systeme",
              "Innenraum- und Außenhautüberwachung",
              "Überfallmeldeanlagen mit Notruf",
              "Kombinierte Lösungen möglich"
            ]}
          />
          <ServiceCard
            icon={Flame}
            title="Brandmeldeanlagen"
            description="Frühzeitige Erkennung von Bränden rettet Leben und Eigentum"
            features={[
              "Rauchmelder und Hitzesensoren",
              "Automatische Alarmweiterleitung",
              "24/7 Überwachung möglich",
              "Kombinierbar mit Einbruchschutz"
            ]}
          />
          <ServiceCard
            icon={Lock}
            title="Zutrittskontrolle"
            description="Kontrollieren Sie, wer wann Zugang zu Ihren Räumlichkeiten hat"
            features={[
              "Code-, Karten- und Schlüsselanhänger-Systeme",
              "Zeit- und datumsgesteuerte Zugänge",
              "Vollständige Zugangsprotokollierung",
              "Sofortige Entwertung verlorener Karten"
            ]}
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Digitale Alarmübermittlung
          </h3>
          <p className="text-gray-600 mb-6">
            Modernste Technologie für maximale Sicherheit: Alarmübermittlung direkt auf Ihr Handy 
            oder an eine Wachzentrale. Bei ISDN-Ausfall automatisch über GSM-Backup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="trust-badge">24/7 Überwachung</span>
            <span className="trust-badge">GSM-Backup</span>
            <span className="trust-badge">Mobile Benachrichtigung</span>
            <span className="trust-badge">Wachzentralen-Anbindung</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {activeSection === 'home' && (
        <>
          <HeroSection />
          <HomeSection />
        </>
      )}
      
      {activeSection === 'einbruch' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Einbruchmeldeanlagen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="security-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Verkabelte Einbruchmeldungen</h3>
                <p className="text-gray-600 mb-4">
                  Zuverlässige und störungsfreie Übertragung durch Kabelverbindungen. 
                  Ideal für Neubauten oder umfassende Renovierungen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Höchste Zuverlässigkeit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Keine Funkstörungen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Langfristig wartungsarm</span>
                  </li>
                </ul>
              </div>
              
              <div className="security-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Funk-Einbruchmeldungen</h3>
                <p className="text-gray-600 mb-4">
                  Flexible Installation ohne aufwendige Verkabelung. 
                  Perfekt für bestehende Gebäude und schnelle Nachrüstung.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Schnelle Installation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Flexible Erweiterung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Keine Bauarbeiten nötig</span>
                  </li>
                </ul>
              </div>
              
              <div className="security-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Kombinierte Systeme</h3>
                <p className="text-gray-600 mb-4">
                  Das Beste aus beiden Welten: Verkabelte Grundausstattung 
                  mit flexiblen Funk-Erweiterungen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Maximale Flexibilität</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Optimale Kosteneffizienz</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Zukunftssicher</span>
                  </li>
                </ul>
              </div>
              
              <div className="security-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Überfallmeldeanlagen</h3>
                <p className="text-gray-600 mb-4">
                  Diskreter Notruf in Gefahrensituationen. 
                  Auch als Krankenruf für ältere Menschen geeignet.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Stiller Alarm</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Krankenruf-Funktion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Direkte Hilfe-Weiterleitung</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                <strong>Innenraum- oder Außenhautüberwachung</strong> - auch kombiniert möglich!<br />
                Und alles, was Sie sich wünschen oder vorstellen können, wir beraten Sie gerne!
              </p>
              <button 
                onClick={() => setActiveSection('kalkulation')}
                className="btn-security"
              >
                Jetzt Beratung anfragen
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'brand' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Brandmeldeanlagen
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Wer möchte schon gerne von einem Schwelbrand überrascht werden?
              </h3>
              <div className="space-y-3 text-red-700">
                <p className="flex items-start">
                  <Flame className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  Sie schlafen und ein Familienmitglied hat vergessen den Herd auszuschalten...
                </p>
                <p className="flex items-start">
                  <Flame className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  Der Adventskranz wird für 2 Minuten unbeobachtet gelassen, da der Besuch vor der Haustür steht...
                </p>
                <p className="flex items-start">
                  <Flame className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  Der Grill wird nach dem Anzünden nicht beaufsichtigt, der Wind frischt auf...
                </p>
              </div>
              <p className="text-red-800 font-semibold mt-4">
                Kommt bei mir nicht vor, denken Sie, aber wenn doch?
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="security-card p-8">
                <div className="security-icon bg-red-500">
                  <Flame className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Rauchmelder-Systeme</h3>
                <p className="text-gray-600 mb-4">
                  Frühzeitige Erkennung von Rauchentwicklung, bevor ein Brand sich ausbreiten kann.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Optische und ionisierende Rauchmelder</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Vernetzung aller Melder</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Automatische Alarmweiterleitung</span>
                  </li>
                </ul>
              </div>
              
              <div className="security-card p-8">
                <div className="security-icon bg-orange-500">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Hitzemelder</h3>
                <p className="text-gray-600 mb-4">
                  Ideal für Küchen, Garagen und andere Bereiche, wo Rauchmelder Fehlalarme auslösen könnten.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Temperaturanstieg-Erkennung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Keine Fehlalarme durch Dampf</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Robuste Bauweise</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kombinierte Einbruch- und Brandmeldeanlagen
              </h3>
              <p className="text-gray-600 mb-6">
                Auch kombinierte Einbruch- und Brandmeldeanlagen sind möglich - fragen Sie uns!
                Ein System für maximalen Schutz und optimale Kosteneffizienz.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="trust-badge">Ein System - doppelter Schutz</span>
                <span className="trust-badge">Kostenoptimiert</span>
                <span className="trust-badge">Zentrale Verwaltung</span>
              </div>
              <button 
                onClick={() => setActiveSection('kalkulation')}
                className="btn-security"
              >
                Kombinierte Lösung anfragen
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'zutritt' && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Zutrittskontrollanlagen
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="security-card p-6">
                <div className="security-icon bg-purple-500">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Code-Systeme</h3>
                <p className="text-gray-600 mb-4">
                  Eintritt in Ihre Firma nur noch mit individuellem Code.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Individuelle PIN-Codes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Sofortige Code-Änderung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Vollständige Protokollierung</span>
                  </li>
                </ul>
              </div>
              
              <div className="security-card p-6">
                <div className="security-icon bg-green-500">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Karten-Systeme</h3>
                <p className="text-gray-600 mb-4">
                  Moderne Chipkarten oder RFID-Karten für bequemen Zugang.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Kontaktlose Bedienung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Sofortige Entwertung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Personalisierbar</span>
                  </li>
                </ul>
              </div>
              
              <div className="security-card p-6">
                <div className="security-icon bg-blue-500">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Schlüsselanhänger</h3>
                <p className="text-gray-600 mb-4">
                  Kompakte Transponder für den Schlüsselbund.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Kompakt und robust</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Lange Lebensdauer</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wasserdicht</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="security-card p-8">
                <div className="security-icon bg-yellow-500">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Zeitgesteuerte Zugänge</h3>
                <p className="text-gray-600 mb-4">
                  Definieren Sie genau, wann welche Person Zugang haben soll.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Uhrzeitbasierte Freigaben (z.B. 08:00 bis 16:30 Uhr)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wochentagssteuerung (z.B. Montag bis Freitag)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Feiertagskalender</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Individuelle Zeitprofile</span>
                  </li>
                </ul>
              </div>
              
              <div className="security-card p-8">
                <div className="security-icon bg-red-500">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Sicherheitsfeatures</h3>
                <p className="text-gray-600 mb-4">
                  Umfassende Kontrolle und Protokollierung aller Zugangsversuche.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Kontrolle versuchter Zugriffe mit entwerteten Karten</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Vollständige Speicherung aller Ereignisse</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Alarm bei unbefugten Zugangsversuchen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Detaillierte Auswertungen und Berichte</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Verlorene Karten/Schlüsselanhänger?
              </h3>
              <p className="text-gray-600 mb-6">
                Kein Problem! Verlorene Karten/Schlüsselanhänger können sofort durch Sie 'entwertet' werden. 
                Keiner kommt mehr unbemerkt in Ihre Firma oder Ihr Haus.
              </p>
              <button 
                onClick={() => setActiveSection('kalkulation')}
                className="btn-security"
              >
                Zutrittskontrolle planen
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'kalkulation' && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Preiskalkulation anfragen
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Füllen Sie das folgende Formular aus und wir erstellen Ihnen ein individuelles, 
              kostenloses Angebot für Ihre Sicherheitslösung.
            </p>
            
            <form onSubmit={handleSubmit} className="security-card p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Objekttyp *
                  </label>
                  <select
                    name="objectType"
                    value={formData.objectType}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="privat">Privates Wohnhaus</option>
                    <option value="wohnung">Wohnung</option>
                    <option value="gewerbe">Gewerbeobjekt</option>
                    <option value="industrie">Industrieanlage</option>
                    <option value="buero">Bürogebäude</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Gewünschte Systeme (Mehrfachauswahl möglich)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Verkabelte Einbruchmeldeanlage',
                    'Funk-Einbruchmeldeanlage',
                    'Kombinierte Einbruchmeldeanlage',
                    'Überfallmeldeanlage',
                    'Brandmeldeanlage',
                    'Zutrittskontrollanlage',
                    'Kombinierte Einbruch-/Brandmeldeanlage',
                    'Beratung zu allen Systemen'
                  ].map((system) => (
                    <label key={system} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.systems.includes(system)}
                        onChange={() => handleSystemChange(system)}
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{system}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Besondere Anforderungen oder Fragen
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input"
                  placeholder="Beschreiben Sie Ihre spezifischen Anforderungen, Fragen oder Wünsche..."
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">Datenschutzhinweis</h4>
                <p className="text-sm text-blue-800">
                  Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. 
                  Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                </p>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-security">
                  Kostenlose Beratung anfragen
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  * Pflichtfelder - Wir melden uns innerhalb von 24 Stunden bei Ihnen
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {activeSection === 'kontakt' && (
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Kontakt
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Woerl-Alarm Sicherheitstechnik
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600">
                        +49 (0) 123 456789<br />
                        <span className="text-sm">Mo-Fr: 8:00-18:00 Uhr</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">E-Mail</h4>
                      <p className="text-gray-600">
                        info@woerl-alarm.de<br />
                        <span className="text-sm">Antwort innerhalb von 24h</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Öffnungszeiten</h4>
                      <p className="text-gray-600">
                        Montag - Freitag: 8:00 - 18:00 Uhr<br />
                        Samstag: 9:00 - 14:00 Uhr<br />
                        Sonntag: Geschlossen<br />
                        <span className="text-sm text-red-600">24h Notdienst verfügbar</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">24h Notdienst</h4>
                  <p className="text-yellow-700">
                    Bei Störungen oder Notfällen erreichen Sie uns rund um die Uhr unter:<br />
                    <strong>+49 (0) 123 456789</strong>
                  </p>
                </div>
              </div>
              
              <div className="security-card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Schnelle Nachricht senden
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Ihr Name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="form-input"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>
                  
                  <button type="submit" className="btn-security w-full">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Geschäftsbedingungen & Datenschutz
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="security-card p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Allgemeine Geschäftsbedingungen</h4>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Kostenlose Beratung und Angebotserstellung</li>
                    <li>• Professionelle Installation durch zertifizierte Techniker</li>
                    <li>• 2 Jahre Garantie auf alle Installationen</li>
                    <li>• Wartungsverträge für langfristige Sicherheit</li>
                    <li>• 14 Tage Widerrufsrecht bei Verbrauchern</li>
                  </ul>
                </div>
                
                <div className="security-card p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Return Policy & Datenschutz</h4>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Rückgabe defekter Geräte innerhalb der Garantiezeit</li>
                    <li>• Kostenloser Austausch bei Herstellerfehlern</li>
                    <li>• Ihre Daten werden DSGVO-konform verarbeitet</li>
                    <li>• Keine Weitergabe an Dritte ohne Ihre Zustimmung</li>
                    <li>• Löschung Ihrer Daten auf Wunsch jederzeit möglich</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">Woerl-Alarm</span>
              </div>
              <p className="text-gray-400">
                Ihr zuverlässiger Partner für professionelle Sicherheitstechnik. 
                Schutz für Ihr Zuhause und Ihr Unternehmen.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Einbruchmeldeanlagen</li>
                <li>Brandmeldeanlagen</li>
                <li>Zutrittskontrolle</li>
                <li>24h Überwachung</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+49 (0) 123 456789</li>
                <li>info@woerl-alarm.de</li>
                <li>Mo-Fr: 8:00-18:00 Uhr</li>
                <li>24h Notdienst</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Impressum</li>
                <li>Datenschutz</li>
                <li>AGB</li>
                <li>Return Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Woerl-Alarm Sicherheitstechnik. Alle Rechte vorbehalten.</p>
            <p className="mt-2">
              Wie schon erwähnt, ALLES ist möglich, und gerade in der Sicherheitstechnik ist ALLES realisierbar!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

