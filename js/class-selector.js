// !Place where we want to place the big image.

// ?Variable for big image in which i want small image to get fit in.
var big_image = document.getElementById('big-image');

// ?variable for small images.Img that you want in place of big image.
var small_image = document.getElementsByClassName('small-image');

// ?Index variable.
var p;

// ?document.getElementById('big-image').addEventListener('click', function () {

// !For...Loop...This is the or loop syntax.
for (let p = 0; p < small_image.length; p++) {
    small_image[p].addEventListener('click', function () {
        big_image.src = this.src;
    })

}

// !Steps:------

// 1. Create a variable for the place where you want to put the small Image.(ex.big_image variable).

// 2. Next create a variable for the small image .img which you want at the place of big image.(ex. small_image variable).

// 3. Create a index variable.(ex.p)

// 4. Create a for loop syntax.

// 5. 

