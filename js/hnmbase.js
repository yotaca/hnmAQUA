/*
 * hnmSkin (http://hanamachi.com)
 * Copyright 2016 Hanamachi-Ya!
 * Licensed under the MIT license
 */

(function(d,s,id) { //facebook
	var js,fjs=d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js=d.createElement(s);
	js.id=id;
	js.src="//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.4";
	fjs.parentNode.insertBefore(js,fjs);
}(document,'script', 'facebook-jssdk'));

(function(d, s, id) { //twitter
	var js,fjs=d.getElementsByTagName(s)[0],
	p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document,'script','twitter-wjs'));


var formsrc = '<form method="post" action="#nucleus_lf" class="form-signin"><h2>ログインフォーム</h2>';
formsrc+= '<div class="loginform"><input type="hidden" name="action" value="login">';
formsrc+= '<input id="nucleus_lf_name" class="form-control" name="login" placeholder="アカウント" required autofocus>';
formsrc+= '<input type="password" id="nucleus_lf_pwd" class="form-control" name="password" placeholder="パスワード" required>';
formsrc+= '<div class="checkbox"><label for="nucleus_lf_shared">';
formsrc+= '<input type="checkbox" value="1" name="shared" id="nucleus_lf_shared">このPCを他の人と共用する</label></div>';
formsrc+= '<input type="submit" alt="ログイン" value="ログイン" class="btn btn-lg btn-primary btn-block"></div></form>';

$(function(){//jQueryhtml読み込み
	$("#hnm_login").click(function(){
		$("#nucleus_lf").removeClass('hide');
		$("#nucleus_lf").html(formsrc);
	});
	$('#btn_top').click(function () {
		$(this).blur();
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
})
