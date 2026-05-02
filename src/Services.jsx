import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowLeft, Car, Droplets, Sparkles, Shield, Brush, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      title: "Interior & Exterior Cleaning",
      description: "Complete cleaning of the car's interior and exterior to remove dust, dirt, and stains.",
      icon: <Car className="h-8 w-8 text-yellow-500" />,
      details: [
        "Deep vacuum of seats and carpets",
        "Dashboard and console cleaning",
        "Window cleaning inside and out",
        "Exterior wash and rinse"
      ]
    },
    {
      title: "Seat Floor Washing with Water & Soap",
      description: "Deep cleaning of the seats and floor mats using water and soap for a refreshed and hygienic interior.",
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      details: [
        "Water and soap deep cleaning",
        "Stain removal treatment",
        "Sanitization process",
        "Fresh scent application"
      ]
    },
    {
      title: "Engine Cleaning Without Water",
      description: "Complete cleaning of the car's interior and exterior to remove dust, dirt, and stains.",
      icon: <Zap className="h-8 w-8 text-red-500" />,
      details: [
        "Dry cleaning method",
        "Safe for electrical components",
        "Degreasing treatment",
        "Engine bay detailing"
      ]
    },
    {
      title: "Waxing",
      description: "Applying a layer of wax to the car's exterior to enhance shine and provide a protective barrier against environmental elements.",
      icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
      details: [
        "Premium wax application",
        "UV protection",
        "Enhanced shine",
        "Long-lasting protection"
      ]
    },
    {
      title: "Polishing",
      description: "Using polish to remove minor scratches and oxidation, restoring the car's original paint gloss and smoothness.",
      icon: <Brush className="h-8 w-8 text-purple-500" />,
      details: [
        "Scratch removal",
        "Paint restoration",
        "Gloss enhancement",
        "Surface smoothing"
      ]
    },
    {
      title: "Clay Bar Treatment",
      description: "Using a clay bar to remove embedded contaminants from the car's surface, leaving it silky smooth and ready for polishing or waxing.",
      icon: <Shield className="h-8 w-8 text-green-500" />,
      details: [
        "Contaminant removal",
        "Surface preparation",
        "Smooth finish",
        "Paint protection prep"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="AB's Elite Detailing" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold">AB's Elite Detailing</h1>
          </div>
          <Link to="/" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">WE TREAT CARS LIKE ROYALTIES</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our comprehensive detailing services ensure your vehicle receives the royal treatment it deserves
          </p>
          <div className="bg-yellow-600 text-white px-6 py-3 rounded-lg inline-block">
            <span className="text-2xl font-bold">Our Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Image Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Professional Services</h3>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/services-image.jpg" 
              alt="AB's Elite Detailing Services" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Give Your Car the Royal Treatment?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to schedule your premium detailing service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Book Appointment
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src="/logo.png" alt="AB's Elite Detailing" className="h-8 w-auto" />
            <span className="text-lg font-semibold">AB's Elite Detailing</span>
          </div>
          <p className="text-gray-400">
            © 2025 AB's Elite Detailing. All rights reserved. | Ottawa, Ontario, Canada
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Services

