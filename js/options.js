$(function(){
	//---- LOAD ----//
		// defaults
		if (!localStorage["options"]) localStorage["options"] = "{}";
		if (!localStorage["borderCLR"]) localStorage["borderCLR"] = "#BBCCFF";
		if (!localStorage["Hcolor"]) localStorage["Hcolor"] = "#bbbbbb";
		if (!localStorage["todayCLR"]) localStorage["todayCLR"] = "#FAD163";
		if (!localStorage["BTNcolor"]) localStorage["BTNcolor"] = "#000000";
		if (!localStorage["BTNborder"]) localStorage["BTNborder"] = "#bbbbbb";
		if (!localStorage["BTNbottom"]) localStorage["BTNbottom"] = "#f9f9f9";
		if (!localStorage["BTNtop"]) localStorage["BTNtop"] = "#e3e3e3";
		if (!localStorage["customCSSval"]) localStorage["customCSSval"] = " ";
		if (!localStorage["EIC_1"]) localStorage["EIC_1"] = "";
		if (!localStorage["EIC_2"]) localStorage["EIC_2"] = "";
		if (!localStorage["EIC_3"]) localStorage["EIC_3"] = "";

	if(localStorage['options']){
		var o = JSON.parse(localStorage['options']);
		// GENERAL
			$("#mcicon").attr('checked', o.mcicon);
			$("#borders").attr('checked', o.borders);
				if ((o.borderCLR != null) && (o.borderCLR != ""))
					$("#borderCLRsub").attr("style","background-color:" + o.borderCLR + ";");
			$("#todayH").attr('checked', o.todayH);
				if ((o.todayCLR != null) && (o.todayCLR != ""))
					$("#todayCLRsub").attr("style","background-color:" + o.todayCLR + ";");
			$("#hours").attr('checked', o.hours);
				if ((o.Hcolor != null) && (o.Hcolor != ""))
					$("#Hcolor").attr("style","background-color:" + o.Hcolor + ";");	
				if ((o.Hweight != null) && (o.Hweight != ""))
					$("#Hweight").val(o.Hweight);
				if ((o.Hsize != null) && (o.Hsize != ""))
					$("#Hsize").val(o.Hsize);
			$("#BTN").attr('checked', o.BTN);
				if ((o.BTNcolor != null) && (o.BTNcolor != ""))
					$("#BTNcolorSUB").attr("style","background-color:" + o.BTNcolor + ";");
				if ((o.BTNborder != null) && (o.BTNborder != ""))
					$("#BTNborderSUB").attr("style","background-color:" + o.BTNborder + ";");
				if ((o.BTNbottom != null) && (o.BTNbottom != ""))
					$("#BTNbottomSUB").attr("style","background-color:" + o.BTNbottom + ";");
				if ((o.BTNtop != null) && (o.BTNtop != ""))
					$("#BTNtopSUB").attr("style","background-color:" + o.BTNtop + ";");
			$("#testButton").attr("style","color: " + o.BTNcolor + ";border: 1px solid " + o.BTNborder + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + o.BTNbottom + "),to(" + o.BTNtop + "));");
			$("#corners").attr('checked', o.corners);
			$("#trans").attr('checked', o.trans);
			$("#customCSS").attr('checked', o.customCSS);
			if ((o.customCSSval != null) && (o.customCSSval != ""))
				$("#customCSSval").val(localStorage["customCSSval"]);
		// GOOGLE BAR
			$("#gbarH").attr('checked', o.gbarH);
			$("#gbarO").attr('checked', o.gbarO);
			$("#gbarB").attr('checked', o.gbarB);
			$("#gbar").attr('checked', o.gbar);
			$("#cbar").attr('checked', o.cbar);
				if ((o.c_n_1 != null) && (o.c_n_1 != ""))
					$("#c_n_1").val(o.c_n_1);
				else $("#c_n_1").val("Gmail");
				if ((o.c_u_1 != null) && (o.c_u_1 != ""))
					$("#c_u_1").val(o.c_u_1);
				else $("#c_u_1").val("https://mail.google.com");
				if ((o.c_t_1 != null) && (o.c_t_1 != ""))
					$("#c_t_1").val(o.c_t_1);
				else $("#c_t_1").val("_blank");
				if ((o.c_n_2 != null) && (o.c_n_2 != ""))
					$("#c_n_2").val(o.c_n_2);
				else $("#c_n_2").val("Calendar");
				if ((o.c_u_2 != null) && (o.c_u_2 != ""))
					$("#c_u_2").val(o.c_u_2);
				else $("#c_u_2").val("http://www.google.com/calendar");
				if ((o.c_t_2 != null) && (o.c_t_2 != ""))
					$("#c_t_2").val(o.c_t_2);
				else $("#c_t_2").val("_blank")
				if ((o.c_n_3 != null) && (o.c_n_3 != ""))
					$("#c_n_3").val(o.c_n_3);
				else $("#c_n_3").val("Documents");
				if ((o.c_u_3 != null) && (o.c_u_3 != ""))
					$("#c_u_3").val(o.c_u_3);
				else $("#c_u_3").val("http://docs.google.com");
				if ((o.c_t_3 != null) && (o.c_t_3 != ""))
					$("#c_t_3").val(o.c_t_3);
				else $("#c_t_3").val("_blank")
				if ((o.c_n_4 != null) && (o.c_n_4 != ""))
					$("#c_n_4").val(o.c_n_4);
				else $("#c_n_4").val("Reader");
				if ((o.c_u_4 != null) && (o.c_u_4 != ""))
					$("#c_u_4").val(o.c_u_4);
				else $("#c_u_4").val("http://www.google.com/reader");
				if ((o.c_t_5 != null) && (o.c_t_5 != ""))
					$("#c_t_5").val(o.c_t_5);
				else $("#c_t_5").val("_blank")
				if ((o.c_n_5 != null) && (o.c_n_5 != ""))
					$("#c_n_5").val(o.c_n_5);
				else $("#c_n_5").val("Photos");
				if ((o.c_u_5 != null) && (o.c_u_5 != ""))
					$("#c_u_5").val(o.c_u_5);
				else $("#c_u_5").val("http://picasaweb.google.com");
				if ((o.c_n_6 != null) && (o.c_n_6 != ""))
					$("#c_n_6").val(o.c_n_6);
				else $("#c_n_6").val("Web");
				if ((o.c_u_6 != null) && (o.c_u_6 != ""))
					$("#c_u_6").val(o.c_u_6);
				else $("#c_u_6").val("http://www.google.com");
				if ((o.c_t_6 != null) && (o.c_t_6 != ""))
					$("#c_t_6").val(o.c_t_6);
				else $("#c_t_6").val("_blank")
				$("#cbarM").attr('checked', o.cbarM);
			$("#user").attr('checked', o.user);
			$("#labs").attr('checked', o.labs);
			$("#settings").attr('checked', o.settings);
			$("#help").attr('checked', o.help);
			$("#out").attr('checked', o.out);
		// HEADER
			$("#header").attr('checked', o.header);
			$("#headerS").attr('checked', o.headerS);
			$("#logoH").attr('checked', o.logoH);
			$("#logo").attr('checked', o.logo);
			if ((o.logoSRC != null) && (o.logoSRC != ""))
				$("#logoSRC").val(o.logoSRC);
			else $("#logoSRC").val("http://www.example.com/image.jpg");
			$("#s_all").attr('checked', o.s_all);
			$("#s_button").attr('checked', o.s_button);
			$("#s_link").attr('checked', o.s_link);
		// MAIN
			$("#t_top").attr('checked', o.t_top);
			$("#n_create").attr('checked', o.n_create);
			$("#n_quick").attr('checked', o.n_quick);
			$("#t_today").attr('checked', o.t_today);
			$("#t_nav").attr('checked', o.t_nav);
			$("#t_date").attr('checked', o.t_date);
			$("#t_printI").attr('checked', o.t_printI);
			$("#t_printL").attr('checked', o.t_printL);
			$("#t_refresh").attr('checked', o.t_refresh);
			$("#t_v1").attr('checked', o.t_v1);
			$("#t_v2").attr('checked', o.t_v2);
			$("#t_v3").attr('checked', o.t_v3);
			$("#t_v4").attr('checked', o.t_v4);
			$("#t_v5").attr('checked', o.t_v5);
		// NAVIGATION
			$("#nav").attr('checked', o.nav);
			$("#navO").attr('checked', o.navO);
			//$("#navWC").attr('checked', o.navWC);
			if ((o.navW != null) && (o.navW != ""))
				$("#navW").val(o.navW);
			else $("#navW").val("180");
			$("#n_cal").attr('checked', o.n_cal);
			$("#n_mine").attr('checked', o.n_mine);
			$("#n_linksM").attr('checked', o.n_linksM);
			$("#n_other").attr('checked', o.n_other);
			$("#n_add").attr('checked', o.n_add);
			$("#n_linksO").attr('checked', o.n_linksO);
		localStorage["uncheckedUpdate"] = false;
	}
	//---- END LOAD ----//
	
	//---- SAVE ----//
	function save(){
		localStorage['options'] = JSON.stringify({
			// GENERAL
				"mcicon":$("#mcicon").attr('checked'),
				"borders":$("#borders").attr('checked'),
					"borderCLR":localStorage["borderCLR"],
				"todayH":$("#todayH").attr('checked'),
					"todayCLR":localStorage["todayCLR"],
				"hours":$("#hours").attr('checked'),
					"Hcolor":localStorage["Hcolor"],
					"Hweight":$("#Hweight").val(),
					"Hsize":$("#Hsize").val(),
				"BTN":$("#BTN").attr('checked'),
					"BTNcolor":localStorage["BTNcolor"],
					"BTNborder":localStorage["BTNborder"],
					"BTNbottom":localStorage["BTNbottom"],
					"BTNtop":localStorage["BTNtop"],
				"corners":$("#corners").attr('checked'),
				"trans":$("#trans").attr('checked'),
				"customCSS":$("#customCSS").attr('checked'),
					"customCSSval":$("#customCSSval").val().replace(/(\r\n|\n|\r)/gm,""),
			// GOOGLE BAR
				"gbarH":$("#gbarH").attr('checked'),
				"gbarO":$("#gbarO").attr('checked'),
				"gbarB":$("#gbarB").attr('checked'),
				"gbar":$("#gbar").attr('checked'),
				"cbar":$("#cbar").attr('checked'),
					"c_n_1":$("#c_n_1").val(),
					"c_u_1":$("#c_u_1").val(),
					"c_t_1":$("#c_t_1").val(),
					"c_n_2":$("#c_n_2").val(),
					"c_u_2":$("#c_u_2").val(),
					"c_t_2":$("#c_t_2").val(),
					"c_n_3":$("#c_n_3").val(),
					"c_u_3":$("#c_u_3").val(),
					"c_t_3":$("#c_t_3").val(),
					"c_n_4":$("#c_n_4").val(),
					"c_u_4":$("#c_u_4").val(),
					"c_t_4":$("#c_t_4").val(),
					"c_n_5":$("#c_n_5").val(),
					"c_u_5":$("#c_u_5").val(),
					"c_t_5":$("#c_t_5").val(),
					"c_n_6":$("#c_n_6").val(),
					"c_u_6":$("#c_u_6").val(),
					"c_t_6":$("#c_t_6").val(),
					"cbarM":$("#cbarM").attr('checked'),
				"user":$("#user").attr('checked'),
				"labs":$("#labs").attr('checked'),
				"settings":$("#settings").attr('checked'),
				"help":$("#help").attr('checked'),
				"out":$("#out").attr('checked'),
			// HEADER
				"header":$("#header").attr('checked'),
				"headerS":$("#headerS").attr('checked'),
				"logoH":$("#logoH").attr('checked'),
				"logo":$("#logo").attr('checked'),
					"logoSRC":$("#logoSRC").val(),
				"s_all":$("#s_all").attr('checked'),
				"s_button":$("#s_button").attr('checked'),
				"s_link":$("#s_link").attr('checked'),
			// MAIN
				"t_top":$("#t_top").attr('checked'),
				"t_today":$("#t_today").attr('checked'),
				"t_nav":$("#t_nav").attr('checked'),
				"t_date":$("#t_date").attr('checked'),
				"t_printI":$("#t_printI").attr('checked'),
				"t_printL":$("#t_printL").attr('checked'),
				"t_refresh":$("#t_refresh").attr('checked'),
				"t_v1":$("#t_v1").attr('checked'),
				"t_v2":$("#t_v2").attr('checked'),
				"t_v3":$("#t_v3").attr('checked'),
				"t_v4":$("#t_v4").attr('checked'),
				"t_v5":$("#t_v5").attr('checked'),
			// NAVIGATION
				"nav":$("#nav").attr('checked'),
				"navO":$("#navO").attr('checked'),
				//"navWC":$("#navWC").attr('checked'),
				"navW":$("#navW").val(),
				"top":$("#top").attr('checked'),
				"n_create":$("#n_create").attr('checked'),
				"n_quick":$("#n_quick").attr('checked'),
				"n_cal":$("#n_cal").attr('checked'),
				"n_mine":$("#n_mine").attr('checked'),
				"n_linksM":$("#n_linksM").attr('checked'),
				"n_other":$("#n_other").attr('checked'),
				"n_add":$("#n_add").attr('checked'),
				"n_linksO":$("#n_linksO").attr('checked'),
		});
		localStorage["customCSSval"] = $("#customCSSval").val();
		localStorage["EIC_1"] = $("#EIC_1").val();
		localStorage["EIC_2"] = $("#EIC_2").val();
		localStorage["EIC_3"] = $("#EIC_3").val();
		$("#announce").attr("style", "");
		$("#refreshEI").attr("style", "");
		$("#refresh").attr("style", "display: block !important;");
	}
	//---- END SAVE ----//
	
	//---- SAVE LISTENERS ----//
	document.getElementById("OPTgen").addEventListener("keyup", save, false);
	document.getElementById("OPTgen").addEventListener("click", save, false);
	document.getElementById("OPTgoo").addEventListener("keyup", save, false);
	document.getElementById("OPTgoo").addEventListener("click", save, false);
	document.getElementById("OPThea").addEventListener("keyup", save, false);
	document.getElementById("OPThea").addEventListener("click", save, false);
	document.getElementById("OPTmai").addEventListener("keyup", save, false);
	document.getElementById("OPTmai").addEventListener("click", save, false);
	document.getElementById("OPTgat").addEventListener("keyup", save, false);
	document.getElementById("OPTgat").addEventListener("click", save, false);
	document.getElementById("EIC_1").addEventListener("keyup", save, false);
	document.getElementById("EIC_2").addEventListener("keyup", save, false);
	document.getElementById("EIC_3").addEventListener("keyup", save, false);
	//---- END SAVE LISTENERS ----//
	
	//---- IMAGE PREVIEW ----//
	imagePreview = function(){
			xOffset = -25;
			yOffset = -100;
		$("label").hover(function(e){
			this.t = this.title;
			this.title = "";
			var c = (this.t != "") ? "<br /><span>" + this.t : "" + "</span>";
			$("body").append("<p id='preview'><img src='img/screens/"+ this.getAttribute("for") +".png' alt='Image preview' />"+ c +"</p>");
			$("#preview img")
				.css("max-width", window.innerWidth - 100)
				.css("max-height", window.innerHeight - 100);
			if ($("#preview").width() > (window.innerWidth - e.pageX - 130)) {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX - ($("#preview").width() - (window.innerWidth - e.pageX) + 75)) + "px")
					.fadeIn("fast");
			} else if ($("#preview").height() > (window.innerHeight - e.pageY - 55)) {
				$("#preview")
					.css("top",(e.pageY - ($("#preview").height() + 55)) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		},
		function(){
			this.title = this.t;
			$("#preview").remove();
		});
		$("a.preview").mousemove(function(e){
			if ($("#preview").width() > (window.innerWidth - e.pageX - 100) || $("#preview").height() > (window.innerHeight - e.pageY - 25)) {
				$("#preview")
					.css("top",(e.pageY + 75 - ($("#preview").height() - (window.innerHeight - e.pageY))) + "px")
					.css("left",(e.pageX - 75 - ($("#preview").width() - (window.innerWidth - e.pageX))) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		});
	};
	$(document).ready(function(){
		imagePreview();
	});
	//---- END IMAGE PREVIEW ----//
});

// UPDATE EXAMPLE BUTTON
function updateButton() {
	$("#testButton").attr("style","border: 1px solid #" + localStorage["BTNborder"] + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(#" + localStorage["BTNbottom"] + "),to(#" + localStorage["BTNtop"] + "));");
}

// NAVIGATION HANDLER
var last = "gen";
function navigate(link) {
	$("#OPT" + last).attr("style", "");
	$("#OPT" + link).attr("style", "display: block;");
	//document.getElementById("OPT" + link).scrollTop = 0;
	$("#" + last).attr("class", "");
	$("#" + link).attr("class", "current");
	//document.getElementById("OPTside").scrollTop = 0;
	last = link;
}

// RESET CUSTOM BUTTONS COLORS
function cButtonReset() {
	localStorage["BTNcolor"] = "#000000";
	localStorage["BTNborder"] = "#bbbbbb";
	localStorage["BTNbottom"] = "#f9f9f9";
	localStorage["BTNtop"] = "#ded5de";
	window.location.reload();
}

//---- EXPORT/IMPORT ----//
function export(EIid) {
	var prefOut = new Array();
		prefOut[0] = localStorage["options"];
		prefOut[1] = localStorage["borderCLR"];
		prefOut[2] = localStorage["Hcolor"];
		prefOut[3] = localStorage["todayCLR"];
		prefOut[4] = localStorage["BTNcolor"];
		prefOut[5] = localStorage["BTNborder"];
		prefOut[6] = localStorage["BTNbottom"];
		prefOut[7] = localStorage["BTNtop"];
		prefOut[8] = localStorage["customCSSval"];
	var prefsOut = prefOut[0];	// fencepost
	for (var i = 1; i <= 10; i++) {
		prefsOut += '\n' + prefOut[i];
	}
	document.getElementById(EIid).innerHTML = prefsOut;
	if (EIid == "EIC_3") localStorage["EIC_3"] = prefsOut;	// backup existing to Custom 3
}

function import(EIid) {
	var prefsIn = document.getElementById(EIid).value;
	var prefIn = prefsIn.split("\n");
		localStorage["options"] = prefIn[0];
		localStorage["borderCLR"] = prefIn[1];
		localStorage["Hcolor"] = prefIn[2];
		localStorage["todayCLR"] = prefIn[3];
		localStorage["BTNcolor"] = prefIn[4];
		localStorage["BTNborder"] = prefIn[5];
		localStorage["BTNbottom"] = prefIn[6];
		localStorage["BTNtop"] = prefIn[7];
		localStorage["customCSSval"] = prefIn[8];
	window.location.hash = "imps";
	window.location.reload();
}
//---- END EXPORT/IMPORT ----//

// EASTER EGG
function easterEgg() {
	if (!localStorage['easterEgg']) {
		localStorage['easterEgg'] = true;
		$('#easterEgg_off').attr('style','display:none;');
		$('#easterEgg_on').attr('style','display:block;');
	} else {
		localStorage.removeItem('easterEgg');
		$('#easterEgg_on').attr('style','display:none;');
		$('#easterEgg_off').attr('style','display:block;');
	}
}