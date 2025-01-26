// Optional: Add smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  





document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.querySelector('.order-btn');
    const exploreBtn = document.querySelector('.explore-btn');
  
    orderBtn.addEventListener('click', () => {
      alert('Redirecting to Order Page!');
      // Redirect or perform other actions
      window.location.href = '#order-section';
    });
  
    exploreBtn.addEventListener('click', () => {
      alert('Scrolling to Menu Section!');
      // Smooth scroll to menu section
      document.querySelector('#menu-section').scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  console.log("All sections are loaded successfully!");



  document.getElementById("submit").addEventListener("click", function() {
    // Get the selected options
    const protein = document.getElementById("protein").value;
    const cheese = document.getElementById("cheese").value;
    const sauce = document.getElementById("sauce").value;
    
    // Get selected toppings
    const toppings = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
      toppings.push(checkbox.value);
    });
  
    // Create the summary text
    let summary = `Protein: ${protein}<br>Cheese: ${cheese}<br>Sauce: ${sauce}<br>Toppings: ${toppings.length > 0 ? toppings.join(", ") : "None"}`;
    
    // Display the summary in the order summary section
    document.getElementById("summary").innerHTML = summary;
  });
  

  document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', () => {
      alert('Your order has been placed! Enjoy your meal!');
    });
  });
  

  // Example of interactivity: testimonials fade in when scrolling
const testimonials = document.querySelectorAll('.testimonial');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  
  testimonials.forEach(testimonial => {
    if (testimonial.offsetTop < scrollPosition) {
      testimonial.classList.add('visible');
    }
  });
});

// Adding some visibility class to animate the testimonials as they appear
// You can use CSS to animate them



// Contact form submit handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if(name && email && message) {
      alert('Thank you for reaching out! We will get back to you soon.');
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  

