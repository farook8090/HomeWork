// Image change on click.
// let key = document.getElementsByClassName('key');
// console.log(key);---worked.

// where i want to display.
var big_image = document.getElementById('big-image');

// key to display.
var key = document.getElementsByClassName('key');

// from where i want to display img.
// created a pics array.
var pics = {
    "img-alphabet:": ["q.jpg", "w.jpg", "e.jpg", "r.jpg", "t.jpg", "y.jpg"]
};

var p;

// var key = document.getElementsByClassName('key');

// !For...Loop...This is the or loop syntax.
for (let p = 0; p < key.length; p++) {
    key[p].addEventListener('click', function () {
        alert("Hello")
        big_image.src = pics.src;
        // big-image.src = small_image.src.replace();
        // document.getElementsByid(big-image).innerHTML.style.display.block;
        document.getElementsByClassName('')
    })

}