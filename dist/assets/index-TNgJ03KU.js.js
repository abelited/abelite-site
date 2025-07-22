
// ✅ تم التعديل: إضافة إرسال بيانات الحجز إلى EmailJS
import emailjs from 'emailjs-com';

// ... (الاستيرادات والمكونات الأخرى هنا كما هي)

const R = async (T) => {
  T.preventDefault();

  if (!a || !c || !s || !h || !g.name || !g.email || !g.phone) {
    alert("Please fill in all required fields");
    return;
  }

  const bookingData = {
    date: a,
    time: c,
    service: s,
    vehicleType: h,
    customer_name: g.name,
    customer_email: g.email,
    customer_phone: g.phone,
    customer_address: g.address,
    customer_notes: g.notes,
  };

  try {
    await emailjs.send(
      "service_gii8a6h",
      "template_booking",
      bookingData,
      "-kBM5dG1uVjBmD-_-"
    );
    alert(`✅ Booking confirmed! We'll contact you at ${g.phone} to confirm your appointment on ${a} at ${c}.`);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    alert("Something went wrong while submitting your booking. Please try again.");
  }

  r("");
  o("");
  f("");
  v("");
  m({ name: "", email: "", phone: "", address: "", notes: "" });
};

// ... (تابع باقي الكود كما هو)
