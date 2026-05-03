$(function(e,t){"use strict";
	function n(e){e.preventDefault(),r
		.set($(".search-box")
		.val()
		.trim())
		.goToLocation("/search")}
		var r=new t;$(".search").on("submit",n)}(utils,Query)),
		$(function(){function e()
			{$nav
			.removeClass("drawer-out"),$blackOut
			.removeClass("showing")}function t(e){$nav
			.addClass("drawer-out"),$blackOut
			.addClass("showing"),e
			.preventDefault()}$nav=$("nav"),$blackOut=$(".black-out"),e(),$(".menu-icon").on("click",
				function(e){t(e)}),$("nav a").on("click",e),$blackOut.on("click",e)}),
				$(function(){$("pre")
				.each(function(){$this=$(this),$this
					.html($this.html()
					.trim())})}),$(function(){$(".posts li")
					.each(function(){$this=$(this),$this
					.css("cursor","pointer"),$this.on("click",
					function(){document.location=$(this).find("a")[0].href})})});


