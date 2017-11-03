ai-django-fileupload
=========

This package is intended to be used along with [ai-django-fileupload](https://pypi.python.org/pypi) python package in a Django project.

Initializes the uploader widget, and renders the attachments table.

## Usage

For a minimal setup, please import the following scripts. Order is important.

```
  <!-- jQuery -->
  <script src="/static/node_modules/jquery/dist/jquery.js"></script>

  <!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
  <script src="/static/node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js"></script>

  <!-- The Templates plugin is included to render the upload/download listings -->
  <script src="/static/node_modules/blueimp-tmpl/js/tmpl.min.js"></script>

  <!-- The Load Image plugin is included for the preview images and image resizing functionality -->
  <script src="/static/node_modules/blueimp-load-image/js/load-image.all.min.js"></script>

  <!-- The Canvas to Blob plugin is included for image resizing functionality -->
  <script src="/static/node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.min.js"></script>

  <!-- The basic File Upload plugin and components-->
  <script src="/static/node_modules/blueimp-file-upload/js/jquery.fileupload.js"></script>
  <script src="/static/node_modules/blueimp-file-upload/js/jquery.fileupload-process.js"></script>
  <script src="/static/node_modules/blueimp-file-upload/js/jquery.fileupload-image.js"></script>
  <script src="/static/node_modules/blueimp-file-upload/js/jquery.fileupload-audio.js"></script>
  <script src="/static/node_modules/blueimp-file-upload/js/jquery.fileupload-video.js"></script>
  <script src="/static/node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js"></script>
  <script src="/static/node_modules/blueimp-file-upload/js/jquery.fileupload-ui.js"></script>

  <!-- Locale -->
  <script src="/static/node_modules/ai-django-fileupload/locale.js"></script>

  <!-- CSRF token -->
  <script src="/static/node_modules/ai-django-fileupload/csrf.js"></script>

  <!-- The main application script -->
  <script src="/static/node_modules/ai-django-fileupload/index.js"></script>

  <!-- The XDomainRequest Transport is included for cross-domain file deletion for IE8+ -->
  <!--[if gte IE 8]>
  <script src="/static/node_modules/blueimp-file-upload/js/cors/jquery.xdr-transport.js"></script>
  <![endif]-->
```

## License

Released under the [MIT license](https://opensource.org/licenses/MIT).