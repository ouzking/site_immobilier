import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Amadou Diallo",
      role: "Entrepreneur",
      location: "Dakar",
      rating: 5,
      text: "ABS Immo & Services m'a accompagné dans l'achat de ma première maison. Service exceptionnel, équipe professionnelle et résultat au-delà de mes espérances. Je recommande vivement !",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Fatou Seck",
      role: "Cadre Supérieure",
      location: "Thiès",
      rating: 5,
      text: "Grâce à ABS Immo, j'ai trouvé l'appartement parfait en moins de 2 semaines. Leur connaissance du marché et leur réactivité sont remarquables. Une équipe au top !",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ousmane Ba",
      role: "Investisseur",
      location: "Mbour",
      rating: 5,
      text: "Pour mes investissements immobiliers, ABS Immo est mon partenaire de confiance. Conseils avisés, transparence totale et rentabilité au rendez-vous. Merci pour votre professionnalisme !",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Aissatou Diouf",
      role: "Commerçante",
      location: "Keur Massar",
      rating: 5,
      text: "La vente de ma maison s'est déroulée parfaitement avec ABS Immo. Prix juste, délai respecté et accompagnement de qualité. Une agence qui tient ses promesses !",
      image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Mamadou Kane",
      role: "Fonctionnaire",
      location: "Rufisque",
      rating: 5,
      text: "Excellent service de location avec ABS Immo. Procédures simplifiées, suivi régulier et réactivité exemplaire. Je confie la gestion de tous mes biens à cette équipe compétente.",
      image: "https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de notre service et de leur expérience 
            avec ABS Immo & Services.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-200"
                />
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-600 to-red-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Clients Satisfaits</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-red-600 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Note Moyenne</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Avis Positifs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;