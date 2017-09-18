<div class="box_scrollads">

	<div class="page-header">
		<h1><?php esc_html_e('광고설정', 'scrollads-textdomain'); ?></h1>
	</div>

	<?php Scrollads_Admin::view('notice'); ?>

	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active"><a href="#basic" aria-controls="basic" role="tab" data-toggle="tab"><?php esc_html_e('기본형', 'scrollads-textdomain'); ?></a></li>
		<li role="presentation"><a href="#native" aria-controls="native" role="tab" data-toggle="tab"><?php esc_html_e('네이티브', 'scrollads-textdomain'); ?></a></li>
		<li role="presentation"><a href="#comment" aria-controls="comment" role="tab" data-toggle="tab"><?php esc_html_e('댓글형', 'scrollads-textdomain'); ?></a></li>
		<li role="presentation"><a href="#paragraph" aria-controls="paragraph" role="tab" data-toggle="tab"><?php esc_html_e('문단형', 'scrollads-textdomain'); ?></a></li>
	</ul>

	<div class="tab-content">
		<h3></h3>
		<!-- 기본형 광고 설정 -->
		<div role="tabpanel" class="tab-pane fade in active" id="basic">
			<form name="form_config_basic" id="form_config_basic" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST" class="form-horizontal">
				<div class="row">
					<div class="col-xs-11 col-sm-6">


<!--						<div class="form-group has-success has-feedback">
							<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('광고 영역 지정', 'scrollads-textdomain'); ?></label>
							<div class="col-sm-9">
								<input name="ads_area" id="ads_area" type="text" value="<?php echo $ads_area; ?>" placeholder="<?php _e('광고가 표시될 영역을 지정해주세요.', 'scrollads-textdomain'); ?>" class="form-control">
								<p class="help-block"><?php _e('광고가 표시될 영역을 지정해주세요. 글본문 영역을 선택하시는 것이 좋습니다. 기본값은 ".ads_area, body.single #content"입니다.<br/>자세한 작성방법은 <a href="http://api.jquery.com/category/selectors/" target="_blank">jQuery Selector</a>를 참고하시면 됩니다.', 'scrollads-textdomain'); ?></p>
							</div>
						</div>-->

						<div class="form-group has-success has-feedback">
							<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('광고 전환선 설정', 'scrollads-textdomain'); ?></label>
							<div class="col-sm-9">
								<input type="hidden" name="ads_position" id="ads_position" value="<?php echo $ads_position ?>" />
								<div class="box_ads_position" style="max-width:300px">
									<iframe name="iframe_preview" id="iframe_preview" src="<?php echo site_url(); ?>?t=<?php echo time(); ?>" class="box_website_preview" scrolling="yes"></iframe>
									<div class="line_ads_position" style="top: <?php echo ($ads_position) . '%' ?>;"></div>
									<div id="ads_position_slider" class="slider" target="#ads_position"></div>
								</div>
								<p class="help-block">
									미리보기: <a href="<?php echo site_url(); ?>?t=<?php echo time(); ?>" target="iframe_preview">열기</a>,
									<a href="about:blank" target="iframe_preview">닫기</a>
								</p>
								<p class="help-block"><?php _e('광고 전환선 아래에 광고가 표시되고 위에는 원본이 표시됩니다.<br />아래 있던 광고는 광고 전환선 위로 올라가면 사라집니다. 다시 아래로 내려오면 광고가 표시됩니다.', 'scrollads-textdomain'); ?></p>
							</div>
						</div>

					</div>
					<div class="col-xs-12 col-sm-6">

						<div class="form-group has-success has-feedback">
							<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('광고문구의 밀도(%) 설정', 'scrollads-textdomain'); ?></label>
							<div class="col-sm-9">
								<input type="hidden" name="keyword_exchage_percent" id="keyword_exchage_percent" value="<?php echo $keyword_exchage_percent ?>" />
								<div class="box_slider box_keyword_exchage_percent">
									<div id="keyword_exchage_percent_slider" class="slider" target="#keyword_exchage_percent"></div>
								</div>
								<p class="help-block"><?php _e('광고문구의 표시량을 설정합니다.<br/>값이 커질수록 광고문구의 수가 많아지고 광고 사이의 간격이 좁아집니다.<br/>기본값은 30입니다.', 'scrollads-textdomain'); ?></p>
							</div>
						</div>

						<div class="form-group has-success has-feedback">
							<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('광고의 이미지 간격 설정', 'scrollads-textdomain'); ?></label>
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
								<input id="btn_save_adconfig_basic" type="button" class="btn btn-primary" value="<?php esc_attr_e('적용', 'scrollads-textdomain'); ?>" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
		<!-- 기본형 광고 설정 -->


		<!-- 네이티브 광고 설정 -->
		<div role="tabpanel" class="tab-pane fade in" id="native">...native
		
		
			<form name="form_config_native" id="form_config_native" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST" class="form-horizontal">
				<div class="row">
					<div class="col-xs-12">

						<div class="form-group has-success has-feedback">
							<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('광고의 이미지 가이드라인 설정', 'scrollads-textdomain'); ?></label>
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
								<input id="btn_save_adconfig_basic" type="button" class="btn btn-primary" value="<?php esc_attr_e('적용', 'scrollads-textdomain'); ?>" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
		<!-- 네이티브 광고 설정 -->
		
		</div>
		<div role="tabpanel" class="tab-pane fade in" id="comment">...comment</div>
		<div role="tabpanel" class="tab-pane fade in" id="paragraph">..paragraph.</div>
	</div>





</div>
