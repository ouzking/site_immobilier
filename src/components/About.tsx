
import { Award, Users, Clock, Star, CheckCircle, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Clients Satisfaits", value: "500+", color: "from-blue-500 to-blue-600" },
    { icon: Award, label: "Années d'Expérience", value: "10+", color: "from-red-500 to-red-600" },
    { icon: Clock, label: "Propriétés Vendues", value: "300+", color: "from-green-500 to-green-600" },
    { icon: Star, label: "Note Moyenne", value: "4.9/5", color: "from-yellow-500 to-yellow-600" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque transaction et service proposé à nos clients."
    },
    {
      icon: CheckCircle,
      title: "Transparence",
      description: "Une communication claire et honnête à chaque étape de votre projet immobilier."
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Un service personnalisé et un accompagnement sur mesure pour chaque client."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            À Propos d'ABS Immo & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis plus de 10 ans, nous sommes votre partenaire de confiance 
            pour tous vos projets immobiliers au Sénégal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fondée en 2014, ABS Immo & Services est née de la passion de son fondateur 
                pour l'immobilier sénégalais et de sa volonté d'offrir un service d'excellence 
                à tous les acteurs du marché immobilier.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Basée à Keur Massar, notre agence s'est rapidement imposée comme une référence 
                dans la région grâce à notre expertise, notre professionnalisme et notre 
                connaissance approfondie du marché local.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aujourd'hui, nous accompagnons particuliers, investisseurs et entreprises 
                dans leurs projets immobiliers les plus ambitieux, en leur offrant un service 
                personnalisé et des solutions innovantes.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h4>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h5>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ABS Immo & Services Team"
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Certifié</div>
                  <div className="text-gray-600">Agence Agréée</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Notre Mission
          </h3>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Accompagner chaque client dans la réalisation de ses rêves immobiliers en offrant 
            un service d'excellence, une expertise reconnue et des solutions personnalisées. 
            Nous nous engageons à créer des relations de confiance durables et à contribuer 
            au développement du secteur immobilier sénégalais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;