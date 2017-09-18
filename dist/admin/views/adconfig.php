<div class="wrap box_scrollads">

	<?php Scrollads_Admin::view( 'notice' ); ?>
	
	<div class="page-header">
		<h1><?php esc_html_e('스크롤애드', 'scrollads-textdomain'); ?> <small><?php esc_html_e('광고설정', 'scrollads-textdomain'); ?></small></h1>
	</div>

	<div class="tab-content">
		<!-- 기본형 광고 설정 -->
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<form name="form_config_basic" id="form_config_basic" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST" class="form-horizontal">

					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('이미지 애니메이션 효과', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<label for="animation_effect-flip"><?php esc_html_e('Flip', 'scrollads-textdomain'); ?></label>
							<input type="radio" name="animation_effect" id="animation_effect-flip" value="flip" class="checkboxradio"<?php echo( $animation_effect=='flip' ? ' checked=""' : ''); ?>>
							<label for="animation_effect-card"><?php esc_html_e('Scroll', 'scrollads-textdomain'); ?></label>
							<input type="radio" name="animation_effect" id="animation_effect-card" value="scroll" class="checkboxradio"<?php echo( $animation_effect=='scroll' ? ' checked=""' : ''); ?>>
							<p class="help-block"><?php _e('이미지 광고가 바뀌는 애니메이션 효과를 선택하세요.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>

					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('택스트 광고 전환위치', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<input type="hidden" name="text_position" id="text_position" value="<?php echo $text_position ?>" />
							<div class="box_slider box_keyword_position">
								<div id="text_position_slider" class="slider" target="#text_position"></div>
							</div>
							<p class="help-block"><?php _e('택스트 광고 전환선 아래에 광고가 표시되고 위에는 원본이 표시됩니다.<br />아래 있던 광고는 광고 전환선 위로 올라가면 사라집니다. 다시 아래로 내려오면 광고가 표시됩니다.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('택스트 광고 밀도(%)', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<input type="hidden" name="keyword_exchage_percent" id="keyword_exchage_percent" value="<?php echo $keyword_exchage_percent ?>" />
							<div class="box_slider box_keyword_exchage_percent">
								<div id="keyword_exchage_percent_slider" class="slider" target="#keyword_exchage_percent"></div>
							</div>
							<p class="help-block"><?php _e('택스트 광고의 표시량을 설정합니다.<br/>값이 커질수록 택스트 광고가 많아지고 광고 사이의 간격이 좁아집니다.<br/>기본값은 30입니다.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('이미지 광고 전환위치', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<input type="hidden" name="image_position" id="image_position" value="<?php echo $image_position ?>" />
							<div class="box_slider box_image_position">
								<div id="image_position_slider" class="slider" target="#image_position"></div>
							</div>
							<p class="help-block"><?php _e('이미지가 바뀌는 위치를 설정합니다.<br />이미지의 높이를 기준으로 작동하는 값으로, 값이 0일때는 이미지가 화면에서 등장하면 바뀝니다. 값이 100이면 이미지의 높이만큼 더 올라가면 바뀌게 됩니다.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('이미지 광고 간격', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<input type="hidden" name="image_step_ratio" id="image_step_ratio" value="<?php echo $image_step_ratio ?>" />
							<div class="box_slider box_image_step_ratio">
								<div id="image_step_ratio_slider" class="slider" target="#image_step_ratio"></div>
							</div>
							<p class="help-block"><?php _e('이미지 광고가 적용되는 간격을 설정합니다.<br/>값이 2일때는 1, 3, 5, 7, 9, ... 간격으로 광고가 적용됩니다.
권장값은 2입니다.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3"></label>
						<div class="col-sm-9">
							<input type="hidden" name="action" value="save-config">
							<input id="btn_save_adconfig_basic" type="button" class="btn btn-primary btn-lg btn-block" value="<?php esc_attr_e('적용', 'scrollads-textdomain'); ?>" />
						</div>
					</div>
					
				</form>
			</div>
			
			<div class="col-xs-12 col-sm-6">
				<div class="form-group has-success has-feedback">
					<div class="col-sm-12">
						<!--<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('미리보기', 'scrollads-textdomain'); ?></label>-->
						<div class="preview_ad" style="">
							<div class="preview_wrap">
								<iframe id="previewAd" src="<?php echo site_url(); ?>?t=<?php echo time(); ?>" width="367" height="580" frameborder="0"></iframe>
								<div class="line_text_position" style="top: <?php echo ($text_position) . '%' ?>;"><?php _e('택스트 광고 전환위치', 'scrollads-textdomain'); ?> </div>
								<img src="<?php echo SCROLLADS_PLUGIN_URL; ?>admin/images/phone_frame_417x776_365x568.png" alt="">
							</div>
						</div>
						<p class="help-block hide"><?php _e('택스트 광고는 빨간색선 아래에 광고가 표시되고 위에는 원본이 표시됩니다.', 'scrollads-textdomain'); ?></p>
					</div>
				</div>
			</div>
			
		</div>
		<!-- 기본형 광고 설정 -->

	</div>

</div>
