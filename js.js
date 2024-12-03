const btnColor = document.getElementById('btn');
btnColor.onclick = yellow;

function yellow() {
  document.body.style.backgroundColor = 'yellow';
}

const purple = document.getElementById('purple');
purple.onclick = function purple() {
  document.body.style.backgroundColor = 'purple';   
}


document.getElementById('green').addEventListener('click', function green() {
  document.body.style.backgroundColor = 'green';
});


const black = document.getElementById('black');
black.addEventListener('click', function black() {
    document.body.style.backgroundColor = 'black';
});

document.getElementById('sectionn').addEventListener('click', function section(){
  document.body.style.backgroundColor = 'green';
});


const brown = document.getElementById('brown');
brown.addEventListener('click', function brown() {
  document.body.style.backgroundColor = 'brown';
});

const crimson1 = document.getElementById('crimson');
crimson1.onclick = crimson;

function crimson() {
  document.body.style.backgroundColor = 'crimson';
};

const chartreuseColor = document.getElementById('chartreuse');
chartreuseColor.onclick = function chartreuse() {
  document.body.style.backgroundColor = 'chartreuse'
}
