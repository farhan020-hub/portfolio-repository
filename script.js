// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



   const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });

      $("html, body").animate({
        scrollTop: 0
      }, 1000); // increase the duration to 1000ms (1 second)
    });



    const form = document.querySelector('form');
    const submitButton = form.querySelector('input[type="submit"]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get the form data
      const formData = new FormData(form);

      // Send an email using the form data
      const mailtoLink = `mailto:adamfarhan831@gmail.com?subject=${formData.get('subject')}&body=${formData.get('message')}`
      window.location.href = mailtoLink;
    });

    console.log
 
