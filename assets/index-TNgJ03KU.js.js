
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
  alert("✅ Booking confirmed! Check your email.");
} catch (error) {
  console.error("❌ Failed to send email:", error); // ← نطبع الخطأ هنا
  alert("❌ Email failed to send. Check console.");
}


  r("");
  o("");
  f("");
  v("");
  m({ name: "", email: "", phone: "", address: "", notes: "" });
};

// ... (تابع باقي الكود كما هو)
