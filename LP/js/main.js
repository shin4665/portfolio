jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Javascript Chart
		if($('#javascript').length) {

			var doughnutData = [{
	        value: 40,
	        color: "#74cfae"
	      },
	      {
	        value: 60,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
		};

		// Bootstrap Chart
		if($('#bootstrap').length) {
			var doughnutData = [{
					value: 40,
					color: "#74cfae"
				},
				{
					value: 60,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
		}

		// WordPress Chart
		if($('#wordpress').length) {
			var doughnutData = [{
					value: 35,
					color: "#74cfae"
				},
				{
					value: 65,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);
		}

		// Photoshop Chart
		if($('#photoshop').length) {
			var doughnutData = [{
					value: 30,
					color: "#74cfae"
				},
				{
					value: 70,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);
		}
});
