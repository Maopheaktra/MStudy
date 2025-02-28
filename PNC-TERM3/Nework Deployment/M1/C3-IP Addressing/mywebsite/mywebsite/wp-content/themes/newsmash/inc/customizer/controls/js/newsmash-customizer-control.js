/**
 * Customizer controls
 */

( function( $ ) {

	/* Internal shorthand */
	var api = wp.customize;

	/**
	 * Helper class for the main Customizer interface.
	 *
	 * @since 1.0.0
	 * @class NEWSMASHCustomizer
	 */
	NEWSMASHCustomizer = {

		controls	: {},

		/**
		 * Initializes our custom logic for the Customizer.
		 *
		 * @since 1.0.0
		 * @method init
		 */
		init: function()
		{
			NEWSMASHCustomizer._initToggles();
		},

		/**
		 * Initializes the logic for showing and hiding controls
		 * when a setting changes.
		 *
		 * @since 1.0.0
		 * @access private
		 * @method _initToggles
		 */
		_initToggles: function()
		{
			// Trigger the Adv Tab Click trigger.
			NEWSMASHControlTrigger.triggerHook( 'newsmash-toggle-control', api );

			// Loop through each setting.
			$.each( NEWSMASHCustomizerToggles, function( settingId, toggles ) {

				// Get the setting object.
				api( settingId, function( setting ) {

					// Loop though the toggles for the setting.
					$.each( toggles, function( i, toggle ) {

						// Loop through the controls for the toggle.
						$.each( toggle.controls, function( k, controlId ) {

							// Get the control object.
							api.control( controlId, function( control ) {

								// Define the visibility callback.
								var visibility = function( to ) {
									control.container.toggle( toggle.callback( to ) );
								};

								// Init visibility.
								visibility( setting.get() );

								// Bind the visibility callback to the setting.
								setting.bind( visibility );
							});
						});
					});
				});

				// Hide Section without Controls.
				$( '.customize-control *[data-customize-setting-link="' + settingId + '"]' ).on('change', function() {

					setTimeout( function() {
						$.each(toggles, function( i, toggle) {

							$.each(toggle.controls, function( k, controlId) {

								controlId = controlId.replace( '' ).replace( '' );
								var parent = $( '#customize-control-' + controlId ).closest( '.control-section' );
								if ( typeof parent != 'undefined' ) {

									var parentId = parent.attr( 'id' );
									var visibleIt = false;

									parent.find( ' > .customize-control' ).each(function(i,e) {
										if ( $( this ).css( 'display' ) != 'none' ) {
											visibleIt = true;
										}
									});

									if ( ! visibleIt ) {
										$( '.control-section[aria-owns="' + parentId + '"]' ).addClass( 'newsmash-hide' );
									} else {
										$( '.control-section[aria-owns="' + parentId + '"]' ).removeClass( 'newsmash-hide' );
									}
								}
							});
						});
					},300);
				});

				$.each(toggles, function( i, toggle) {

					$.each(toggle.controls, function( k, controlId) {

						controlId = controlId.replace( '' ).replace( '' );
						var parent = $( '#customize-control-' + controlId ).closest( '.control-section' );

						if ( typeof parent != 'undefined' ) {

							var parentId = parent.attr( 'id' );
							var visibleIt = false;

							parent.find( ' > .customize-control' ).each(function(i,e) {
								if ( $( this ).css( 'display' ) != 'none' ) {
									visibleIt = true;
								}
							});

							if ( ! visibleIt ) {
								$( '.control-section[aria-owns="' + parentId + '"]' ).addClass( 'newsmash-hide' );
							} else {
								$( '.control-section[aria-owns="' + parentId + '"]' ).removeClass( 'newsmash-hide' );
							}
						}
					});
				});

			});
		}
	};

	$( function() { NEWSMASHCustomizer.init(); } );

})( jQuery );
