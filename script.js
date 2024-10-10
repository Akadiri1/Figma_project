document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll('.faqpanelQuestion');
    
    faqQuestions.forEach((faq, index) => {
        const button = faq.querySelector('.iconDivFaq'); // Select the button
        const answer = faq.querySelector('.faqpanelAnswerHide'); // Select the hidden answer
        const iconImage = button.querySelector('img'); // Select the image inside the button

        // For the first FAQ, keep it open by default and set the icon to "closing"
        if (index === 0) {
            answer.style.display = "block"; // First one is shown
            iconImage.src = "assets/images/vector2.png"; // Set to closing icon
        } else {
            answer.style.display = "none"; // All others are hidden by default
        }

        button.addEventListener('click', function () {
            if (answer.style.display === "block") {
                answer.style.display = "none"; // Hide answer
                iconImage.src = "assets/images/Icon3.png"; // Show the opening icon
            } else {
                answer.style.display = "block"; // Show answer
                iconImage.src = "assets/images/vector2.png"; // Show the closing icon
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".partners img");
    let currentIndex = 0;
    const totalImages = images.length;
    const slideWidth = images[0].offsetWidth;
    let interval;

    function moveToNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      images.forEach((img, index) => {
        img.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      });
    }

    function startAutoSlide() {
      interval = setInterval(moveToNextImage, 2000); // Slide every 2 seconds
    }

    function stopAutoSlide() {
      clearInterval(interval);
    }

    // Start sliding automatically
    startAutoSlide();

    // Pause on hover, resume on mouse leave
    images.forEach(img => {
      img.addEventListener("mouseenter", stopAutoSlide);
      img.addEventListener("mouseleave", startAutoSlide);
    });

    // Adjust on window resize
    window.addEventListener("resize", function () {
      images.forEach((img, index) => {
        img.style.transform = `translateX(-${currentIndex * images[0].offsetWidth}px)`;
      });
    });
  });

document.getElementById("hamburgerIcon").addEventListener("click", function() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.add("show");
  
    // Animate list items when the menu is shown
    const menuItems = navMenu.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, 100 * index); // Delay each item for a slight staggered effect
    });
  });
  
  document.getElementById("cancelIcon").addEventListener("click", function() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("show");
  
    // Hide list items when the menu is closed
    const menuItems = navMenu.querySelectorAll('li');
    menuItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-50px)';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const afterHeaders = document.querySelector(".afterHeaders");
    afterHeaders.classList.add("visible");
  });
  
  window.addEventListener("scroll", function() {
    const video = document.querySelector(".youtube-video");
    const videoPosition = video.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (videoPosition < screenPosition) {
        video.classList.add("visible");
    }
});

window.addEventListener("scroll", function() {
    const flexBoxes = document.querySelectorAll(".flexBox");

    flexBoxes.forEach(function(flexBox) {
        const flexBoxPosition = flexBox.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (flexBoxPosition < screenPosition) {
            flexBox.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", function() {
    const coursesFlexItems = document.querySelectorAll(".coursesFlex");

    coursesFlexItems.forEach(function(flexItem) {
        const flexItemPosition = flexItem.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (flexItemPosition < screenPosition) {
            flexItem.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", function() {
    const pricingBoxItems = document.querySelectorAll(".pricingBoxFlex");

    pricingBoxItems.forEach(function(boxItem) {
        const boxItemPosition = boxItem.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Adjust this value to control when the animation triggers

        if (boxItemPosition < screenPosition) {
            boxItem.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", function() {
    const faqDisplayBoxes = document.querySelectorAll(".faqDisplayBox");

    faqDisplayBoxes.forEach(function(box) {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Adjust to control when the animation triggers

        if (boxPosition < screenPosition) {
            box.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", function() {
    const footerBox = document.querySelector(".footerBox");
    const footerPosition = footerBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Adjust to control when the animation triggers

    if (footerPosition < screenPosition) {
        footerBox.classList.add("visible");
    }
});

// script.js
window.onload = function() {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    // Hide the preloader after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 300);
};


document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.logintestimonialDisplayBox');
    let currentIndex = 0;

    // Function to update active testimonial
    function updateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            if (index === currentIndex) {
                testimonial.style.display = 'block'; // Show the active testimonial
                setTimeout(() => {
                    testimonial.classList.add('active'); // Add active class for fade-in
                }, 10); // Delay to allow display to take effect
            } else {
                testimonial.classList.remove('active'); // Remove active class for fade-out
                testimonial.style.display = 'none'; // Hide non-active testimonials
            }
        });
    }

    // Left button click event
    document.getElementById('leftButton').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1; // Wrap around
        updateTestimonials();
    });

    // Right button click event
    document.getElementById('rightButton').addEventListener('click', function () {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0; // Wrap around
        updateTestimonials();
    });

    // Initial display
    updateTestimonials();
});
