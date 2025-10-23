
import { Bed, Bath, Square, MapPin, Heart, Eye } from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Villa Moderne de Luxe",
      location: "Almadies, Dakar",
      price: "450,000,000 FCFA",
      type: "Vente",
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Appartement Standing",
      location: "Plateau, Dakar",
      price: "180,000 FCFA/mois",
      type: "Location",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 3,
      title: "Maison Familiale",
      location: "Keur Massar",
      price: "85,000,000 FCFA",
      type: "Vente",
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      image: "https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 4,
      title: "Studio Moderne",
      location: "Point E, Dakar",
      price: "75,000 FCFA/mois",
      type: "Location",
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 5,
      title: "Villa avec Piscine",
      location: "Saly, Mbour",
      price: "320,000,000 FCFA",
      type: "Vente",
      bedrooms: 6,
      bathrooms: 5,
      area: 400,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 6,
      title: "Duplex Contemporain",
      location: "Mermoz, Dakar",
      price: "220,000 FCFA/mois",
      type: "Location",
      bedrooms: 4,
      bathrooms: 3,
      area: 160,
      image: "https://images.pexels.com/photos/1396118/pexels-photo-1396118.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Propriétés en Vedette
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection exclusive de propriétés d'exception, 
            soigneusement choisies pour répondre à vos exigences les plus élevées.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    property.type === 'Vente' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-red-600 text-white'
                  }`}>
                    {property.type}
                  </span>
                  {property.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Vedette
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-700" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Eye className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {property.price}
                </div>

                {/* Features */}
                <div className="flex items-center justify-between text-gray-600 text-sm border-t pt-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.area}m²</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Voir les Détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Voir Toutes les Propriétés
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;