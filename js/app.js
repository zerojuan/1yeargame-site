$(function(){		
	
	var selected = null;
	
	var select = function(elem){
		if(!elem) return; 
		elem.addClass("focus");
		elem.find(".info").slideDown('fast');
	};
	
	var unselect = function(elem){
		if(!elem) return;
		elem.removeClass("focus");
		elem.find(".info").slideUp('fast');
	}
	
	$.ajax({
		url: "entries.json",
		dataType: "json"			
	}).done(function(msg){
		msg.entries.forEach(
			function(data){
				var tpl = "<div class='game'>" +
								"<img src='"+data.img+"'/>"+
								"<div class='meta'>"+
									"<h3>"+data.title+"</h3>"+
									"<p>by "+data.team+"</p>"+
								"</div>"+
								"<div class='vote-icon'><div>+1</div></div>"+
								"<div class='clear'></div>"+
								"<div class='info' style='display: none'>"+
									"<p>"+data.info+" <a href='"+data.website+"'>more &rsaquo;&rsaquo;</a></p>"+									
									"<div style='padding-top: 10px;'><a href='"+data.url+"'>"+data.type+"</a></div>"+
								"</div>"+
							"</div>";
				$("#games").append(tpl);	
			}
		);
				
		
		$(".game img").click(function(){			
			var elem = $(this).parent();
			if(elem.hasClass("focus")){
				unselect(elem);
				selected = null;
			}else{
				unselect(selected);
				selected = elem;
				select(elem);
			}			
		});
	});
	
}); 