	var frontBool = false;
	var serverBool = false;
	
	var frontEnter = "linear-gradient(rgb(0,0,0), rgb(240,230,140)";
	var frontLeave = "linear-gradient(rgb(0,0,0), rgb(0,0,255)";
	var frontDown = "linear-gradient(rgb(0,0,0), rgb(218,165,32)";
	
	var serverEnter = "linear-gradient(rgb(0,0,0), rgb(240,230,140)";
	var serverLeave = "linear-gradient(rgb(0,0,0), rgb(0,0,255)";
	var serverDown = "linear-gradient(rgb(0,0,0), rgb(218,165,32)";
$(document).ready(function(){
//Begin Frontend section
	$("#switchFront").click(function(){	
		if (frontBool == false){
			$("#switchFront").text("Show Websites");
			$("#frontTitle").text("Front End Only Website Repositories");
			frontBool = true;
			
			$("#frontLink1").val("https://github.com/imoise/SimpleTable");
			$("#frontLink2").val("https://github.com/imoise/ransomeNote");
			$("#frontLink3").val("https://github.com/imoise/cafe");
			$("#frontLink4").val("https://github.com/imoise/Presidential-Election-Map");
			
			$(".frontButton").css("background-image", "linear-gradient(rgb(0,0,0), rgb(0,255,0)");
			frontEnter = "linear-gradient(rgb(0,0,0), rgb(107,142,35)";
			frontLeave = "linear-gradient(rgb(0,0,0), rgb(0,255,0)";
			frontDown = "linear-gradient(rgb(0,0,0), rgb(0,100,0)";
		}
		
		else if (frontBool == true){
			$("#switchFront").text("Show Website Repositories");
			$("#frontTitle").text("Front End Only Websites");
			frontBool = false;
			
			$("#frontLink1").val("https://imoise.github.io/SimpleTable/");
			$("#frontLink2").val("https://imoise.github.io/ransomeNote/");
			$("#frontLink3").val("https://imoise.github.io/cafe/");
			$("#frontLink4").val("https://imoise.github.io/Presidential-Election-Map/");
			
			$(".frontButton").css("background-image", "linear-gradient(rgb(0,0,0), rgb(0,0,255)");
			frontEnter = "linear-gradient(rgb(0,0,0), rgb(240,230,140)";
			frontLeave = "linear-gradient(rgb(0,0,0), rgb(0,0,255)";
			frontDown = "linear-gradient(rgb(0,0,0), rgb(218,165,32)";
		}
	})
	
	$(".frontButton").mouseenter(function(){		
		$(this).css("background-image", frontEnter);
	})
	$(".frontButton").mouseleave(function(){		
		$(this).css("background-image", frontLeave);
	})
	$(".frontButton").mousedown(function(){		
		$(this).css("background-image", frontDown);
	})
	
	$("#gitButton").click(function(){
		window.open( $("#gitHome").val());
	})
	$("#portfolioButton").click(function(){
		window.open( $("#portRepo").val());
	})
	$("#frontButton1").click(function(){
		window.open( $("#frontLink1").val());
	})
	$("#frontButton2").click(function(){
		window.open( $("#frontLink2").val());
	})
	$("#frontButton3").click(function(){
		window.open( $("#frontLink3").val());
	})
	$("#frontButton4").click(function(){
		window.open( $("#frontLink4").val())
	})
	

//End Frontend section

//Begin Server-side section	
		$("#switchServer").click(function(){	
		if (serverBool == false){
			$("#switchServer").text("Show Websites");
			$("#serverTitle").text("Websites with Server-side Repositories");
			serverBool = true;
			
			$("#serverLink1").val("https://github.com/imoise/storeBenefit");
			$("#serverLink2").val("https://github.com/imoise/NewEngland");
			
			$(".serverButton").css("background-image", "linear-gradient(rgb(0,0,0), rgb(0,255,0)");
			serverEnter = "linear-gradient(rgb(0,0,0), rgb(107,142,35)";
			serverLeave = "linear-gradient(rgb(0,0,0), rgb(0,255,0)";
			serverDown = "linear-gradient(rgb(0,0,0), rgb(0,100,0)";
		}
		
		else if (serverBool == true){
			$("#switchServer").text("Show Website Repositories");
			$("#serverTitle").text("Websites with Server-side");
			serverBool = false;
			
			$("#serverLink1").val("https://imoise.github.io/storeBenefit/");
			$("#serverLink2").val("https://imoise.github.io/NewEngland/");
			
			$(".serverButton").css("background-image", "linear-gradient(rgb(0,0,0), rgb(0,0,255)");
			serverEnter = "linear-gradient(rgb(0,0,0), rgb(240,230,140)";
			serverLeave = "linear-gradient(rgb(0,0,0), rgb(0,0,255)";
			serverDown = "linear-gradient(rgb(0,0,0), rgb(218,165,32)";
		}
	})
	
	$(".serverButton").mouseenter(function(){		
		$(this).css("background-image", serverEnter);
	})
	$(".serverButton").mouseleave(function(){		
		$(this).css("background-image", serverLeave);
	})
	$(".serverButton").mousedown(function(){		
		$(this).css("background-image", serverDown);
	})
	
	$("#serverButton1").click(function(){
		window.open( $("#serverLink1").val());
	})

	$("#serverButton2").click(function(){
		window.open( $("#serverLink2").val())
	})
//End server-side section
});