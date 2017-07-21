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
      coverPlayer[0].poster = '/feminismo-compromisso-inegociavel/assets/video/think_eva-reports-desktop.jpg';
      coverPlayer[0].children[0].src = '/feminismo-compromisso-inegociavel/assets/video/think_eva-reports-desktop.mp4';
      coverPlayer[0].children[1].src = '/feminismo-compromisso-inegociavel/assets/video/think_eva-reports-desktop.ogg';
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
    coverPlayer.bind('pause ended', function () {
      // let overlayBg = screen.width > 576 ? '/feminismo-compromisso-inegociavel/assets/video/think_eva-reports-desktop.jpg' : '/feminismo-compromisso-inegociavel/assets/video/think_eva-reports-mobile.jpg';
      // overlay.css('background-image', overlayBg );
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

    var stWidth = $('.carrossel-02 .slick-slide').width();
    $('.carrossel-02 .slick-slide').css('height',stWidth + 'px' );

    $('.carrossel-02').on('afterChange beforeChange init', function(event, slick, currentSlideIndex, nextSlideIndex){
      var stWidth = $('.carrossel-02 .slick-slide').width();
      $('.carrossel-02 .slick-slide').css('height',stWidth + 'px' );
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

    $('.carrossel-03').on('beforeChange', function(event, slick, currentSlideIndex, nextSlideIndex){
      var nextSlide = slick.$slides[nextSlideIndex];
      var currentSlide = slick.$slides[currentSlideIndex];
      autoPlay(nextSlide.children["0"]);
      stopPlay(currentSlide.children["0"]);

    });

    $('.carrossel-03 .slick-active').click(function(e) {
      console.log(e);
      e.stopPropagation();
    })

    $('.slide-action').click(function(e){
      $(this).parent().toggleClass('active');
      $(this).parent().parent().parent().parent().parent().toggleClass('info-active');
    })

    $('.nav-menu').click(function(e){
      $('.mobile-menu').toggleClass('active');
    })

    $('.mosaico-action').click(function(e){
      $(this).parent().parent().toggleClass('active');
    })


    // REFS
    $('.refs').click(function(e){
      $('#refs').toggleClass('active');
      if ($('#refs').hasClass('active')) {
        var offset = $('#refs').offset().top - 60;
        $('html,body').animate({ scrollTop: offset }, 'slow');
      }
    })



    //TIMELINE
    $('.timeline-nav').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      centerMode: true,
      infinite: false,
      focusOnSelect: true,
      asNavFor: '.timeline-content',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
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
      var dotsOffset = slick.$dots["0"].offsetLeft;
      var nextSlideDotsOffset = slick.$dots["0"].children[nextSlideIndex].offsetLeft;
      var offsetScreen = window.innerWidth < 768 ? 40 : 140;

      if ((nextSlideDotsOffset > (dotsOffset / 2) - 140 && window.innerWidth > 768)) {
        var leftOffset = (dotsOffset / 2) - nextSlideDotsOffset - 70;
        if ($('#timelineStyle')) { $('#timelineStyle').remove() }
        $( "<style id='timelineStyle'>.timeline .slick-dots li { transform: translateX(" + leftOffset + "px); }</style>" ).insertBefore( ".timeline" );
      } else if (nextSlideDotsOffset > (window.innerWidth / 2)) {
        var leftOffset = (window.innerWidth / 2) - nextSlideDotsOffset - 20;
        if ($('#timelineStyle')) { $('#timelineStyle').remove() }
        $( "<style id='timelineStyle'>.timeline .slick-dots li { transform: translateX(" + leftOffset + "px); }</style>" ).insertBefore( ".timeline" );
      }

      if (nextSlide.classList["0"] == "video-content") autoPlay(nextSlide.children["0"].children["0"]);
      if (currentSlide.classList["0"] == "video-content") stopPlay(currentSlide.children["0"].children["0"]);

    });

    function autoPlay(videoSlide) {
      console.log('videoSlide', videoSlide);
      var playButton = videoSlide.children["0"].children["0"];
      $(playButton).trigger("play");
    }

    function stopPlay(currentSlideIframe) {
      console.log('currentSlideIframe', currentSlideIframe);
      currentSlideIframe.children["0"].remove();
      $(currentSlideIframe).removeClass( "lazyYT-container lazyYT-video-loaded" );
      $(currentSlideIframe).lazyYT();
    }


    //INFO 01
    var info01item = $('.info-01 .item');
    var initialCount = 1;
    var timing = 1500;

    function changeItem() {
      if (initialCount > 7) { initialCount = 0; previousCount = 7; }
      else { previousCount = initialCount - 1; }
      $(info01item[previousCount]).removeClass('active');
      $(info01item[initialCount]).addClass('active');
      initialCount++;
    }

    $(info01item[0]).addClass('active');
    setInterval(changeItem, timing);
    setTimeout(function () { timing = 1000 }, 10500);


    //INFO 02
    $('.radial-5').addClass('focus');

    $('#info-radial > div').hover(
      function(e) {
        if (e.target.classList["0"] != 'radial-5') { $('.radial-5').removeClass('focus'); };
        $('.' + this.classList["0"]).addClass('focus');
        $('.info-02 .content .tooltips').addClass('focus');
        if (e.target.classList["0"] == 'radial-1') { $('.info-02 .speech').addClass('active'); };
      },
      function(e) {
        $('.' + this.classList["0"]).removeClass('focus');
        $('.info-02 .content .tooltips').removeClass('focus');
        if (e.target.classList["0"] == 'radial-1') { $('.info-02 .speech').removeClass('active'); };
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
    $('.info-04-title').slick({
      dots: false,
      infinite: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: '.info-04-slide',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.info-04-slide').slick({
      dots: true,
      infinite: false,
      arrows: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: '.info-04-title',
    });

    $('.info-04').click(function(e) {
      clearInterval(info04Animation);
    });

    $('.info-04 button').click(function(e) {
      clearInterval(info04Animation);
      $('.info-04-slide').slick('slickNext');
    });

    function changeInfo04slide() {
      $('.info-04-slide').slick('slickNext');
    }

    var info04Animation = setInterval(changeInfo04slide, 4000);


    // $('.info-04-slide-2').hover(
    //   function(e) {
    //     $('.info-04').addClass('focus');
    //     // $('.info-04 button').addClass('slick-prev');
    //     // $('.info-04 button').removeClass('slick-next');
    //   },
    //   function(e) {
    //     $('.info-04').removeClass('focus');
    //     // $('.info-04 button').removeClass('slick-prev');
    //     // $('.info-04 button').addClass('slick-next');
    //   }
    // );


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
    $(".link-menu li").click(function(e) {
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

    var firstSection = "cover";
    if ($(window).scrollTop() < 100) {
      $("#link-" + firstSection + "-mobile").addClass('active');
      $("#link-" + firstSection).addClass('active');
    }

});
