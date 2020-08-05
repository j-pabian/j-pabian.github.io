document.fonts.ready.then(function() {
	$("#container").addClass("load")
});

AOS.init({
  easing: 'ease-in-quad',
  once: true
});
