$(".answer").hide();
$("#no").click(function() {
    if($(this).is(":checked")) {
        $(".answer").show();
    } else {
        $(".answer").hide();
    }
});

$("#yes").click(function() {
    if($(this).is(":checked")) {
        $(".answer").hide();
    } else {
        $(".answer").hide();
    }
});


$("input:checkbox").on('click', function() {
	var $box = $(this);
	if ($box.is(":checked")) {
	  	var group = "input:checkbox[value='" + $box.attr("value") + "']";
	  	$(group).prop("checked", false);
	  	$box.prop("checked", true);
	} else {
	  	$box.prop("checked", false);
	}
});