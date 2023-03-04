const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const testimonialImg = document.querySelector("#testimonial-image");
const quoteText = document.querySelector(".quote-text");
const quoteName = document.querySelector(".quote-credit_name");
const quoteTitle = document.querySelector(".quote-credit_title");

const testimonials = [
  {
    name: "Tanya Sinclair",
    title: "UX Engineer",
    image: "/images/image-tanya.jpg",
    quote:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
  },
  {
    name: "John Tarkpor",
    title: "Junior Front-end Developer",
    image: "/images/image-john.jpg",
    quote:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
  },
];

let testimonialIndex = 0;

function populateTestimonial() {
  const currentTestimonial = testimonials[testimonialIndex];
  quoteName.textContent = currentTestimonial.name;
  quoteTitle.textContent = currentTestimonial.title;
  quoteText.textContent = currentTestimonial.quote;
  testimonialImg.setAttribute("src", currentTestimonial.image);
}

function incrementIndex() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  populateTestimonial();
  clearInterval(setInterval(incrementIndex, 5000));
}

function decrementIndex() {
  testimonialIndex = (testimonialIndex - 1) % testimonials.length;
  populateTestimonial();
  clearInterval(setInterval(incrementIndex, 5000));
}

window.addEventListener("load", populateTestimonial);
setInterval(incrementIndex, 5000);
increment.addEventListener("click", incrementIndex);
decrement.addEventListener("click", decrementIndex);

// save testimonial data in objects within an array
// on window load, populate the first testimonial
// when populating the testimonial, use the index counter to know where we are in the array
// populate dom elements with current testimonial data
// set an interval to increment the index every five seconds for a continuous loop
// when the index increments, add to index counter and repopulate new data, then reset the timer
// when index decrements, subtract from index counter, repopulate data, and reset timer

// TODO:
// - css
// - troubleshoot: intervals not resetting when button clicked
