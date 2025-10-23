
import { Search, MapPin, Home } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 🔹 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury real estate"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-red-900/80 z-10"></div>
      </div>

      {/* 🔹 Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight max-w-2xl">
              Trouvez Votre
              <span className="block bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                Maison de Rêve
              </span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed max-w-xl">
              ABS Immo & Services vous accompagne dans tous vos projets
              immobiliers au Sénégal. Expertise, confiance et service
              d&apos;excellence depuis plus de 10 ans.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Voir nos Propriétés
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-md">
                Estimer mon Bien
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-white/20 max-w-lg">
              <div className="text-center px-4">
                <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-1">
                  500+
                </div>
                <p className="text-sm lg:text-base text-gray-300">
                  Propriétés Vendues
                </p>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-1">
                  98%
                </div>
                <p className="text-sm lg:text-base text-gray-300">
                  Clients Satisfaits
                </p>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl lg:text-4xl font-bold text-red-400 mb-1">
                  10+
                </div>
                <p className="text-sm lg:text-base text-gray-300">
                  Années d&apos;Expérience
                </p>
              </div>
            </div>
          </div>

          {/* Right - Search Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Rechercher une Propriété
            </h3>

            <div className="space-y-4">
              {/* Transaction Type */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow hover:bg-blue-700">
                  Acheter
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                  Louer
                </button>
              </div>

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Localisation (ex: Dakar, Thiès...)"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm appearance-none bg-white">
                  <option>Type de propriété</option>
                  <option>Maison</option>
                  <option>Appartement</option>
                  <option>Villa</option>
                  <option>Terrain</option>
                  <option>Bureau</option>
                  <option>Commerce</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prix min"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Prix max"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                />
              </div>

              {/* Search Button */}
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce opacity-70 hover:opacity-100 transition-opacity">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
