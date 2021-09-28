$(document).ready(function(){

	

	var characterItem = $('.character-list__item');
	characterItem.each(function(){
			if($(this).hasClass('active')){
				var item = $(this).attr('data-id-item');
				item = '.'+item;
				$(item).addClass('active');
			}
		})
	characterItem.click(function(){
		characterItem.each(function(){
			$(this).removeClass('active');
		})
		$('.character-body__wrapper').each(function(){
			$(this).removeClass('active');
		})
		$(this).addClass('active');
		var item = $(this).attr('data-id-item');
		item = '.'+item;
		$(item).addClass('active');
	})


	$('.header-burger').click(function(){
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$(this).toggleClass('active');
	})
	$('.burger-bg').click(function(){
		$('.burger-menu').removeClass('active');
		$('body').removeClass('lock');
		$('.header-burger').removeClass('active');
	})

	var burger_height = $('.burger-menu').outerHeight();
	jQuery.fn.reverse = function() {
    return this.pushStack(this.get().reverse(), arguments);
	}; 
	var w = $(window).width();
	if(w<768){
		var headerLink = $('.header-top__link');
		headerLink.each(function(){
			$(this).appendTo($('.burger-menu__list'));
		})
		$('.team-body').slick({
		dots:true,
		arrows:false,
		slidesToShow:2,
		slidesToScroll:2,
		

	})
	}else{
		var headerLink = $('.header-top__link');
		headerLink.reverse().each(function(){
			$(this).prependTo($('.header-list'));
		})
		$('.team-body').slick('unslick');
	}
})
$(window).resize(function(){
	var w = $(window).width();
	if(w<768){
		var headerLink = $('.header-top__link');
		headerLink.each(function(){
			$(this).appendTo($('.burger-menu__list'));
		})
		$('.team-body').slick({
		dots:true,
		arrows:false,
		slidesToShow:2,
		slidesToScroll:2,


	})
	}else{
		var headerLink = $('.header-top__link');
		headerLink.reverse().each(function(){
			$(this).prependTo($('.header-list'));
		})
		$('.team-body').slick('unslick');
	}
})

