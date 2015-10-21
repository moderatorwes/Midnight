/*
 * jQuery v1.9.1 included
 */



$(document).ready(function() {
  
  //Fix article icon
 // $('a.article-vote-up.article-voted').hide();
  
  //Remove Sign Out
  $("#user-menu").find('li:last-child').remove();
  
 // $('div.pt').tubular({videoId: 'dLFBY18gi1Q'});
  
  $('article-more-questions a:contains("Submit a request")').text('Submit a ticket');
  
  

	//IE 10 Windows Phone fix
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style')
		msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
		document.querySelector('head').appendChild(msViewportStyle)
	}

	//alignment of Community Section
	if (window.location.href.indexOf("communities") > -1) {
		$('nav.sub-nav').wrap("<div class='container'></div>");
		$('nav.community-nav').wrap("<div class='container'></div>");
		$('div.main-column').wrap("<div class='container'></div>");
		$('div.clearfix').wrap("<div class='container'></div>");
	}

	// change wording inside of Search
	$('#query').attr('placeholder', 'Search our Help Center');

	//Trending Questions
	$("h2:contains('Trending questions')").text('Hot Topics');

	//Change text of Promoted Articles
	$("h3:contains('Promoted articles')").text('Important Information');

	//Rename Community to Our Community on Search Pages
	$("h2.search-results-subheading:contains('Community')").replaceWith('<h2>Our Community <a href="/hc/communities/public/topics" class="search-results-subheading-link"> browse</a></h2> ');
	$(".search-results-column a:contains('browse Community')").text('browse Our Community');

	//Hide the No vote in Articles
	$('a.article-vote-down').hide();

	//Only show 3 articles
	if (document.location.href.indexOf('section') == -1) {
		var categories = $('ul.article-list');
		for (var j = categories.length - 1; j >= 0; j--) {
			var articles = $(categories[j]).find('li'), nativeMore = $(categories[j]).siblings('.see-all-articles');
			if (articles.length > 3) {
				for (var k = 3; k < articles.length; k++) {
					$(articles[k]).hide();
				}
				var moreLink = $(categories[j]).parent().find('h3 a').attr('href'), linkText = '';
				if (articles.length <= 6 && nativeMore.length == 0) {
					linkText += "See all " + articles.length + " articles";
				}
				$("<a class='see-all-articles' href=" + moreLink + ">" + linkText + "</a>").insertAfter($(categories[j]));
			}
		}
	}

	//DEFAULT ZENDESK
	// social share popups
	$(".share a").click(function(e) {
		e.preventDefault();
		window.open(this.href, "", "height = 500, width = 500");
	});

	// toggle the share dropdown in communities
	$(".share-label").on("click", function(e) {
		e.stopPropagation();
		var isSelected = this.getAttribute("aria-selected") == "true";
		this.setAttribute("aria-selected", !isSelected);
		$(".share-label").not(this).attr("aria-selected", "false");
	});

	$(document).on("click", function() {
		$(".share-label").attr("aria-selected", "false");
	});

	// show form controls when the textarea receives focus
	$(".answer-body textarea").one("focus", function() {
		$(".answer-form-controls").show();
	});

	$(".comment-container textarea").one("focus", function() {
		$(".comment-form-controls").show();
	});
	

}); 
