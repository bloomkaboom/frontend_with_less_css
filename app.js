var pics = [
    "imgs/sf1.jpg",
    "imgs/sf2.jpg",
    "imgs/sf3.jpeg",
    "imgs/sf4.jpg",
    "imgs/sf5.jpg",
    "imgs/sf6.jpeg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 6) {
        counter = 0;
    };
    img.src = pics[counter];
    counter = counter +1;
});
