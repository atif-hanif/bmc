$(".yes").hide();
$(".no").hide();

$("#yes").click(function() {
    if($(this).is(":checked")) {
        $(".yes").show();
    } else {
        $(".yes").hide();
    }
});

$("#no").click(function() {
    if($(this).is(":checked")) {
        $(".no").hide();
    } else {
        $(".no").hide();
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