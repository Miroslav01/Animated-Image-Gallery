$(document).ready(function(){
	var items = $('#gallery li'),
		itemsByTags = [];

	// Loop trough
	items.each(function(i){
		var elem = $(this),
			tags = elem.data('tags').split(',');

			//add data atribute for quicksand
			elem.attr('data-id', i);

			$.each(tags, function(key, value){
				// remove whitespace
				value = $.trim(value);

				if(!(value in itemsByTags)) {
					// add empty value
					itemsByTags[value] = [];
				}

				// add image to the array 
				itemsByTags[value].push(elem);
			});
	});

	// Create All Items option
	createList('All Items', items);

	$.each(itemsByTags, function(k, v){
		createList(k, v);
	});

	// Click handler
	$('#navbar a').live('click', function(e){
		var link = $(this);

		//add active class

		link.addClass('active').siblings().removeClass('active');

		$('#gallery').quicksand(link.data('list').find('li'));

		$('#navbar a:first').click();
	});
});