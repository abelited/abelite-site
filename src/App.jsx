
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx'
import Services from './Services.jsx'
import Booking from './Booking.jsx'
import './App.css'

function HomePage() {
  const { t } = useTranslation()

  const servicesData = [
    {
      titleKey: "home.one_step_polish_title",
      descriptionKey: "home.one_step_polish_description",
      prices: {
        sedan: 120,
        suv: 150,
        minivanLargeSuvTruck: 180,
      },
    },
    {
      titleKey: "home.two_step_polish_title",
      descriptionKey: "home.two_step_polish_description",
      prices: {
        sedan: 200,
        suv: 250,
        minivanLargeSuvTruck: 280,
      },
    },
    {
      titleKey: "home.three_steps_polish_title",
      descriptionKey: "home.three_steps_polish_description",
      prices: {
        sedan: 250,
        suv: 300,
        minivanLargeSuvTruck: 350,
      },
      extra: {
        nameKey: "home.clay_bar_extra",
        prices: {
          sedan: 70,
          suv: 90,
          minivanLargeSuvTruck: 110,
        },
      },
    },
    {
      titleKey: "home.ceramic_coating_gold_title",
      descriptionKey: "home.ceramic_coating_gold_description",
      prices: {
        sedan: 1000,
        suv: 1100,
        minivanLargeSuv: 1200,
        truckVeryLargeSuv: 1400,
      },
    },
  ];

  const ServiceCard = ({ service, vehicleTypeLabel, vehicleTypeKey }) => (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">{t(service.titleKey)}</CardTitle>
        <CardDescription className="text-gray-600">{t(service.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{vehicleTypeLabel}</span>
            <Badge variant="default" className="bg-yellow-500 text-white text-lg py-2 px-4">
              ${service.prices[vehicleTypeKey]}
            </Badge>
          </div>
          {service.extra && service.extra.prices[vehicleTypeKey] && (
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>+ {t(service.extra.nameKey)}</span>
              <span>${service.extra.prices[vehicleTypeKey]}</span>
            </div>
          )}
        </div>
        <Link to="/booking">
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
            {t('common.book_now')}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  // WhatsApp contact function
  const openWhatsApp = () => {
    const phoneNumber = "16136668899" // Format: country code + number without spaces
    const message = "Hello! I'm interested in your car detailing services. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="AB's Elite Detailing" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold">AB's Elite Detailing</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>613-666-8899</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>ab.elite.detailing@gmail.com</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">{t('home.hero_subtitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('home.hero_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                {t('home.book_your_detailing_today')}
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
                {t('home.our_services_title')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">{t('home.our_services_title')}</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('home.our_services_subtitle')}</p>
          </div>
          
          {/* Sedan Services */}
          <h4 className="text-3xl font-bold text-gray-800 text-center mb-8">{t('home.sedan')}</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                vehicleTypeLabel={t('home.sedan')} 
                vehicleTypeKey="sedan"
              />
            ))}
          </div>

          {/* SUV Services */}
          <h4 className="text-3xl font-bold text-gray-800 text-center mb-8">{t('home.suv')}</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                vehicleTypeLabel={t('home.suv')} 
                vehicleTypeKey="suv"
              />
            ))}
          </div>

          {/* Minivan / Large SUV / Truck Services */}
          <h4 className="text-3xl font-bold text-gray-800 text-center mb-8">{t('home.minivan_large_suv_truck')}</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {servicesData.map((service, index) => {
              const vehicleTypeKey = service.prices.minivanLargeSuvTruck ? "minivanLargeSuvTruck" : "minivanLargeSuv";
              const vehicleTypeLabel = service.prices.minivanLargeSuvTruck ? t('home.minivan_large_suv_truck') : t('home.truck_very_large_suv');
              
              if (service.prices[vehicleTypeKey]) {
                return (
                  <ServiceCard 
                    key={index} 
                    service={service} 
                    vehicleTypeLabel={vehicleTypeLabel} 
                    vehicleTypeKey={vehicleTypeKey}
                  />
                );
              } else if (service.prices.truckVeryLargeSuv) {
                return (
                  <ServiceCard 
                    key={index} 
                    service={service} 
                    vehicleTypeLabel={t('home.truck_very_large_suv')} 
                    vehicleTypeKey="truckVeryLargeSuv"
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">{t('home.our_work_in_action')}</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.our_work_in_action_subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/car-detailing-1.jpg" 
                alt="Professional Car Detailing" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h4 className="text-white font-semibold">{t('home.professional_detailing')}</h4>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/car-detailing-2.jpg" 
                alt="Car Cleaning Process" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h4 className="text-white font-semibold">{t('home.expert_care')}</h4>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/car-detailing-3.jpg" 
                alt="Luxury Car Detailing" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h4 className="text-white font-semibold">{t('home.premium_results')}</h4>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/cleaning-tools-1.jpg" 
                alt="Professional Cleaning Tools" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h4 className="text-white font-semibold">{t('home.professional_tools')}</h4>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/cleaning-tools-2.jpg" 
                alt="Complete Detailing Kit" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h4 className="text-white font-semibold">{t('home.complete_equipment')}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">{t('home.about_us_title')}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('home.about_us_description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚗</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{t('home.professional_service')}</h4>
              <p className="text-gray-600">{t('home.professional_service_description')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{t('home.premium_products')}</h4>
              <p className="text-gray-600">{t('home.premium_products_description')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{t('home.local_service')}</h4>
              <p className="text-gray-600">{t('home.local_service_description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">{t('home.book_your_detailing_today')}</h3>
            <p className="text-xl text-gray-300">{t('home.contact_us_to_schedule')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-yellow-500" />
              <h4 className="font-bold mb-2">{t('common.call_or_text_us')}</h4>
              <p>613-666-8899</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-yellow-500" />
              <h4 className="font-bold mb-2">{t('common.email')}</h4>
              <p>ab.elite.detailing@gmail.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-yellow-500" />
              <h4 className="font-bold mb-2">{t('common.location')}</h4>
              <p>Ottawa, Ontario, Canada</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-4 text-yellow-500" />
              <h4 className="font-bold mb-2">WhatsApp</h4>
              <button onClick={openWhatsApp} className="text-yellow-500 hover:text-yellow-400">
                {t('common.chat_with_us_directly')}
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-6">{t('common.follow_us')}</h4>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/ab.elite.detailing" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://www.facebook.com/share/153bUWN3Vh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="https://vm.tiktok.com/ZMS4GcjN2/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                <MessageCircle className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  )
}
