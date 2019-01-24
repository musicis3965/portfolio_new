(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js7').attr('src', (dpi>1) ? 'images/img_3623-584.jpg' : 'images/img_3623-292.jpg');
};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js18').unveil(50);
$('.js21 source').unveil(50);
$('.js20').unveil(50);
$('.js22 source').unveil(50);
$('.js11').unveil(50);
$('.js23 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.60s", "0.00s", 1, 100);
wl.addAnimation($('.js2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js5')[0], "2.00s", "1.20s", 1, 100);
wl.addAnimation($('.js6')[0], "3.00s", "0.00s", 1, 100);
wl.addAnimation($('.js7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js8')[0], "1.00s", "2.40s", 1, 100);
wl.addAnimation($('.js9')[0], "1.00s", "1.90s", 1, 100);
wl.addAnimation($('.js10')[0], "2.00s", "1.20s", 1, 100);
wl.addAnimation($('.js11')[0], "3.00s", "0.00s", 1, 100);
wl.addAnimation($('.js12')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js13')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js14')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js15')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js16')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js17')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js18')[0], "3.00s", "0.00s", 1, 100);
wl.addAnimation($('.js19')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js20')[0], "3.00s", "0.00s", 1, 100);
wl.start();

});