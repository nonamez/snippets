var selected_values = jQuery('#checkbox').find('option:checked').map(function(){ return this.value;}).get();

// Remove after delay
.appendTo('#notifications').fadeIn('slow').delay(5000).fadeOut('slow').queue(function(){jQuery(this).remove();});

// jQuery Mobile new element creation
.append('some-element').trigger('create');

// Bootstrap tabs
jQuery(function(){
	var current_url = document.location.toString();
	// Loading current tab
	if(current_url.match('#')){
		var selector_from_current_url = 'nav li a[href=#' + current_url.split('#')[1] + ']';
		jQuery('section#my-content').attr('data-content-text', jQuery(selector_from_current_url).text());
		jQuery(selector_from_current_url).tab('show');
	}
});

jQuery.ajaxSetup({
		cache: false,
		beforeSend: function(){
			if(custom_ajax_overlay)
				jQuery('<div/>').attr('id', 'custom-ajax-overlay').appendTo('body');
		},
		complete: function(){
			if(custom_ajax_overlay)
				jQuery('#custom-ajax-overlay').remove();

			custom_ajax_overlay = true;
		},
		dataType: 'JSON',
		error: function(xmlHttpRequest, textStatus, errorThrown){
			
			if(xmlHttpRequest.readyState == 0 || xmlHttpRequest.status == 0) 
				return;
			
			var send_values = {
				'responseText': xmlHttpRequest.responseText,
				'textStatus': textStatus,
				'errorThrown': errorThrown
			};

			jQuery.ajax({
				'url': ajax_url + 'ajaxResponseErrorLog', 
				'data': {'ajax_response_error': send_values},
				'type': 'POST',
				success: function(){
					alert('An error has occurred. Please try again laiter.');
				},
				error: function(){
					alert('A critical error has occurred. Please inform administrator and try again laiter.');
				}
			});
		}
	});