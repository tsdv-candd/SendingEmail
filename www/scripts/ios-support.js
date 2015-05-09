// IOS back button

$(document).ready(function() {
    if (navigator.userAgent.match(/(ipad.*|iphone.*|ipod.*);.*CPU.*OS(7|8)_\d/i)) {
		$("body").addClass("ios7");
		$("body").append('');
	}
});
