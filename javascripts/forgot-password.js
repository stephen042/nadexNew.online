"use strict";$(document).ready(function(){var o=$("#js-forgot-password-form").data("resetlivepasswordurl"),a=$("#js-forgot-password-form").data("resetdemopasswordurl");"live"===getParameterByName("account")&&($(".js-forgot-password-form-selector[data-account=demo]").removeClass("active"),$(".js-forgot-password-form-selector[data-account=live]").addClass("active"));var r=!1,e=/\S+@\S+\.\S+/,t=function(o){var a=$("#"+o),r=$(a).val(),t=!1;return("email"!==o||e.test(r))&&r||(t=!0),t?$(a).closest(".form__input-group").addClass("error"):$(a).closest(".form__input-group").removeClass("error"),t};$("#email").keyup(function(){r&&t(this.id)}),$("#js-forgot-pw-birthday").on("change","#month, #day, #year",function(){r&&t(this.id)});var s=["email"],i=["email","month","day","year"];$("#js-forgot-password-form").submit(function(e){e.preventDefault();var n="demo"===$(".js-forgot-password-form-selector.active").data().account,d=$("#email").val(),c=$("#year").val(),l=!0;if((n?s:i).forEach(function(o){t(o)&&(l=!1)}),r=!0,l){var f=$("#day").val();1===f.length&&(f="0"+f);var m=$("#month").val();1===m.length&&(m="0"+m);var p=c+"-"+m+"-"+f,u={demo:n.toString(),email:d};n||(u.dateOfBirth=p);var v=n?a:o;$(".loader-overlay-container").show(),$.ajax({method:"POST",url:v+"?q="+Math.random(),data:JSON.stringify(u),headers:{Accept:"application/json; charset=UTF-8","Content-Type":"application/json; charset=UTF-8"}}).done(function(){location="/response/app-username-sent"}).fail(function(){location="/response/app-unexpected-error"})}}),$(".js-forgot-password-form-selector").click(function(){$(".si__form-info").toggle(!0),"live"===$(this).data("account")?($("#js-forgot-pw-birthday").fadeIn(),$("#js-forgot-pw-birthday").css("display","flex"),$(".si__form-header").html("Reset your Live password")):($("#js-forgot-pw-birthday").fadeOut(),$(".si__form-header").html("Reset your Demo password")),$(".js-forgot-password-form-selector").removeClass("active"),$(this).addClass("active")})});