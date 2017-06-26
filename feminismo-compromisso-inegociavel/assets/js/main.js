$(document).ready(function(){


    // NAVBAR SCROLL
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });


    // SOCIAL SHARE POP UP
    $('.social-icons a').click(function(e) {
      e.preventDefault();
    	var winWidth = 820,
    		winHeight = 520,
        winTop = (screen.height / 2) - (winHeight / 2),
        winLeft = (screen.width / 2) - (winWidth / 2);

      window.open(
    		$(this).attr("href"),
        'sharer',
        'top=' + winTop + ',' +
        'left=' + winLeft + ',' +
        'toolbar=0,status=0,' +
        'width=' + winWidth + ','+
        'height=' + winHeight
      );
    });

    if (screen.width > 768) {
      var mundoHeight = 74;
    } else {
       var mundoHeight = 36;
    }

    $('.mundo').css('clip', 'rect(0, auto, ' + mundoHeight +'px, 0)');
    $('.mulheres').css('clip', 'rect(' + mundoHeight +'px, auto , auto, 0)');

    $( window ).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var screenHeight = window.innerHeight;
      var elementOffset = $('.mundo').offset().top;
      var currentElementOffset = (elementOffset - scrollTop);

      if (screenHeight * 0.5 > currentElementOffset) {
          $('.mundo').css('clip', 'rect(0, auto, ' + mundoHeight*0.0 +'px, 0)');
          $('.mulheres').css('clip', 'rect(' + mundoHeight*0.0 +'px, auto, auto, 0)');
      // } else if (screenHeight * 0.5 > currentElementOffset) {
      //     var percentage = ((currentElementOffset * 160 / screenHeight * 0.2) * 5 - 20) * 0.01;
      //     $('.mundo').css('clip', 'rect(0, auto, ' + mundoHeight * percentage +'px, 0)');
      //     $('.mulheres').css('clip', 'rect(' + mundoHeight * percentage +'px, auto , auto, 0)');
      } else {
        $('.mundo').css('clip', 'rect(0, auto, ' + mundoHeight +'px, 0)');
        $('.mulheres').css('clip', 'rect(' + mundoHeight +'px, auto , auto, 0)');
      }
    });




    // COVER VIDEO
    var coverPlayer = $('#cover-video');

    if (screen.width > 576) {
      console.log(coverPlayer);
      coverPlayer[0].poster = 'assets/video/think_eva-reports-desktop.jpg';
      coverPlayer[0].children[0].src = 'assets/video/think_eva-reports-desktop.mp4';
      coverPlayer[0].children[1].src = 'assets/video/think_eva-reports-desktop.ogg';
      coverPlayer[0].load();
    } else {
      window.enableInlineVideo(coverPlayer[0], {everywhere: true});
    }

    coverPlayer.on('ready', function () {
      coverPlayer.play();
    });

    var overlay = $('.cover-overlay');

    coverPlayer.on('playing', function () {
      overlay.addClass('transparent');
      // overlay.css('height', cov    erPlayer[0].clientHeight + "px" );
    });
    coverPlayer.on('ended', function () {
      // overlay.css('height', coverPlayer[0].clientHeight + "px" );
      overlay.removeClass('transparent');
    });


    // CARROUSSELs
    $('.carrossel-01').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.carrossel-02').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.carrossel-03').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.slide-action').click(function(e){
      $(this).parent().toggleClass('active');
      $(this).parent().parent().parent().parent().parent().toggleClass('info-active');
    })

    $('.nav-menu').click(function(e){
      $('.mobile-menu').toggleClass('active');
    })



    //TIMELINE
    $('.timeline-nav').slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      focusOnSelect: true,
      asNavFor: '.timeline-content',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.timeline-content').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.timeline-nav',
    });

    $('.timeline-content .slick-dots').draggable({ axis: "x" });


    // var tag = document.createElement('script');
    //
    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    $('.timeline-content').on('beforeChange', function(event, slick, currentSlideIndex, nextSlideIndex){
      var nextSlide = slick.$slides[nextSlideIndex];
      var currentSlide = slick.$slides[currentSlideIndex];
      var nextSlideDotsOffset = slick.$dots["0"].children[nextSlideIndex].offsetLeft;

      if (nextSlideDotsOffset > window.innerWidth / 2 && window.innerWidth < 768) {
        var leftOffset = (window.innerWidth / 2) - nextSlideDotsOffset - 24;
        $('.timeline-content .slick-dots').css({left: leftOffset});
      }

      // if (nextSlide.classList["0"] == "video-content") {
      //   var videoSlide = nextSlide.children["0"].children["0"];
      //   var playButton = videoSlide.children["0"].children["0"];
      //   $(playButton).trigger("play");
      // }
      //
      // if (currentSlide.classList["0"] == "video-content") {
      //   var currentSlideIframe = currentSlide.children["0"].children["0"].children["0"];
        // console.log(currentSlide);
        // console.log(currentSlideIframe);
        // var player = new YT.Player(currentSlideIframe);
        // console.log(player);
        // player.stopVideo();
      // }

    });



    //INFO 02
    $('#info-radial > div').hover(
      function(e) {
        $('.' + this.classList["0"]).addClass('focus');
        $('.info-02 .content .tooltips').addClass('focus');
      },
      function(e) {
        $('.' + this.classList["0"]).removeClass('focus');
        $('.info-02 .content .tooltips').removeClass('focus');
      }
    );


    //INFO 03
    $('.info-03 .stakeholder').hover(
      function(e) {
        $(this).parent().addClass('focus');
      },
      function(e) {
        $(this).parent().removeClass('focus');
      }
    );
    $('.especialistas div').hover(
      function(e) {
        $(this).parent().addClass('focus');
      },
      function(e) {
        $(this).parent().removeClass('focus');
      }
    );

    //INFO04
    $('.info-04-slide').slick({
      dots: false,
      infinite: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    $('.info-04-slide-2').hover(
      function(e) {
        $('.info-04').addClass('focus');
        // $('.info-04 button').addClass('slick-prev');
        // $('.info-04 button').removeClass('slick-next');
      },
      function(e) {
        $('.info-04').removeClass('focus');
        // $('.info-04 button').removeClass('slick-prev');
        // $('.info-04 button').addClass('slick-next');
      }
    );


    // Mailchimp Submit
    $('#mailchimp').submit(function(e) {
      $('#mailchimp .button').val( 'enviado' );
      $('#mailchimp .button').addClass('sent');
    });



    $('.lazyYT').lazyYT();

    // SCROLL TOP
    $(".scroll-top").click(function(e) {
	    e.preventDefault();
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      $('.mobile-menu').removeClass('active');
  	});

    // SCROLL TO
    $(".bullet-nav li").click(function(e) {
	    e.preventDefault();
      id = this.id.replace("link-", "");
  		var offset = $("#"+id).offset().top - 60;
      $('html,body').animate({ scrollTop: offset }, 'slow');
  	});

    $('.nav-item').each(function(i) {
      var position = $(this).position();
      $(this).scrollspy({
        min: position.top,
        max: position.top + $(this).height(),
        onEnter: function(element, position) {
          $("#link-" + element.id + "-mobile").addClass('active');
          $("#link-" + element.id).addClass('active');
        },
        onLeave: function(element, position) {
          $("#link-" + element.id + "-mobile").removeClass('active');
          $("#link-" + element.id).removeClass('active');
        }
      });
    });

    var firstSection = "o-que-esta-acontecendo";
    $("#link-" + firstSection + "-mobile").addClass('active');
    $("#link-" + firstSection).addClass('active');

});
