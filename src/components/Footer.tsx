
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const services = [
    "Vente de Propriétés",
    "Location & Gestion",
    "Conseil en Investissement",
    "Expertise & Évaluation",
    "Accompagnement Juridique"
  ];

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Propriétés", href: "#properties" },
    { name: "Services", href: "#services" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-6">
              ABS Immo & Services
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets immobiliers au Sénégal. 
              Excellence, professionnalisme et service personnalisé depuis plus de 10 ans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+221 77 430 83 44</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-red-400" />
                <span>elhadjisane1990@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-green-400 mt-0.5" />
                <span>Keur Massar Cité Firdawsi Nº 2141</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-red-400 rounded-full mr-3"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Restez Connecté</h4>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-gray-300 mb-4">
                Recevez nos dernières offres et actualités immobilières.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-3 rounded-r-lg hover:shadow-lg transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-4">Suivez-nous</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ABS Immo & Services. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+221774308344"
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <Phone className="h-6 w-6 text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;