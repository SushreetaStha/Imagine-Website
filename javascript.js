var sliders = document.getElementsByClassName('slider');
var likeBtn = document.getElementById('likeBtn');
var saveBtn = document.getElementById('saveBtn');
var index = 0;
var timeout;

function next() {
  index++;
  clearTimeout(timeout);
  if (index >= sliders.length) {
    index = 0;
  }
  display_slider();
}

function pre() {
  index--;
  clearTimeout(timeout);
  if (index < 0) {
    index = sliders.length - 1;
  }
  display_slider();
}

function display_slider() {
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }
  sliders[index].style.display = 'block';
  timeout = setTimeout(next, 3000);
}

display_slider();

saveBtn.addEventListener('click', () => {
  setInterval(() => {
    saveBtn.innerHTML = 'Saved';
  }, 200);
});

likeBtn.addEventListener('click', () => {
  setInterval(() => {
    likeBtn.style.backgroundColor = 'rgb(175, 58, 58)';
  }, 200);
});
