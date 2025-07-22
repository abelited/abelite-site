
import emailjs from 'emailjs-com';

const bookingData = {
  customer_name: "Client Name",
  customer_email: "client@example.com",
  customer_phone: "1234567890",
  service: "plus-exterior",
  vehicleType: "SUV",
  date: "2025-07-24",
  time: "10:00 AM",
  customer_address: "123 Main Street",
  customer_notes: "Please arrive early"
};

async function submitBooking() {
  try {
    // إرسال الحجز إلى مالك الموقع
    await emailjs.send(
      "service_gii8a6h",
      "template_booking",
      bookingData,
      "-kBM5dG1uVjBmD-_-"
    );

    // إرسال تأكيد للعميل
    await emailjs.send(
      "service_gii8a6h",
      "auto_reply_customer",
      bookingData,
      "-kBM5dG1uVjBmD-_-"
    );

    alert("✅ Booking submitted and confirmation sent!");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    alert("❌ Error sending booking. Please try again.");
  }
}

submitBooking();
