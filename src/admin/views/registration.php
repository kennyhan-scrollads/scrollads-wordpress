<div class="wrap box_scrollads">

	<?php Scrollads_Admin::view( 'notice' ); ?>
		
	<div class="page-header">
		<h1><?php esc_html_e('스크롤애드', 'scrollads-textdomain'); ?> <small><?php esc_html_e('사이트 등록', 'scrollads-textdomain'); ?></small></h1>
	</div>

	<form id="form-registe" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST" class="form-horizontal">

		<!-- 사용자 정보 -->
		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('아이디(이메일)', 'scrollads-textdomain'); ?></label>
			<div class="col-sm-8">
				<input name="user_email" id="user_email" type="text" value="<?php echo $user_email; ?>" placeholder="<?php _e('아이디(이메일)을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
			</div>
		</div>
		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3" for="user_name"><?php esc_html_e('이름', 'scrollads-textdomain'); ?></label>
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
				<p class="text-primary"><?php _e('사이트 키는 자동으로 생성됩니다.', 'scrollads-textdomain'); ?></p>
			</div>
		</div>


		<div class="form-group has-success has-feedback">
			<label class="control-label col-sm-3"></label>
			<div class="col-sm-8">
				<input type="hidden" name="action" value="save-config">
				<input type="hidden" name="nextpage" value="dashboard">
				<input id="btn_registe" type="button" class="btn btn-primary btn-lg  btn-block" value="<?php esc_attr_e('등록', 'scrollads-textdomain'); ?>" />
			</div>
		</div>

	</form>
		
</div>
