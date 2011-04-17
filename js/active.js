// ==UserScript==
// @name             Minimalist for Google Calendar
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require one time initialization on complete page load.
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {

	//---- VARIABLES ----//
	// f_* whether one-time task is done
	var f_guser = false;
	var f_user = false;
	var f_labs = false;
	var f_settings = false;
	var f_help = false;
	var f_out = false;
	var f_gbarToggle = false;
	var f_headerToggle = false;
	var f_navToggle = false;
	var f_nav = false;
	var hiddenG = false;
	var hiddenH = false;
	var hiddenN = false;
	var trying = false;
	var keyinit = false;
	var guser;
	var today = null;
	var running = false;
	var allow = true;
	//---- END VARIABLES ----//

	//---- CHECK PAGE LOAD ----//
	function getLoad() {
		return document.getElementById('todayButton:0');
	}
	function init() {
		if (getLoad() == today) return;
		if (today != null)
			today.removeEventListener("DOMSubtreeModified", run, false);
		if ((today = getLoad()) != null) {
			console.log("MINIMALIST GOOGLE CALENDAR: Google Calendar loaded! Work the magic...");
			today.addEventListener("DOMSubtreeModified", run, false);
			run();
		}
	}
	//---- END CHECK PAGE LOAD ----//

	//---- MAIN LOOP ----//
	function run() {
		// only run loop if it hasn't run this second and isn't running already
		if (running || !allow) return true;
		else {
			running = true;
			allow = false;
			window.setTimeout(function() {
				allow = true;
			}, 500);
		}
		// go loop go!
		console.log("MINIMALIST GOOGLE CALENDAR: **MAIN LOOP**");
		if (response.o.nav && !f_navToggle) {
			console.log("MINIMALIST GOOGLE CALENDAR: Adding the nav hook...");
			try {
				var side = document.getElementById("sidebar");
				var nav = document.getElementById("nav");				
					minimalist(side, false, "hideN");
					minimalist(nav, false, "hideN");
				var toggleN = document.createElement("td");
					toggleN.setAttribute("id", "navToggle");
				if (response.o.navO) {
					toggleN.addEventListener("mouseover", toggleNav, false);
					side.addEventListener("click", toggleNav, false);
					var side_children = side.querySelectorAll('*');
					for (var i = 0; i < side_children.length; i++) {
						side_children[i].addEventListener("click", toggleNav, false);
					}
					nav.addEventListener("click", toggleNav, false);
					var nav_children = nav.querySelectorAll('*');
					for (var i = 0; i < nav_children.length; i++) {
						console.log(nav_children[i]);
						nav_children[i].addEventListener("click", toggleNav, false);
					}
				}
				nav.parentNode.insertBefore(toggleN, nav);
				f_navToggle = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.gbarH && !f_gbarToggle) {
			console.log("MINIMALIST GOOGLE CALENDAR: hiding Google Bar & adding the header hook...");
			try {
				var tbar = document.getElementsByClassName("onegpad")[0];
					minimalist(tbar, false, "hideG");
				var toggleG = document.createElement("div");
					toggleG.setAttribute("id", "gbarToggle");
					tbar.parentNode.insertBefore(toggleG, tbar);
				f_gbarToggle = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.header && !f_headerToggle) {
			console.log("MINIMALIST GOOGLE CALENDAR: hiding header and adding toggle...");
			var head = document.getElementById("topBar");
			try {
				minimalist(head, false, "hideH");
				if (!response.o.gbarH) {
					var toggle = document.createElement("div");
					toggle.setAttribute("id", "headerToggle");
					head.parentNode.insertBefore(toggle, head);
				}
				f_headerToggle = true;
			} catch (e) { console.error(e); }
		}
		if (!keyinit) {
			try {
				if (response.o.gbarH) {
					hiddenG = true;
					document.getElementById('gbarToggle').addEventListener("click", toggleHeader, false);
				}
				if (response.o.header) {
					hiddenH = true;
					if (!response.o.gbarH)
						document.getElementById('headerToggle').addEventListener("click", toggleHeader, false);
				}
				if (response.o.nav) {
					hiddenN = true;
					document.getElementById('navToggle').addEventListener("click", toggleNav, false);
				}
				keyinit = true;
			} catch (e) {}
		}
		if (response.o.cbar && !document.getElementById('cbarOne')) {
			console.log("MINIMALIST GOOGLE CALENDAR: customizing Google links...");
			if (document.getElementById("gbar")) {
				try {
					var one = document.getElementById("gbar").childNodes[0].childNodes[0];
						one.setAttribute("href", response.o.c_u_1);
						one.setAttribute("target", response.o.c_t_1);
						one.innerHTML = response.o.c_n_1;
					var two = document.getElementById("gbar").childNodes[0].childNodes[2];
						two.setAttribute("style", "font-weight: normal;");
						two.setAttribute("class", "");
						two.innerHTML = "<a target=\"" + response.o.c_t_2 + "\" id=\"cbarOne\" href=\"" + response.o.c_u_2 + "\" class=\"gb1\">" + response.o.c_n_2 + "</a>";
					var three = document.getElementById("gbar").childNodes[0].childNodes[4];
						three.setAttribute("href", response.o.c_u_3);
						three.setAttribute("target", response.o.c_t_3);
						three.innerHTML = response.o.c_n_3;
					var four = document.getElementById("gbar").childNodes[0].childNodes[6];
						four.setAttribute("href", response.o.c_u_4);
						four.setAttribute("target", response.o.c_t_4);
						four.innerHTML = response.o.c_n_4;
					var five = document.getElementById("gbar").childNodes[0].childNodes[8];
						five.setAttribute("href", response.o.c_u_5);
						five.setAttribute("target", response.o.c_t_5);
						five.innerHTML = response.o.c_n_5;
					var six = document.getElementById("gbar").childNodes[0].childNodes[10];
						six.setAttribute("href", response.o.c_u_6);
						six.setAttribute("target", response.o.c_t_6);
						six.innerHTML = response.o.c_n_6;
					if (response.o.cbarM) {
						var moreD = document.querySelectorAll("#gbar div.gbm")[0];
						var current = document.createElement("div");
							current.setAttribute('class','gb2');
						var hr = document.createElement("div");
							hr.setAttribute('class','gbd');
							current.appendChild(hr);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://www.google.com');
							current.appendChild(document.createTextNode("Web"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://picasaweb.google.com');
							current.appendChild(document.createTextNode("Photos"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://www.google.com/reader');
							current.appendChild(document.createTextNode("Reader"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://docs.google.com');
							current.appendChild(document.createTextNode("Documents"));
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gb2');
							current.setAttribute('href','http://mail.google.com/mail');
							current.appendChild(document.createTextNode("Gmail"));
							moreD.insertBefore(current, moreD.firstChild);
					} else {
						var more = document.getElementById("gbar").childNodes[0].childNodes[12];
							more.setAttribute("style","display: none !important;");
					}
				} catch (e) { console.error(e); }
			} else {
				try {
					var one = document.getElementById("gbz").childNodes[1].childNodes[0].childNodes[0];
						one.setAttribute("href", response.o.c_u_1);
						one.setAttribute("target", response.o.c_t_1);
						one.setAttribute("id", "cbarOne");
						one.childNodes[1].innerHTML = response.o.c_n_1;
					var two = document.getElementById("gbz").childNodes[1].childNodes[1].childNodes[0];
						two.setAttribute("href", response.o.c_u_2);
						two.setAttribute("target", response.o.c_t_2);
						two.childNodes[1].innerHTML = response.o.c_n_2;
					var three = document.getElementById("gbz").childNodes[1].childNodes[2].childNodes[0];
						three.setAttribute("href", response.o.c_u_3);
						three.setAttribute("target", response.o.c_t_3);
						three.childNodes[1].innerHTML = response.o.c_n_3;
					var four = document.getElementById("gbz").childNodes[1].childNodes[3].childNodes[0];
						four.setAttribute("href", response.o.c_u_4);
						four.setAttribute("target", response.o.c_t_4);
						four.childNodes[1].innerHTML = response.o.c_n_4;
					var five = document.getElementById("gbz").childNodes[1].childNodes[4].childNodes[0];
						five.setAttribute("href", response.o.c_u_5);
						five.setAttribute("target", response.o.c_t_5);
						five.childNodes[1].innerHTML = response.o.c_n_5;
					var six = document.getElementById("gbz").childNodes[1].childNodes[5].childNodes[0];
						six.setAttribute("href", response.o.c_u_6);
						six.setAttribute("target", response.o.c_t_6);
						six.childNodes[1].innerHTML = response.o.c_n_6;
					if (response.o.cbarM) {
						var moreD = document.querySelectorAll("#gbz div.gbm ol")[0];
						var li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
						var current = document.createElement("div");
							current.setAttribute('class','gbmt gbmh');
						var hr = document.createElement("div");
							hr.setAttribute('class','gbd');
							li.appendChild(hr);
							moreD.insertBefore(li, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://www.google.com');
							current.appendChild(document.createTextNode("Web"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(li, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://picasaweb.google.com');
							current.appendChild(document.createTextNode("Photos"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://www.google.com/reader');
							current.appendChild(document.createTextNode("Reader"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://docs.google.com');
							current.appendChild(document.createTextNode("Documents"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
						current = document.createElement("a");
							current.setAttribute('target','_blank');
							current.setAttribute('class','gbmt');
							current.setAttribute('href','http://www.google.com/calendar');
							current.appendChild(document.createTextNode("Calendar"));
							li = document.createElement("li");
							li.setAttribute("class", "gbmtc");
							li.appendChild(current);
							moreD.insertBefore(current, moreD.firstChild);
						} else {
							var more = document.getElementById("gbz").childNodes[1].childNodes[6];
								more.setAttribute("style","display: none !important;");
						}
					} catch (e) { console.error(e); }
				}
		}
		if ( !f_guser && (response.o.user || response.o.labs || response.o.settings || response.o.help || response.o.out)) {
			console.log("MINIMALIST GOOGLE CALENDAR: targetting Google User bar...");
			try {
				if (document.getElementById("guser")) {
					guser = document.getElementById("guser").firstChild;
					f_guser = true;
				}
			} catch (e) { console.error(e); }
		}		
		if (response.o.user && !f_user && f_guser) {
			console.log("MINIMALIST GOOGLE CALENDAR: hiding signed in...");
			try {
				var user = guser.childNodes[2];
					user.setAttribute("style","display: none !important;");
					user.parentNode.removeChild(user.nextSibling);
				f_user = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.labs && !f_labs && f_guser) {
			console.log("MINIMALIST GOOGLE CALENDAR: hiding labs icon...");
			try {
				var labs = guser.childNodes[4];
					labs.setAttribute("style","display: none !important;");
				f_labs = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.settings && !f_settings && f_guser) {
			console.log("MINIMALIST GOOGLE CALENDAR: hiding settings...");
			try {
				var settings = guser.childNodes[5];
					settings.setAttribute("style","display: none !important;");
					settings.parentNode.removeChild(settings.nextSibling);
				f_settings = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.help && !f_help && f_guser) {
			console.log("MINIMALIST GOOGLE CALENDAR: hiding help...");
			try {
				var help = guser.childNodes[7];
					help.setAttribute("style","display: none !important;");
					help.parentNode.removeChild(help.nextSibling);
				f_help = true;
			} catch (e) { console.error(e); }
		}
		if (response.o.out && !f_out && f_guser) {
			console.log("MINIMALIST GOOGLE CALENDAR: hiding sign out...");
			try {
				var out = guser.childNodes[9];
					out.setAttribute("style","display: none !important;");
					out.parentNode.removeChild(out.previousSibling);
				f_out = true;
			} catch (e) { console.error(e); }
		}
		running  = false;
	}
	//---- END MAIN LOOP ----//

	//---- HELPER METHODS ----//
	function keypress(event) {
		element = event.target;
		elementName = element.nodeName.toLowerCase();
		if (elementName == "input" || elementName == "textarea") return true;
		console.log("MINIMALIST GOOGLE CALENDAR: keystroke intercepted");
		if (String.fromCharCode(event.which)=="g") {
		}
		// [ / ]
		if (response.o.header && event.which == "47" && !event.ctrlKey && !event.metaKey) {
			console.warn('search');
			toggleHeader();
		}
		// [ \ ]
		if ((response.o.header || response.o.gbarH) && event.which == "92" && !event.ctrlKey && !event.metaKey) {
			toggleHeader();
		}
		// [ ` ] tilde key
		if (response.o.nav && event.which == "96" && !event.ctrlKey && !event.metaKey) {
			toggleNav();
		}
		return true;
	}

	function toggleHeader(){
		if (response.o.gbarH && !response.o.header) {
			if (hiddenG) {
				minimalist(document.getElementsByClassName('onegpad')[0], true, "hideG");
				hiddenG = false;
			} else {
				minimalist(document.getElementsByClassName('onegpad')[0], false, "hideG");
				hiddenG = true;
			}
		} else if (response.o.gbarH && response.o.header) {
			if (hiddenH) {
				minimalist(document.getElementsByClassName('onegpad')[0], true, "hideG");
				minimalist(document.getElementById('topBar'), true, "hideH");
				hiddenH = false;
			} else {
				minimalist(document.getElementsByClassName('onegpad')[0], false, "hideG");
				minimalist(document.getElementById('topBar'), false, "hideH");
				hiddenH = true;
			}
		} else {
			if (hiddenH){
				minimalist(document.getElementById('topBar'), true, "hideH");
				hiddenH = false;
			} else {
				minimalist(document.getElementById('topBar'), false, "hideH");
				hiddenH = true;
			}
		}
	}

	function toggleNav() {
		if (response.o.nav) {
			if (hiddenN) {
				minimalist(document.getElementById('sidebar'), true, "hideN");
				minimalist(document.getElementById('nav'), true, "hideN");
				hiddenN = false;
			} else {
				minimalist(document.getElementById('sidebar'), false, "hideN");
				minimalist(document.getElementById('nav'), false, "hideN");
				hiddenN = true;
			}
		}
	}

	function minimalist(element, remove, minClass) {
		var classes = new Array();
		try { classes = element.getAttribute("min").split(" "); } catch(e) {}
		classes = removeItems(classes, minClass);
		if (!remove) classes.push(minClass);
		element.setAttribute("min", classes.join(" "));
	}
	
	function removeItems(array, item) {
		var i = 0;
		while (i < array.length) {
			if (array[i] == item)
				array.splice(i, 1);
			else i++;
		}
		return array;
	}
	//---- END HELPER METHODS ----//

	// LISTENERS
	window.addEventListener("click", run, false);
	document.addEventListener("keypress", keypress, false);
	window.addEventListener("DOMSubtreeModified", init, false);
});