<div class="wrap box_scrollads">
	
	<?php Scrollads_Admin::view( 'notice' ); ?>
	
	<div class="page-header">
		<h1><?php esc_html_e('스크롤애드', 'scrollads-textdomain'); ?> <small><?php esc_html_e('등록정보', 'scrollads-textdomain'); ?></small></h1>
	</div>

	<form id="form-registe" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST" class="form-horizontal">

		<!-- 사용자 정보 -->
		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="user_email"><?php _e('아이디(이메일)', 'scrollads-textdomain'); ?></label>
			<div class="col-sm-8">
				<input name="user_email" id="user_email" type="text" value="<?php echo $user_email; ?>" placeholder="<?php _e('아이디(이메일)을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
			</div>
		</div>
		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="user_name"><?php _e('이름', 'scrollads-textdomain'); ?></label>
			<div class="col-sm-8">
				<input name="user_name" id="user_name" type="text" value="<?php echo $user_name; ?>" placeholder="<?php _e('이름을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
			</div>
		</div>

		<!-- 사이트 정보 -->
		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="site_name"><?php esc_html_e('사이트 이름', 'scrollads-textdomain'); ?></label>
			<div class="col-sm-8">
				<input name="site_name" id="site_name" type="text" value="<?php echo $site_name; ?>" placeholder="<?php _e('사이트 이름을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
			</div>
		</div>
		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="site_url"><?php esc_html_e('사이트 URL', 'scrollads-textdomain'); ?></label>
			<div class="col-sm-8">
				<input name="site_url" id="site_url" type="text" value="<?php echo $site_url; ?>" placeholder="<?php _e('사이트 URL을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
			</div>
		</div>
		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="site_key"><?php esc_html_e('사이트 키', 'scrollads-textdomain'); ?></label>
			<div class="col-sm-8">
				<input name="site_key" id="site_key" type="hidden" value="<?php echo $site_key; ?>"/>
				<p class="form-control-static"><mark class="lead"><?php echo $site_key; ?></mark></p>
				<p class="text-danger"><?php _e('사이트 키를 외부에 노출되지 않도록 주의해주세요.', 'scrollads-textdomain'); ?></p>
			</div>
		</div>
<!--		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="site_url"><?php esc_html_e('Paypal E-mail', 'scrollads-textdomain'); ?></label>
			<div class="col-sm-8">
				<input name="paypal_email" id="paypal_email" type="text" value="<?php echo $paypal_email; ?>" placeholder="<?php _e('출금 받을 페이팔 이메일을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
			</div>
		</div>-->


		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3"></label>
			<div class="col-sm-8">
				<input type="hidden" name="action" id="action" value="save-config">
				<input type="hidden" name="pid" id="pid" value="">
				<input id="btn_save_config" type="button" class="btn btn-primary btn-lg btn-block" value="<?php _e('저장', 'scrollads-textdomain'); ?>" />
			</div>
		</div>

	</form>
		

</div>
