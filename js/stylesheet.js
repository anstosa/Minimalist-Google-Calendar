// ==UserScript==
// @name             Minimalist for Google Calendar
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Stylesheet construction and injection
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var css = "";

	css += "#topBar td { height: 36px !important; }\n";
	css += "input, textarea { outline: 0; margin: 1px !important; border: 1px solid !important; border-color: #585858 #B0B0B0 #B0B0B0 #B0B0B0 !important; }\n";
	css += "input:focus, textarea:focus { outline: 0; margin: 0px !important; border: 2px solid #BCF !important; }\n";
	css += "#nav:not([min ~= 'hideN']), #sidebar:not([min ~= 'hideN']) { width: " + response.o.navW + "px; }\n";
	
	// GENERAL
		if (response.o.BTN) {
			css += ".goog-imageless-button-content { color: " + response.o.BTNcolor + " !important; }\n";
			css += ".goog-imageless-button { background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNbottom + "),to(" + response.o.BTNtop + ")) !important; }\n";
			css += ".goog-imageless-button-checked { background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNtop + "),to(" + response.o.BTNbottom + ")) !important; }\n";
			css += ".goog-imageless-button-top-shadow { display: none; }\n";
			css += ".goog-imageless-button-outer-box, .goog-imageless-button { border-color: " + response.o.BTNborder + " !important; }\n";
		} else {
			css += ".goog-imageless-button-content { color: #000 !important; }\n";
			css += ".goog-imageless-button { background: -webkit-gradient(linear,0% 40%,0% 70%,from(#9f9f9),to(#ded5de)) !important; }\n";
			css += ".goog-imageless-button-checked { background: -webkit-gradient(linear,0% 40%,0% 70%,from(#ded5de),to(#9f9f9)) !important; }\n";
			css += ".goog-imageless-button-top-shadow { display: none; }\n";
			css += ".goog-imageless-button-outer-box, .goog-imageless-button { border-color: #bbb !important; }\n";
		}
		if (response.o.corners)
			css += "input, textarea { -webkit-border-radius: 5px; }\n";
		if (response.o.trans)
			css += "* { -webkit-transition-property: height, background-color, border-color, color, opacity, width; -webkit-transition-duration: .15s; -webkit-transition-timing-function: ease-out; }\n";
	// GOOGLE BAR
		if (response.o.gbar)
			css += "#gbar { display: none !important; }\n";
		if (response.o.gbarH) {
			css += "#gbarToggle { background-color: rgba(0,0,0,0); height: 10px !important; cursor: pointer !important;}\n";
			css += "#gbarToggle:hover { background-color: rgba(0,0,0,.15); }\n";
			css += ".gbh, .gbd { top: 34px; }\n";
		}
		if (response.o.gbarO) {
			css += "#guser, #gbar { opacity: 0; -webkit-transition-delay: .25s; }\n";
			css += "div.onegpad:hover #gbar, div.onegpad:hover #guser { opacity: 1; }\n"
		}
		if (response.o.gbarB)
			css += ".gbh, .gbd { border: 0 !important; }\n";
	// HEADER
		if (response.o.header || response.o.gbarH) {
			css += "#topBar { height: 42px; }\n";
			css += "[min ~= 'hideH'], [min ~= 'hideG'] { opacity: 0 !important; height: 0px !important; overflow: hidden !important; }\n";
		}
		if (response.o.header && !response.o.gbarH) {
			css += "#headerToggle { background-color: rgba(0,0,0,0); height: 10px !important; cursor: pointer !important;}\n";
			css += "#headerToggle:hover { background-color: rgba(0,0,0,.15); }\n";
		}
		if (response.o.logo) {
			css += ".logoparent { background-image: url(" + response.o.logoSRC + ") !important; background-position: 0% 0%; background-repeat: no-repeat no-repeat; }\n";
			css += ".logoparent > img { visibility: hidden !important; }\n";
		}
		if (response.o.logoH) {
			css += ".logoparent { display: none !important; }\n";
			css += "#topCtrls { padding-left: 6px !important; }\n";
		}
		if (response.o.s_all)
			css += "#topCtrls { display: none !important; }\n";
		if (response.o.s_button)
			css += "#topCtrls div.goog-imageless-button { display: none !important; }\n";
		if (response.o.s_link)
			css += "#topCtrls form span { display: none !important; }\n";
	// MAIN
		if (response.o.t_top) {
			css += "#fastui-topnav-container { display: none !important; }\n";
			css += "#mothertable { border-top: 5px solid #BCF; }";
		}
		if (response.o.n_create) {
			css += "#sidebar > div > div:first-child { display: none !important; }\n";
			css += "#sidebar > .qnb-container { height: 23px !important; }\n";
		}
		if (response.o.n_quick)
			css += "#sidebar > div > span { display: none !important; }\n";
		if (response.o.t_today)
			css += "div[id *= 'todayButton'] { display: none !important; }\n";
		if (response.o.t_nav)
			css += "div[id *= 'navBack'], div[id *= 'navForward'] { display: none !important; }\n";
		if (response.o.t_date)
			css += "td[id *= 'dateBox'] { display: none !important; }\n";
		if (response.o.t_printI)
			css += ".mg-print-img { display: none !important; }\n";
		if (response.o.t_printL) {
			css += ".mg-print { display: none !important; }\n";
			css += ".mg-print-img { margin-right: 10px !important; }\n";
		}
		if (response.o.t_refresh)
			css += ".mg-refresh { display: none !important; }\n";
		if (response.o.t_v1)
			css += "#topRightNavigation > .button-strip > .goog-imageless-button:first-child { display: none !important; }\n";
		if (response.o.t_v2)
			css += "#topRightNavigation > .button-strip > .goog-imageless-button:nth-child(2) { display: none !important; }\n";
		if (response.o.t_v3)
			css += "#topRightNavigation > .button-strip > .goog-imageless-button:nth-child(3) { display: none !important; }\n";
		if (response.o.t_v4)
			css += "#topRightNavigation > .button-strip > .goog-imageless-button:nth-child(4) { display: none !important; }\n";
		if (response.o.t_v5)
			css += "#topRightNavigation > .button-strip > .goog-imageless-button:nth-child(5) { display: none !important; }\n";		
	// NAVIGATION
		if (response.o.nav) {
			css += "#navToggle { z-index: 999; background-color: rgba(0,0,0,0); width: 10px !important; cursor: pointer !important; }\n";
			css += "#navToggle:hover { background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.2)), to(rgba(0,0,0,0))); }\n";
			css += "td[min ~= 'hideN'] { width: 0px !important; opacity: 0 !important; overflow: hidden !important; }\n";
			css += "#sidebar:not([min ~= 'hideN']) { width: " + (response.o.navW) + "px !important; }\n";
			css += "#sidebar, #sidebar[min ~= 'hideN'] + #mainnav { border-left: 10px solid #fff; }\n";
			//css += "#sidebar, #nav { width: " + response.o.navW + "px; opacity: 1; }\n";
		}
		if (response.o.n_cal) {
			css += "#dp_0 { display: none !important; }\n";
			css += "#dp_0_b1 + .nb_0 { border-top: 0 !important; }\n";
		}
		if (response.o.n_mine)
			css += "#dp_0_b1 + .nb_0 { display: none !important; }\n";
		if (response.o.n_linksM)
			css += "#calendars_my + .sn-link-container { display: none !important; }\n";
		if (response.o.n_other)
			css += "#dp_0_b1 + .nb_0 + .nb_0 { display: none !important; }\n";
		if (response.o.n_add)
			css += "#dp_0_b1 + .nb_0 + .nb_0 #searchAddCalBox { display: none !important; }\n";
		if (response.o.n_linksO)
			css += "#calendars_fav + .sn-link-container { display: none !important; }\n";
	// CUSTOM
		if (response.o.customCSS)
			css += response.o.customCSSval;

	//---- INJECT CSS ----//
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
	//---- END INJECT CSS ----//
});