"use strict";$(document).ready(function(){if($("#individual-blog-entry").length){var t=$(".rich-text").find("h2");if(t.length){$(".post-sidebar__header").css("opacity",1);var i=t.map(function(t,i){var e=$(i).text(),a=e.split(" ").join("-");return $(i).attr("id",a),'<a class="post-sidebar__item" href="#'+a+'">'+e+"</a>"}).get().join("");$("#individual-blog-entry-sidebar").append(i)}$(".post-sidebar__item").click(function(t){$(".post-sidebar__item").removeClass("active"),$(t.target).addClass("active")})}});