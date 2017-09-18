<div id="message">
<?php  $_notice = Scrollads_Admin::$notices; if ( !empty($_notice) ) { foreach($_notice as $_row) { ?>
	<div class="alert alert-<?php echo $_row['type'];?> fade in" role="alert"><?php echo $_row['msg']; ?><button type="button" class="close" data-dismiss="alert" aria-label="<?php esc_html_e( 'Close' , 'scrollads-textdomain'); ?>"><span aria-hidden="true">&times;</span></button></div>
<?php }}?>
<!-- Bootstrap type
	<div class="alert alert-success fade in" role="alert">alert message : success<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
	<div class="alert alert-info fade in" role="alert">alert message : info<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
	<div class="alert alert-warning fade in" role="alert">alert message : warning<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
	<div class="alert alert-danger fade in" role="alert">alert message : danger<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
-->
</div>