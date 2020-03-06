let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});




jQuery(document).ready(function($) {

  //Count nr. of square classes
  var countSquare = $('.square').length;

  //For each Square found add BG image
  for (i = 0; i < countSquare; i++) {
    var firstImage = $('.square').eq([i]);
    var secondImage = $('.square2').eq([i]);

    var getImage = firstImage.attr('data-image');
    var getImage2 = secondImage.attr('data-image');

    firstImage.css('background-image', 'url(' + getImage + ')');
    secondImage.css('background-image', 'url(' + getImage2 + ')');
  }

});




var btn = document.getElementById("btn");

window.addEventListener('scroll',function(){
  'use strict';

  if ( scrollY > 1200 )
  {
    btn.style.display ="block"
  }
  else
  {
    btn.style.display ="none"
  }
});

btn.onclick = function(){
  'use strict';
  var count =0;

  var x = setInterval(function(){
    'use strict';

    window.scrollTo(0,scrollY-count);



    count++

    if ( scrollY ==0 )
    {
      clearInterval(x)
    }

  },20) 

  };

  var go = document.getElementById("go");

window.addEventListener('scroll',function(){
  'use strict';

  if ( scrollY > 1200 )
  {
    go.style.display ="block"
  }
  else
  {
    go.style.display ="none"
  }
});

btn.onclick = function(){
  'use strict';
  var count =0;

  var x = setInterval(function(){
    'use strict';

    window.scrollTo(0,scrollY-count);



    count++

    if ( scrollY ==0 )
    {
      clearInterval(x)
    }

  },20) 

  };


