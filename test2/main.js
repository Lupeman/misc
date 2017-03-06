var slides = document.querySelectorAll('#slides .slide');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var pauseButton = document.getElementById('pause');
var playButton = document.getElementById('play');

var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);
var playing = true;



function pauseSlideshow() {
  playing = false;
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+currentSlide)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};


function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

/*nav pause/play functions*/
pauseButton.onclick = function() {
    if(playing) {
      playButton.classList.toggle('hide');
      pauseButton.classList.toggle('hide');
    pauseSlideshow();
  }
};

playButton.onclick = function() {
    if(!playing) {
      playButton.classList.toggle('hide');
      pauseButton.classList.toggle('hide');
    playSlideshow();
  }
};
