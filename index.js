/*
 * jQuery File Upload Plugin JS
 * Copyright 2010, Sebastian Tschan
 * Copyright 2017, Ambient Innovation GmbH
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, regexp: true */
/*global $, window, blueimp */

$(function () {
    'use strict';
    // TODO: The usage of IDS in many places will let us only use one file uploader per screen
    var fileuploadElement =  $('#ai-fileupload');

    // Initialize the jQuery File Upload widget:
    // Uncomment the following to send cross-domain cookies:
    fileuploadElement.fileupload({
        // xhrFields: {withCredentials: true},
        // url: 'server/php/'
    });

    // Enable iframe cross-domain access via redirect option:
    fileuploadElement.fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );


    // Load existing files:
    fileuploadElement.addClass('fileupload-processing');
    var content_type_id = $('#content_type_id').val();
    var object_id = $('#object_id').val();
    $.ajax({
        // Uncomment the following to send cross-domain cookies:
        // xhrFields: {withCredentials: true},
        // url: fileuploadElement.fileupload('option', 'url'),

        url: '/upload/view/?content_type_id=' + content_type_id + '&object_id=' + object_id,
        dataType: 'json',
        context: fileuploadElement[0]
    }).always(function () {
        $(this).removeClass('fileupload-processing');
    }).done(function (result) {
        $(this).fileupload('option', 'done')
            .call(this, $.Event('done'), {result: result});
    });

});
