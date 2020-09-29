const burger = document.querySelector ('.burger');
const nav = document.querySelector ('.navlinks');

burger.addEventListener('click', function() {
    nav.classList.toggle('active');
});

function change(x) {
    x.classList.toggle("change");
}

new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'action-center', 'available-at'],
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});