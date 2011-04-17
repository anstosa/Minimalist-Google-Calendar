// ==UserScript==
// @name             Minimalist for Google Calendar
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Stylesheet construction and injection
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var css = "";

	css += "html::-webkit-scrollbar { width: 0px; }\n";
	css += "input, textarea { outline: 0; margin: 1px !important; border: 1px solid !important; border-color: #585858 #B0B0B0 #B0B0B0 #B0B0B0 !important; }\n";
	css += "input:focus, textarea:focus { outline: 0; margin: 0px !important; border: 2px solid #BCF !important; }\n";
	css += "#nav:not([min ~= 'hideN']), #sidebar:not([min ~= 'hideN']) { width: " + response.o.navW + "px; }\n";
	css += "#gbar, #guser { height: 20px; padding-bottom: 0 !important; }\n";	
	
	// GENERAL
		if (response.o.BTN) {
			css += ".goog-imageless-button-content, .goog-imageless-button-disabled .goog-imageless-button-content { color: " + response.o.BTNcolor + " !important; }\n";
			css += ".goog-imageless-button { background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNbottom + "),to(" + response.o.BTNtop + ")) !important; }\n";
			css += ".goog-imageless-button-checked { background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNtop + "),to(" + response.o.BTNbottom + ")) !important; }\n";
			css += ".goog-imageless-button-top-shadow { display: none; }\n";
			css += ".goog-imageless-button-outer-box, .goog-imageless-button, .goog-imageless-button-disabled .goog-imageless-button-outer-box, .goog-imageless-button-disabled .goog-imageless-button { border-color: " + response.o.BTNborder + " !important; }\n";
			css += ".goog-imageless-button-disabled .goog-imageless-button-outer-box { background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNbottom + "),to(" + response.o.BTNbottom + ")) !important; }\n";
		} else {
			css += ".goog-imageless-button-content { color: #000 !important; }\n";
			css += ".goog-imageless-button { background: -webkit-gradient(linear,0% 40%,0% 70%,from(#f9f9f9),to(#ded5de)) !important; }\n";
			css += ".goog-imageless-button-checked { background: -webkit-gradient(linear,0% 40%,0% 70%,from(#ded5de),to(#f9f9f9)) !important; }\n";
			css += ".goog-imageless-button-top-shadow { display: none; }\n";
			css += ".goog-imageless-button-outer-box, .goog-imageless-button, .goog-imageless-button-disabled .goog-imageless-button-outer-box, .goog-imageless-button-disabled .goog-imageless-button { border-color: #bbb !important; }\n";
			css += ".goog-imageless-button-disabled .goog-imageless-button-outer-box { background: -webkit-gradient(linear,0% 40%,0% 70%,from(#f9f9f9),to(#f9f9f9)) !important; }\n";
		}
		if (response.o.backC) {
			css += ".dp-onmonth-selected { background: " + lighten(lighten(lighten(lighten(response.o.backCLR)))) + " !important; }\n";
			css += ".dp-weekend-selected { background: " + lighten(lighten(response.o.backCLR)) + " !important; }\n";
			css += "body, #nav, #searchAddCalBox, .dpdiv, .dpi-popup, .dp-weekday, .dp-weekend, .dp-weekendh, #weekViewAllDaywk, #tgTable, .chromeColor, .calList, .calHeader { background: " + response.o.backCLR + " !important;  background-color: " + response.o.backCLR + " !important; }\n";
		}
		if (response.o.borders) {
			css += ".ep-ea, .ep-ea-bot, #rhstogglecell, #rhstogglecell *, #tc_top > div, #mainnav { background: " + response.o.borderCLR + " !important; background-color: " + response.o.borderCLR + " !important; }\n";
			css += ".ep-ts, .t-chrome, .ep-gp-sp, .qnb-container, .qnb-container-ph, #lvHeader, .wk-weektop, .wk-dummyth { background: " + lighten(response.o.borderCLR) + " !important; background-color: " + lighten(response.o.borderCLR) + " !important; }\n";
			css += ".ui-dtsr-unselected, .tg-times-pri, .tg-times-sec { background: " + lighten(lighten(response.o.borderCLR)) + " !important; background-color: " + lighten(lighten(response.o.borderCLR)) + " !important; }\n";
			css += ".ep-ts, .ui-dtsr-selected, #scrolltimedeventswk, .nb_0, .sng-wrapper, .printborder.mainGrid, .printborder.t-chrome { border-color: " + response.o.borderCLR + " !important; }\n";
			css += ".ui-dtsr-selected { border-bottom-color: #fff !important; }\n";
			css += "input:focus, textarea:focus { outline: 0; margin: 0px !important; border: 2px solid " + lighten(lighten(response.o.borderCLR)) + " !important; }\n";
		}
		if (response.o.linkC)
			css += "[class *= 'link'], [id *= 'link'], [class *= 'lk'], [id *= 'lk'], .st-more, .mv-dayname, .dp-sb-cur, .mg-print, .mg-refresh, .ui-dtsr-unselected, .qnb-quickadd, a:not(.lv-event-title), a[class *= 'gb'] { color: " + response.o.linkCLR + " !important; }\n";
		if (response.o.weekends){
			if (response.o.weekendM)
				css += ".tg-weekend, .st-bg-table td:nth-child(6):not(.st-bg-today), .st-grid tr:first-child td:nth-child(6):not(.st-dtitle-today), .st-bg-table td:last-child:not(.st-bg-today):not(.st-dtitle-today), .st-grid tr:first-child td:last-child { background-color: rgba(0,0,0,.05) !important; }\n";
			else css += ".tg-weekend, .st-bg-table td:first-child:not(.st-bg-today), .st-grid tr:first-child td:first-child:not(.st-dtitle-today), .st-bg-table td:last-child:not(.st-bg-today):not(.st-dtitle-today), .st-grid tr:first-child td:last-child { background-color: rgba(0,0,0,.05) !important; }\n";
			//css += ".st-dtitle:not(.st-dtitle-down) { border-top: 0 !important; }\n";
		}	
		if (response.o.todayH) {
			css += ".st-dtitle-today, [class *= 'st-bg-td'], .wk-today { background-color: " + response.o.todayCLR + " !important; border-color: " + response.o.todayCLR + " !important; }\n"
			css += ".dp-today-selected, .st-bg-today, [class *= 'st-bg-td'], .tg-today { background-color: " + lighten(lighten(lighten(lighten(lighten(response.o.todayCLR))))) + " !important; border-color: " + response.o.todayCLR + " !important; }\n"
			css += ".dp-today, .dp-today-selected, .st-dtitle-down, .st-bg-today, .st-dtitle-today, .tg-col-today { border-color: " + response.o.todayCLR + " !important; }\n"
		}
		if (response.o.hours)
			css += ".tg-time-pri { font-size: " + response.o.Hsize + "; font-weight: " + response.o.Hweight + "; color: " + response.o.Hcolor + "; }\n"
		if (response.o.corners)
			css += "input, textarea { -webkit-border-radius: 5px; }\n";
		if (response.o.trans)
			css += "* { -webkit-transition-property: height, background-color, border-color, color, opacity, width; -webkit-transition-duration: .15s; -webkit-transition-timing-function: ease-out; }\n";
	// GOOGLE BAR
		if (response.o.gbar)
			css += "#gbar, #gbz { display: none !important; }\n";
		if (response.o.gbarH) {
			css += "#gbx1, #gbx2, #gbz, #gbg { top: 10px !important; }\n";
			css += "#gbx3, #gbx4 { top: 12px !important; }\n";
			css += "#gbs { top: 42px !important; }\n";
			css += "#gbarToggle { background-color: rgb(0,0,0,0); height: 10px !important; cursor: pointer !important;}\n";
			css += "#gbarToggle:hover { background-color: rgba(0,0,0,.5); }\n";
			css += ".gbh, .gbd { top: 34px; }\n";
		}
		if (response.o.gbarO) {
			css += "#gbz, #gbg, #guser, #gbar { opacity: 0; -webkit-transition-delay: .25s; }\n";
			css += "div.onegpad:hover #gbz, div.onegpad:hover #gbg, div.onegpad:hover #gbar, div.onegpad:hover #guser { opacity: 1; }\n"
		}
		if (response.o.gbarB)
			css += ".gbh, .gbd, #gbx3, #gbx4 { background-image: none !important; background-color: rgba(255,255,255,0) !important; border: 0 !important; }\n";
	// HEADER
		if (response.o.header || response.o.gbarH) {
			css += "[min ~= 'hideH'], [min ~= 'hideH'] *, [min ~= 'hideG'], [min ~= 'hideG'] * { opacity: 0; margin: 0 !important; padding: 0 !important; height: 0 !important; }\n";
			//css += "[min ~= 'hideH'] *, [min ~= 'hideG'] * { margin: -16px 0 16px 0 !important; }\n";
		}
		if (response.o.header) {
			//css += "[min ~= 'hideH'] #ntowner { margin-top: -20px !importnat; opacity: 1 !important; }\n";
		}
		if (response.o.headerS)
			css += "#topBar td { height: 36px; }\n";
		if (response.o.gbarH)
			css += "#gbi, #gbs { top: 34px !important; }\n";
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
			css += "#navToggle:hover { background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.15)), to(rgba(0,0,0,0))); }\n";
			css += "td[min ~= 'hideN'] { width: 0px !important; opacity: 0 !important; overflow: hidden !important; }\n";
			css += "#sidebar:not([min ~= 'hideN']) { width: " + (parseInt(response.o.navW) + 10) + "px !important; }\n";
			css += "#sidebar, #sidebar[min ~= 'hideN'] + #mainnav { border-left: 10px solid #fff; }\n";
			//css += "#sidebar, #nav { width: " + response.o.navW + "px; opacity: 1; }\n";
		}
		if (response.o.n_cal) {
			css += "#dp_0 { display: none !important; }\n";
			css += "#dp_0 + .nb_0 { border-top: 0 !important; }\n";
		}
		if (response.o.n_mine)
			css += "#dp_0 + .nb_0 { display: none !important; }\n";
		if (response.o.n_linksM)
			css += "#calendars_my + .sn-link-container { display: none !important; }\n";
		if (response.o.n_other)
			css += "#dp_0 + .nb_0 + .nb_0 { display: none !important; }\n";
		if (response.o.n_add)
			css += "#dp_0 + .nb_0 + .nb_0 #searchAddCalBox { display: none !important; }\n";
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

	//---- HELPER METHODS ----//
	function HexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
	function HexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
	function HexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }
	function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1,7) : h }
	function lighten(one) {
		if (one.indexOf('rgb') == -1) {
			var r = HexToR(one) + 30;
			var g = HexToG(one) + 30;
			var b = HexToB(one) + 30;
		} else {
			var rgb = one.split(",");
			var r = parseInt(rgb[0].substring(4)) + 20;
			var g = parseInt(rgb[1]) + 20;
			var b = parseInt(rgb[2].substring(0,rgb[2].indexOf("\)"))) + 20;
		}
		if (r > 255)
			r = 255;
		if (g > 255)
			g = 255;
		if (b > 255)
			b = 255;
		return "rgb(" + r + "," + g + "," + b + ")";
	}
	//---- HELPER METHODS ----//
});