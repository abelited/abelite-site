import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { ArrowLeft, Calendar, Clock, Car, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'

function Booking() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  })

  useEffect(() => {
    emailjs.init("-kBM5dG1uVjBmD-_-")
  }, [])

  // Available time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  // Service options
  const services = [
    { value: 'standard-interior', label: 'Standard Interior Cleaning' },
    { value: 'standard-exterior', label: 'Standard Exterior Cleaning' },
    { value: 'standard-both', label: 'Standard Both (Interior + Exterior)' },
    { value: 'plus-interior', label: 'Plus Interior Cleaning' },
    { value: 'plus-exterior', label: 'Plus Exterior Cleaning' },
    { value: 'plus-both', label: 'Plus Both (Interior + Exterior)' },
    { value: 'waxing', label: 'Waxing Service' },
    { value: 'polishing', label: 'Polishing Service' },
    { value: 'clay-bar', label: 'Clay Bar Treatment' },
    { value: 'engine-cleaning', label: 'Engine Cleaning (Waterless)' }
  ]

  // Vehicle types
  const vehicleTypes = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'minivan', label: 'Mini Van / Large SUV' },
    { value: 'truck', label: 'Truck' },
    { value: 'other', label: 'Other' }
  ]

  // Generate next 30 days for booking
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip Sundays (day 0)
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        })
      }
    }
    return dates
  }

  const availableDates = generateAvailableDates()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!selectedDate || !selectedTime || !selectedService || !vehicleType || 
        !formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields')
      return
    }

    const bookingDetails = {
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      service: services.find(s => s.value === selectedService)?.label || selectedService,
      vehicleType: vehicleTypes.find(v => v.value === vehicleType)?.label || vehicleType,
      date: selectedDate,
      time: selectedTime,
      customer_address: formData.address,
      customer_notes: formData.notes
    }

    try {
      // Send booking to owner
      await emailjs.send(
        "service_gii8a6h",
        "template_booking",
        bookingDetails,
        "-kBM5dG1uVjBmD-_-"
      )

      // Send confirmation to customer
      await emailjs.send(
        "service_gii8a6h",
        "auto_reply_customer",
        bookingDetails,
        "-kBM5dG1uVjBmD-_-"
      )

      alert("✅ Booking submitted and confirmation sent!")
      
      // Reset form
      setSelectedDate('')
      setSelectedTime('')
      setSelectedService('')
      setVehicleType('')
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
      })
    } catch (error) {
      console.error("❌ Failed to send email:", error)
      alert("❌ Error sending booking. Please try again.")
    }
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
          <Link to="/" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Book Your Detailing Appointment</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule your premium car detailing service today. We're available Monday through Saturday.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Date and Time Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-yellow-500" />
                    <span>Select Date & Time</span>
                  </CardTitle>
                  <CardDescription>Choose your preferred appointment date and time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a date" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDates.map((date) => (
                          <SelectItem key={date.value} value={date.value}>
                            {date.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Service Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-yellow-500" />
                    <span>Service Details</span>
                  </CardTitle>
                  <CardDescription>Tell us about your vehicle and desired service</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="vehicleType">Vehicle Type *</Label>
                    <Select value={vehicleType} onValueChange={setVehicleType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Type *</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>We'll use this information to confirm your appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(613) 666-8899"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">Service Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Where should we service your vehicle?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requests or additional information..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3"
              >
                Book Appointment
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                * Required fields. We'll contact you within 24 hours to confirm your appointment.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Need Help? Contact Us Directly</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span>613-666-8899</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-yellow-400" />
              <span>ab.elite.detailing@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span>Ottawa, Ontario</span>
            </div>
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

export default Booking

