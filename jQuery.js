var selected_values = jQuery('input.checkbox option:checked').map(function(){ return this.value;}).get();

// Remove after delay
alert.appendTo('section#notifications').fadeIn('slow').delay(5000).fadeOut('slow').queue(function(){jQuery(this).remove();});

// jQuery Mobile new element creation
.append('').trigger('create');

// Twitter tabs
jQuery(function(){
	var current_url = document.location.toString();
	// Loading current tab
	if(current_url.match('#')){
		var selector_from_current_url = 'nav li a[href=#' + current_url.split('#')[1] + ']';
		jQuery('section#my-content').attr('data-content-text', jQuery(selector_from_current_url).text());
		jQuery(selector_from_current_url).tab('show');
	}
});