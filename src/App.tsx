import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from './logo.jpg';
import { 
  Truck, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Package,
  Warehouse,
  Globe,
  Anchor,
  Wind,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#' },
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className={`relative p-1 rounded-full transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/20 backdrop-blur-sm'}`}>
              <img 
                src={logo} 
                alt="Albatros Nakliyat Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <Wind className="absolute -right-1 -top-1 w-4 h-4 text-albatros-blue animate-pulse" />
              {!isScrolled && (
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
              )}
            </div>
            <div className="ml-3 flex flex-col leading-tight">
              <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-albatros-navy' : 'text-white'}`}>
                ALBATROS
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-albatros-blue' : 'text-albatros-blue'}`}>
                NAKLİYE & LOJİSTİK
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-albatros-blue ${isScrolled ? 'text-albatros-navy' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-albatros-navy' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block px-3 py-4 text-base font-bold text-albatros-navy hover:bg-albatros-light hover:text-albatros-blue border-b border-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 px-3">
                <button className="w-full bg-albatros-blue text-white px-5 py-4 rounded-md text-base font-bold uppercase tracking-widest shadow-xl">
                  TEKLİF AL
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: logo,
      isLogo: true,
      title: "ALBATROS",
      subtitle: "LOJİSTİK ÇÖZÜMLERİ",
      description: "Güvenilir, hızlı ve profesyonel taşımacılık hizmetleri."
    },
    {
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000",
      title: "ALBATROS",
      subtitle: "NAKLİYE & LOJİSTİK",
      description: "Dünya standartlarında taşımacılık çözümleri. Evden eve nakliyattan global lojistik operasyonlarına kadar her adımda yanınızdayız."
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
      title: "GÜVENLİ",
      subtitle: "TAŞIMACILIK",
      description: "Eşyalarınız bizimle güvende. Sigortalı ve profesyonel paketleme hizmetimizle huzurlu bir taşınma deneyimi yaşayın."
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden bg-albatros-navy">
      {/* Slider Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute inset-0 ${slides[currentSlide].isLogo ? 'flex justify-end' : ''}`}
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Albatros" 
              className={`h-full transition-all duration-1000 ${slides[currentSlide].isLogo ? 'w-full md:w-1/2 object-contain p-8 md:p-20 opacity-100' : 'w-full object-cover object-center opacity-60 mix-blend-overlay'}`}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        {!slides[currentSlide].isLogo && (
          <div className="absolute inset-0 bg-gradient-to-b from-albatros-navy/40 via-albatros-navy/80 to-albatros-navy"></div>
        )}
      </div>

      <div className="relative z-10 w-full px-4 sm:px-32 md:px-56 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className={`max-w-3xl ${slides[currentSlide].isLogo ? 'md:w-1/2' : ''}`}
          >
          
            <h1 className="text-2xl md:text-4xl font-black leading-tight mb-6 tracking-tighter">
              {slides[currentSlide].title} <br />
              <span className="text-albatros-blue">{slides[currentSlide].subtitle}</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl font-medium">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-albatros-blue' : 'w-3 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      {/* Decorative Element */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-albatros-blue/10 rounded-full blur-3xl -z-0"></div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Evden Eve Nakliyat',
      description: 'Evinizi en ince ayrıntısına kadar paketliyor, yeni adresinize güvenle ulaştırıyoruz.',
      icon: <Home className="w-10 h-10 text-albatros-blue" />,
    },
    {
      title: 'Ofis Taşımacılığı',
      description: 'İş yerinizi aksatmadan, profesyonel ekipmanlarla hızlı ve düzenli taşıyoruz.',
      icon: <Briefcase className="w-10 h-10 text-albatros-blue" />,
    },
    {
      title: 'Uluslararası Lojistik',
      description: 'Global ağımızla sınır ötesi taşımacılıkta güvenilir çözüm ortağınızız.',
      icon: <Globe className="w-10 h-10 text-albatros-blue" />,
    },
    {
      title: 'Eşya Depolama',
      description: 'Fazla eşyalarınızı güvenli, temiz ve 7/24 korunan depolarımızda saklıyoruz.',
      icon: <Warehouse className="w-10 h-10 text-albatros-blue" />,
    },
    {
      title: 'Deniz & Hava Kargo',
      description: 'Kıtalar arası gönderileriniz için en hızlı ve ekonomik rotaları planlıyoruz.',
      icon: <Anchor className="w-10 h-10 text-albatros-blue" />,
    },
    {
      title: 'Paketleme & Ambalaj',
      description: 'Eşyalarınızın türüne göre en kaliteli ambalaj malzemelerini kullanıyoruz.',
      icon: <Package className="w-10 h-10 text-albatros-blue" />,
    },
  ];

  return (
    <section id="hizmetler" className="py-32 bg-albatros-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-albatros-blue font-black tracking-[0.3em] uppercase text-sm mb-4">Hizmetlerimiz</h2>
            <p className="text-4xl md:text-6xl font-black text-albatros-navy leading-tight tracking-tighter">
              Kapsamlı Taşımacılık <br /> Çözümleri
            </p>
          </div>
          <div className="text-lg text-gray-600 max-w-md font-medium">
            Lojistik dünyasının her alanında, son teknoloji ekipmanlar ve uzman kadromuzla yanınızdayız.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15 }}
              className="bg-white p-10 rounded-xl shadow-xl shadow-albatros-navy/5 border border-gray-100 hover:border-albatros-blue/30 transition-all group"
            >
              <div className="mb-8 bg-albatros-light w-24 h-24 rounded-lg flex items-center justify-center group-hover:bg-albatros-navy transition-colors duration-500">
                <div className="group-hover:scale-110 transition-transform duration-500 group-hover:text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-albatros-navy mb-5 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Sigortalı Taşımacılık',
      description: 'Tüm operasyonlarımızda eşyalarınız tam kapsamlı sigorta altındadır.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: 'Zamanında Teslimat',
      description: 'Lojistikte zaman paradır. Söz verdiğimiz saatte teslimat yapıyoruz.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Global Standartlar',
      description: 'Uluslararası taşımacılık sertifikalarımızla güven veriyoruz.',
      icon: <Star className="w-6 h-6" />,
    },
  ];

  return (
    <section id="hakkimizda" className="py-32 overflow-hidden bg-white relative">
      {/* Background Decorative Wings */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
        <Wind className="absolute -top-20 -left-20 w-[600px] h-[600px] rotate-45 text-albatros-navy" />
        <Wind className="absolute -bottom-20 -right-20 w-[600px] h-[600px] -rotate-135 text-albatros-navy" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center gap-24">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" 
                  alt="Nakliyat Kamyonu" 
                  className="rounded-2xl shadow-2xl h-80 w-full object-cover mt-12"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-albatros-blue font-black tracking-[0.3em] uppercase text-sm mb-4">Neden Albatros?</h2>
            <h3 className="text-4xl md:text-6xl font-black text-albatros-navy mb-8 tracking-tighter leading-tight">
              Güveninizi Geleceğe <br /> Taşıyoruz
            </h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              Albatros Nakliye & Lojistik olarak, her yükün bir hikayesi olduğuna inanıyoruz. Modern filomuz ve dijital takip sistemlerimizle taşımacılığı bir sanat haline getiriyoruz.
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="bg-albatros-navy text-white p-4 rounded-xl group-hover:bg-albatros-blue transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-albatros-navy mb-2 tracking-tight">{feature.title}</h4>
                    <p className="text-gray-600 font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="iletisim" className="py-32 bg-albatros-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
         <Globe className="absolute -right-20 -bottom-20 w-[600px] h-[600px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-albatros-blue font-black tracking-[0.3em] uppercase text-sm mb-4">İletişim</h2>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="bg-white/5 p-5 rounded-full border border-white/10 group-hover:bg-albatros-blue transition-all duration-300">
                  <Phone className="w-7 h-7 text-albatros-blue group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-albatros-blue uppercase tracking-[0.2em] mb-1">Telefon</div>
                  <div className="text-2xl font-black tracking-tight">+90 (212) 555 00 00</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="bg-white/5 p-5 rounded-full border border-white/10 group-hover:bg-albatros-blue transition-all duration-300">
                  <Mail className="w-7 h-7 text-albatros-blue group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-albatros-blue uppercase tracking-[0.2em] mb-1">E-posta</div>
                  <div className="text-2xl font-black tracking-tight">info@albatrosnakliyat.com</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="bg-white/5 p-5 rounded-full border border-white/10 group-hover:bg-albatros-blue transition-all duration-300">
                  <MapPin className="w-7 h-7 text-albatros-blue group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-albatros-blue uppercase tracking-[0.2em] mb-1">Merkez Ofis</div>
                  <div className="text-2xl font-black tracking-tight">Lojistik Plaza, No:12, İstanbul</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-albatros-navy text-white py-24 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-albatros-blue/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-8">
              <div className="bg-white p-1 rounded-full relative shadow-xl shadow-albatros-blue/20">
                <img 
                  src={logo} 
                  alt="Albatros Nakliyat Logo" 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <Wind className="absolute -right-1 -top-1 w-5 h-5 text-albatros-blue" />
              </div>
              <div className="ml-4 flex flex-col leading-tight">
                <span className="text-2xl font-black tracking-tighter text-white">
                  ALBATROS
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-albatros-blue">
                  NAKLİYE & LOJİSTİK
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed font-medium mb-8">
              Eşyalarınızı sadece taşımıyor, güveninizi geleceğe ulaştırıyoruz. Profesyonel kadromuz ve modern filomuzla hizmetinizdeyiz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-albatros-blue hover:border-albatros-blue transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-albatros-blue hover:border-albatros-blue transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-albatros-blue hover:border-albatros-blue transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-albatros-blue hover:border-albatros-blue transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-10 relative inline-block">
              Kurumsal
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-albatros-blue"></span>
            </h5>
            <ul className="space-y-4 font-bold text-gray-300">
              <li><a href="#" className="hover:text-albatros-blue transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-albatros-blue/50" /> Ana Sayfa</a></li>
              <li><a href="#hizmetler" className="hover:text-albatros-blue transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-albatros-blue/50" /> Hizmetlerimiz</a></li>
              <li><a href="#hakkimizda" className="hover:text-albatros-blue transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-albatros-blue/50" /> Hakkımızda</a></li>
              <li><a href="#iletisim" className="hover:text-albatros-blue transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-albatros-blue/50" /> İletişim</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-10 relative inline-block">
              Bize Ulaşın
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-albatros-blue"></span>
            </h5>
            <div className="space-y-6 text-gray-300 font-medium">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-albatros-blue shrink-0 mt-1" />
                <p>Lojistik Plaza, No:12, <br /> Kağıthane, İstanbul</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-albatros-blue shrink-0" />
                <p>+90 (212) 555 00 00</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-albatros-blue shrink-0" />
                <p>info@albatrosnakliyat.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white text-center md:text-left">
            © 2026 ALBATROS NAKLİYE & LOJİSTİK. TÜM HAKLARI SAKLIDIR.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-albatros-blue selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <a 
          href="tel:+902125550000" 
          className="bg-albatros-blue text-white p-5 rounded-full shadow-2xl flex items-center justify-center animate-pulse"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}

