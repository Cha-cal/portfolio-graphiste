"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "logos" | "affiches">("all");
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const projects = [
    {
      id: 1,
      title: "Nova Tech Brand Identity",
      category: "logos",
      categoryLabel: "Branding / Logo",
      image: "https://images.unsplash.com/photo-1551434338-0bd8478a6c2f?w=800&h=600&fit=crop&auto=format&q=80",
      description: "Identité visuelle moderne pour une startup tech avec logo vectoriel minimaliste.",
    },
    {
      id: 2,
      title: "Festival Electronic Nights",
      category: "affiches",
      categoryLabel: "Affiche Événementielle",
      image: "https://images.unsplash.com/photo-1589927986089-6e6c6e8e3c6e?w=800&h=600&fit=crop&auto=format&q=80",
      description: "Affiche dynamique pour festival de musique électronique avec visuels néon.",
    },
    {
      id: 3,
      title: "Lumina Cosmetics Rebrand",
      category: "logos",
      categoryLabel: "Branding / Logo",
      image: "https://images.unsplash.com/photo-1589922603134-6c6e81e022d3?w=800&h=600&fit=crop&auto=format&q=80",
      description: "Logo premium pour gamme de soins biologiques éco-responsables.",
    },
    {
      id: 4,
      title: "CyberArt Exhibition",
      category: "affiches",
      categoryLabel: "Affiche Exposition",
      image: "https://images.unsplash.com/photo-1587614382346-4a639e1a9e2f?w=800&h=600&fit=crop&auto=format&q=80",
      description: "Composition futuriste pour galerie d'art numérique contemporain.",
    },
    {
      id: 5,
      title: "Apex Athletics",
      category: "logos",
      categoryLabel: "Branding / Logo",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7c20?w=800&h=600&fit=crop&auto=format&q=80",
      description: "Monogramme dynamique pour marque de sport haute performance.",
    },
    {
      id: 6,
      title: "Cinema Under Stars",
      category: "affiches",
      categoryLabel: "Cinema Affiche",
      image: "https://images.unsplash.com/photo-1578871437664-d8d21889e859?w=800&h=600&fit=crop&auto=format&q=80",
      description: "Illustration rétro-moderne pour festival de cinéma en plein air.",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
              SD
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-900 text-lg leading-none">
                Studio Design
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold mt-1">
                Freelance Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Accueil
            </a>
            <a
              href="#specialites"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Spécialités
            </a>
            <a
              href="#realisations"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Réalisations
            </a>
            <a
              href="#galerie"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Galerie
            </a>
            <a
              href="#contact"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-200 transition-all duration-300"
            >
              Contacter
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-6 py-6 flex flex-col gap-4 text-base font-medium">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#specialites"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Spécialités
            </a>
            <a
              href="#realisations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Réalisations
            </a>
            <a
              href="#galerie"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Galerie
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md"
            >
              Me contacter
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-20 pb-32 md:pt-32 md:pb-40 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1] text-slate-900">
            Je crée des identités visuelles solides
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
            Spécialisé en création de <strong className="text-slate-800 font-medium">logos sur mesure</strong> et d'<strong className="text-slate-800 font-medium">affiches d'impact</strong>. Des visuels uniques qui mettent votre marque en valeur.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#galerie"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-base shadow-md hover:bg-indigo-700 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Voir mes créations</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Me contacter</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-3xl pt-10 border-t border-slate-200">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-slate-900">50+</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Projets Réalisés</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-slate-900">100%</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Créations Sur-mesure</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-slate-900">5/5 ★</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Satisfaction Clients</span>
            </div>
          </div>
        </section>

        {/* MES SPÉCIALITÉS SECTION */}
        <section id="specialites" className="py-24 px-6 max-w-7xl mx-auto bg-slate-50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
              Services & Compétences
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Mes Spécialités
            </p>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Une expertise créative ciblée pour valoriser votre marque sur tous les supports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Branding & Logo */}
            <div className="group relative rounded-xl p-8 bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Branding & Logo
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Conception de logos vectoriels uniques et durables. Élaboration de chartes graphiques complètes.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">✓</span> Logos vectoriels HD & déclinaisons
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">✓</span> Charte graphique & Brand Guidelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">✓</span> Fichiers sources (AI, SVG, EPS, PNG)
                </li>
              </ul>
            </div>

            {/* Card 2: Affiches & Posters */}
            <div className="group relative rounded-xl p-8 bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Affiches & Posters</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Design d'affiches à fort impact. Travail minutieux de la composition et de la typographie.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-slate-700">✓</span> Format print haute résolution (300 DPI)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-700">✓</span> Déclinaisons réseaux sociaux & Web
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-700">✓</span> Compositions artistiques & typographiques
                </li>
              </ul>
            </div>

            {/* Card 3: Direction Artistique */}
            <div className="group relative rounded-xl p-8 bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-disabled 2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Direction Artistique
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Accompagnement global dans l'élaboration de votre univers visuel et stratégie esthétique.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-slate-700">✓</span> Concept visuel & Moodboards
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-700">✓</span> Conseil stratégique en image de marque
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-700">✓</span> Cohérence multi-supports & UI Concept
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GALLERIE / PORTFOLIO SECTION */}
        <section id="galerie" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Mes Réalisations Récentes
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Une sélection de projets récents dans différents domaines du graphisme et du design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 bg-white">
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                    {project.categoryLabel}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
                Contact
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Discutons de votre <span className="text-indigo-600">projet</span>
              </p>
              <p className="mt-6 text-slate-600 text-base leading-relaxed">
                Vous avez besoin d'un logo percutant ou d'une affiche d'exception ? Envoyez-moi un message.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider block">Email direct</span>
                    <a href="mailto:contact@studiodesign.fr" className="text-slate-900 font-semibold hover:text-indigo-600 transition-colors">
                      contact@studiodesign.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider block">Localisation</span>
                    <span className="text-slate-900 font-semibold">Paris, France (Disponible à distance)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl p-8 bg-white border border-slate-200 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    placeholder="Alexandre Dupont"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    placeholder="alexandre@exemple.fr"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">
                    Type de projet
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:border-indigo-600 transition-colors">
                    <option value="logo">Création de Logo & Branding</option>
                    <option value="affiche">Affiche / Poster</option>
                    <option value="da">Direction Artistique globale</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">
                    Votre message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez vos besoins, délais et objectifs..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 active:scale-[0.98] transition-all duration-300"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">
              SD
            </div>
            <span className="font-bold tracking-tight text-slate-900 text-base">
              Studio Design
            </span>
          </div>

          <p className="text-xs text-slate-500">
            © {year} Studio Design. Tous droits réservés. Graphisme, Logos & Affiches.
          </p>

          <div className="flex items-center gap-6 text-slate-500 text-xs font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">Behance</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}