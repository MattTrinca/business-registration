$( function() {
    var availableTags = [
		"Meat or bone meal manufacturing (except fish, poultry or whale meal)",
		"Pate manufacturing (except fish)",
		"Canned fish manufacturing",
		"Dried or smoked fish manufacturing",
		"Filleted frozen fish manufacturing",
		"Fish and other seafood processing (except units which both catch and process their catch aboard vessels)",
		"Fish cleaning or filleting",
		"Fish fillet freezing, chilling and packing",
		"Fish fillet manufacturing",
		"Fish loaf or cake manufacturing",
		"Fish paste manufacturing",
		"Fish pate manufacturing",
		"Fish, canned, manufacturing",
		"Fish, dried or smoked, manufacturing",
		"Freezing of filleted fish",
		"Freezing of whole fin fish",
		"Operating vessels used only in processing rock lobsters, prawns or fish",
		"Whole fin fish freezing",
		"Fish liver oil manufacturing",
		"Fish or other marine animal oil or meal manufacturing",
		"Fishmeal feed manufacturing",
		"Fish net manufacturing",
		"Fishing line manufacturing",
		"Fishmeal fertiliser manufacturing",
		"Fish hook manufacturing",
		"Fishing equipment manufacturing",
		"Fishing tackle manufacturing",
		"Fish oil wholesaling",
		"Finfish wholesaling (except canned)",
		"Fish wholesaling (except canned)",
		"Frozen fish wholesaling",
		"Wet fish wholesaling (except canned)",
		"Canned finfish wholesaling",
		"Fishing equipment wholesaling (except clothing or footwear)",
		"Fishing tackle wholesaling",
		"Fish, fresh, retailing",
		"Wet fish retailing",
		"Frozen fish retailing",
		"Fishing equipment retailing (except clothing or footwear)",
		"FZZZZ"
    ];
    $("#business-activity" ).autocomplete({
      source: availableTags,
	  minLength: 3,
	  select: function( event, ui ) {
		  window.setTimeout(function() {
			$("#business-activity" ).height(0).height($("#business-activity" )[0].scrollHeight - 10);
		  }, 50);
	  },
	  search: function( event, ui ) {
		  $("#typed-text").html("[<strong>typed:</strong> " + $("#business-activity").val() + "]");
	  }
	});
	$("#business-activity").data("ui-autocomplete")._resizeMenu = function() {
		this.menu.element.outerWidth(450);
	}
	$("#business-activity").data("ui-autocomplete")._renderMenu = function( ul, items ) {
		var that = this;
		$.each( items, function( index, item ) {
			if (index < 6)
				that._renderItemData( ul, item );
		});
		$( ul ).find( "li:odd" ).addClass( "odd" );
    }
});
$(document).ready(function() {
		$("#business-activity" ).height(0).height($("#business-activity" )[0].scrollHeight - 10);
	});
