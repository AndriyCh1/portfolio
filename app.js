const sections  = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
  // Button click active class
  sectBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      let currentBtn = document.querySelectorAll('.active-btn');
      if (currentBtn[0]) {
        currentBtn[0].classList.remove('active-btn');
      }
      this.classList.add('active-btn');
    })
  })

  // Sections Active class
  sectBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.dataset.id;

      // hide other sections
      sections.forEach(section => {
        section.classList.remove('active');
      })

      const element = document.getElementById(id);
      if (element) {
        element.classList.add('active');
      }
    })
  })
}

document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
})

PageTransitions();

