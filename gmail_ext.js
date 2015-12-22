top.TDOpts = {
    zIndex: 8,
    gmail_holder_left_pos: null,

    delayed_loading: true,
    collapsed: true,

    customPostion: function(holder) {
        var g_left_pos = TDOpts.gmail_holder_left_pos;
        if(g_left_pos) {
            holder.style.left = (g_left_pos - holder.offsetWidth - 5) + 'px';
        }
    },
    
    listen: function(evnt, elem, func) {
        if (elem.addEventListener) {
			elem.addEventListener(evnt, func, false);
		}
		else if (elem.attachEvent) { // IE DOM
			var r = elem.attachEvent("on"+evnt, func);
			return r;
		}
	}
};

(function() {

function inbox() {

	/*
  if(  top.location.pathname.indexOf('/u/') == -1 || window != top)
            return;*/
			
	var InboxPin     = 'li[jsaction="click:global.pin"]';
	var InboxPinRemove     = 'li[jsaction="click:global.remove_pin"]';





	var InboxTrash   = 'li[jsaction="click:global.trash"]';
	var InboxHangout = 'div[jsaction="global.toggle_chat_roster"]'

	var ToDoistID    = "InboxToDoist";
	var ToDoistIDRemove    = "InboxToDoistRemove";

	var ToDoistIDIcon = "InboxToDoistIcon";


varTodoistIconCss = "style=\"background: transparent url(https://d3ptyyxy2at9ui.cloudfront.net/f9e2d9ffc4116af91aa0acde2280acab.png) 0 0 no-repeat;background-position: 0 -1102px;width: 25px;	height:25px;	padding: 0 !important;margin-right: 15px;\"";
	varTodoistIconCssInline = "style=\"background: transparent url(https://d3ptyyxy2at9ui.cloudfront.net/f9e2d9ffc4116af91aa0acde2280acab.png) 0 0 no-repeat;background-position: 0 -440px;width: 25px;	height:25px;	padding: 0 !important;\"";






	var el = '<li id="InboxToDoist" ' + varTodoistIconCssInline +' jstcache="322" title="Create Task" role="button" jsinstance="1" class="jA action actionIcon ew qt" ></li>';
	var elRemove = '<li id="InboxToDoistRemove" ' + varTodoistIconCssInline +' jstcache="322" title="Create Task" role="button" jsinstance="1" class="jA action actionIcon ew qt" ></li>';
	var elToogle = '<div style="float: left" id="InboxToDoistIcon"><div ' + varTodoistIconCss +'></div></div>';


	var countIcon = $(InboxHangout).parent().find("#"+ToDoistIDIcon).length;

	if(countIcon == 0){
		$( InboxHangout ).parent().css("width","70px")
		$( InboxHangout ).parent().prepend( elToogle);

		$("#"+ToDoistIDIcon).click(function() {

			if($('#todoist_holder').css('display') == "block"){

				$('#todoist_holder').css('display',"none");

			}else{

				$('#todoist_holder').css('display',"block");

			}
		});


	}




	var countRemove = $(InboxPinRemove).parent().find("#"+ToDoistIDRemove).length;
	if(countRemove == 0){


		$( InboxPinRemove ).parent().prepend( elRemove );
		$(InboxTrash).parent().find("#"+ToDoistID).remove();
		$("#"+ToDoistIDRemove).click(function() {

			var SubjectElement = $( InboxPinRemove ).parent().parent().parent().find("span").eq(0);

			top.subject = SubjectElement.text();
			TDOpts.addAsTask(SubjectElement.text());
			return false;
		});



	}



	var count = $(InboxPin).parent().find("#"+ToDoistID).length;
	
	if(count == 0){
	
	
	$( InboxPin ).parent().prepend( el );
	$(InboxTrash).parent().find("#"+ToDoistID).remove();
	$("#"+ToDoistID).click(function() {



			var SubjectElement = $( InboxPin ).parent().parent().parent().find("span").eq(0);
		    var ID = d2h($( InboxPin ).closest('div[data-item-id]').attr("data-item-id").replace("#gmail:thread-f:",""));
	     	top.EmailID = ID;

		top.subject = SubjectElement.text();


              TDOpts.addAsTask();
                return false;
            });


	}
}

  setInterval(inbox, 300);


})();

function d2h(d) { return (+d).toString(16).toUpperCase(); }