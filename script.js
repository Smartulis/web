//cursor

document.addEventListener('DOMContentLoaded', function () {
    const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');
    const body = document.body;

    document.addEventListener('mouseenter', () => {
        site_wide_cursor.style.display = 'block';
        body.style.cursor = 'none';
    });

    document.addEventListener('mouseleave', () => {
        site_wide_cursor.style.display = 'none';
        body.style.cursor = 'auto';
    });

    document.addEventListener('mousemove', TrackCursor);

    document.addEventListener('mousedown', (evt) => {
        evt.preventDefault();
        site_wide_cursor.classList.add('active');


// Check if the clicked element is a label or input
        const clickedLabel = findClickedLabel(evt.target);
        if (clickedLabel) {
            handleLabelClick(clickedLabel);
        }

        console.log('Custom cursor clicked!');
    });

    document.addEventListener('mouseup', () => {
        site_wide_cursor.classList.remove('active');
    });

    function TrackCursor(evt) {
        const w = site_wide_cursor.clientWidth;
        const h = site_wide_cursor.clientHeight;

        site_wide_cursor.style.transform = `translate(${evt.clientX - w / 2}px, ${evt.clientY - h / 2}px)`;
    }

    function findClickedLabel(target) {
        // Check if the clicked element is a label or input field
        const labelClasses = ['vardas', 'pastas', 'telefono', 'zinute'];
        for (const className of labelClasses) {
            if (target.classList.contains(className) || target.classList.contains(`${className}label`)) {
                return document.querySelector(`.${className}label`);
            }
        }
        return null;
    }

    function handleLabelClick(label) {
        // Make the label clickable and enable text input
        label.contentEditable = true;
        label.focus();

        // Add an event listener to reset contentEditable when the user clicks outside the label
        document.addEventListener('mousedown', function resetLabelEditing(e) {
            if (!label.contains(e.target)) {
                label.contentEditable = false;
                document.removeEventListener('mousedown', resetLabelEditing);
            }
        });
    }

    // Images slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000);
    }

});

function toggleMenu() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navList = document.querySelector('.nav-list');
  
    // Toggle the active class on each navigation link
    navLinks.forEach(link => link.classList.toggle('active'));
  
    // Toggle the display of the navigation list
    navList.classList.toggle('show');
  }
  
  function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggleMenu() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}