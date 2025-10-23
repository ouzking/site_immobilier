
import { Home, Key, TrendingUp, FileText, Shield, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Vente de Propriétés",
      description:
        "Accompagnement complet dans la vente de votre bien immobilier avec évaluation professionnelle et marketing ciblé.",
      features: [
        "Évaluation gratuite",
        "Marketing digital",
        "Négociation experte",
        "Suivi juridique",
      ],
    },
    {
      icon: Key,
      title: "Location & Gestion",
      description:
        "Gestion locative complète de vos biens avec sélection rigoureuse des locataires et suivi administratif.",
      features: [
        "Sélection locataires",
        "Gestion administrative",
        "Entretien régulier",
        "Recouvrement loyers",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investissement Conseil",
      description:
        "Conseils d'experts pour optimiser vos investissements immobiliers et maximiser votre rentabilité.",
      features: [
        "Analyse de marché",
        "Stratégie d'investissement",
        "Fiscalité optimisée",
        "Suivi performance",
      ],
    },
    {
      icon: FileText,
      title: "Expertise & Évaluation",
      description:
        "Évaluations immobilières professionnelles certifiées pour tous types de transactions et situations.",
      features: [
        "Expertise certifiée",
        "Rapport détaillé",
        "Conformité normes",
        "Délai rapide",
      ],
    },
    {
      icon: Shield,
      title: "Accompagnement Juridique",
      description:
        "Sécurisation de vos transactions avec vérification juridique complète et assistance administrative.",
      features: [
        "Vérification documents",
        "Accompagnement notaire",
        "Sécurisation transaction",
        "Conseil juridique",
      ],
    },
    {
      icon: Users,
      title: "Conseil Personnalisé",
      description:
        "Service client premium avec conseiller dédié pour un accompagnement sur mesure de vos projets.",
      features: [
        "Conseiller dédié",
        "Disponibilité 7j/7",
        "Suivi personnalisé",
        "Service premium",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos Services d’<span className="text-blue-600">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ABS Immo & Services vous propose une gamme complète de solutions
            immobilières pour répondre à tous vos besoins avec{" "}
            <span className="font-semibold text-blue-600">
              expertise et professionnalisme
            </span>
            .
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    aria-label={`En savoir plus sur ${service.title}`}
                    className="text-blue-600 hover:text-red-600 font-semibold transition-colors duration-300 flex items-center group-hover:translate-x-2 transform transition-transform"
                  >
                    En savoir plus
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-2xl p-12 text-center shadow-lg">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à Concrétiser Votre Projet ?
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez nos experts dès aujourd’hui pour une{" "}
            <span className="font-semibold">consultation gratuite</span> et
            découvrez comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Consultation Gratuite
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Nos Réalisations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
