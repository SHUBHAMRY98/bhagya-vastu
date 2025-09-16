// // Popup open/close
// const popup = document.getElementById("popup");
// const openBtn = document.getElementById("openPopup");
// const closeBtn = document.getElementById("closePopup");

// openBtn.onclick = () => popup.style.display = "block";
// closeBtn.onclick = () => popup.style.display = "none";
// window.onclick = (e) => { if (e.target === popup) popup.style.display = "none"; };

// // Payment Popup
// const paymentPopup = document.getElementById("paymentPopup");
// const closePaymentBtn = document.getElementById("closePaymentPopup");
// const payBtn = document.getElementById("payBtn");

// payBtn.onclick = () => {
//   const form = document.getElementById("landingForm");
//   if (form.checkValidity()) {
//     popup.style.display = "none";
//     paymentPopup.style.display = "block";
//   } else {
//     alert("Please fill all fields");
//   }
// };

// closePaymentBtn.onclick = () => paymentPopup.style.display = "none";
// window.onclick = (e) => { if (e.target === paymentPopup) paymentPopup.style.display = "none"; };

// // Razorpay Integration
// document.getElementById("razorPayBtn").onclick = function(e){
//   e.preventDefault();

//   const name = document.querySelector('input[name="name"]').value;
//   const email = document.querySelector('input[name="email"]').value;
//   const phone = document.querySelector('input[name="phone"]').value;

//   var options = {
//     "key": "YOUR_RAZORPAY_KEY_ID", // यहाँ अपना Razorpay key डालें
//     "amount": "99900", // ₹999 = 99900 paise
//     "currency": "INR",
//     "name": "Bhagyavastu",
//     "description": "Mahalakshmi Puja Yantra",
//     "handler": function (response){
//         alert("Payment successful! ID: " + response.razorpay_payment_id);
//         paymentPopup.style.display = "none";
//     },
//     "prefill": {
//       "name": name,
//       "email": email,
//       "contact": phone
//     },
//     "theme": { "color": "#f5a623" }
//   };

//   var rzp = new Razorpay(options);
//   rzp.open();
// };








 // JavaScript for popup logic
    const openPopupBtn = document.getElementById("openPopup");
    const paymentPopup = document.getElementById("paymentPopup");
    const orderPopup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const closePaymentPopup = document.getElementById("closePaymentPopup");
    const paymentDoneBtn = document.getElementById("paymentDoneBtn");

    // Open Payment Popup
    openPopupBtn.addEventListener("click", () => {
      paymentPopup.style.display = "block";
    });

    // Close Payment Popup
    closePaymentPopup.addEventListener("click", () => {
      paymentPopup.style.display = "none";
    });

    // Close WhatsApp Popup
    closePopup.addEventListener("click", () => {
      orderPopup.style.display = "none";
    });

    // After Payment → Show WhatsApp Popup
    paymentDoneBtn.addEventListener("click", () => {
      paymentPopup.style.display = "none";
      orderPopup.style.display = "block";
    });

    // Close popup when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === paymentPopup) paymentPopup.style.display = "none";
      if (e.target === orderPopup) orderPopup.style.display = "none";
    });