// make the tabs element stick to top if it has the class `is-sticky`
// only one sticky element is supported at a time

carousel = function(box){
    var next = box.querySelector('.next');
    var prev = box.querySelector('.prev');
    var items = box.querySelectorAll('.carousel-slider li');
    var page = box.querySelector('.page');
    var counter = 0;
    var amount = items.length;
    var current = items[0];

    function navigate(direction) {
        current.classList.remove('current');
        counter = counter + direction;
        if (direction === -1 &&
            counter < 0) {
            counter = amount - 1;
        }
        if (direction === 1 &&
            !items[counter]) {
            counter = 0;
        }
        current = items[counter];
        current.classList.add('current');

        page.textContent = (counter + 1) + '/' + amount;
    }

    next.addEventListener('click', function(ev) {
        navigate(1);
    });

    prev.addEventListener('click', function(ev) {
        navigate(-1);
    });

    navigate(0);
};

(function() {
    var carousels = document.querySelectorAll('.carousel-wrap');

    if (!carousels) {
        return;
    }

    for (var i =  0; i < carousels.length; i++) {
        var el = carousels[i];
        carousel(el);
    }
})();
