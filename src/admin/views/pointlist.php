<div class="wrap box_scrollads">

	<?php Scrollads_Admin::view( 'notice' ); ?>

	<div class="page-header">
		<h1><?php esc_html_e('스크롤애드', 'scrollads-textdomain'); ?> <small><?php esc_html_e('수익금 관리', 'scrollads-textdomain'); ?></small></h1>
	</div>

	<div class="tab-content">

		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<form name="form_request_sendmoney" id="form_request_sendmoney" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST" class="form-horizontal">
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('보유금액', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<p class="form-control-static lead">0</p>
							<p class="help-block"><?php _e('보유금액만큼 출금 가능합니다.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="user_email"><?php esc_html_e('신청 금액($)', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<input type="hidden" name="amount" id="amount" value="0" />
							<div class="box_slider box_amount">
								<div id="amount_slider" class="slider" target="#amount"></div>
							</div>
							<p class="help-block"><?php _e('$100 이상부터 신청 가능합니다.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="paypal_email"><?php esc_html_e('Paypal E-mail', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<input name="paypal_email" id="paypal_email" type="text" value="<?php echo $paypal_email; ?>" placeholder="<?php _e('입급 받을 페이발 이메일을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
							<p class="help-block"><?php _e('수익금은 페이팔 계정으로 보내드립니다. 페이팔 정책에 따라 수수료는 수신자 부담입니다. 자세한 수수료는 <a href="https://www.paypal.com/kr/webapps/mpp/paypal-fees?locale.x=en" target="_balnk">페이팔 홈페이지</a>를 참고하세요.', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3" for="reciever_name"><?php esc_html_e('받는 사람 이름', 'scrollads-textdomain'); ?></label>
						<div class="col-sm-9">
							<input name="reciever_name" id="reciever_name" type="text" value="<?php echo $paypal_email; ?>" placeholder="<?php _e('입급 받는분의 이름을 써주세요.', 'scrollads-textdomain'); ?>" class="form-control">
							<p class="help-block"><?php _e('', 'scrollads-textdomain'); ?></p>
						</div>
					</div>
					<div class="form-group has-success has-feedback">
						<label class="control-label col-sm-3"></label>
						<div class="col-sm-9">
							<input type="hidden" name="action" value="request_sendmoney">
							<input id="btn_request_refund" type="button" class="btn btn-primary btn-lg btn-block" value="<?php esc_attr_e('출금 신청', 'scrollads-textdomain'); ?>" />
						</div>
					</div>
				</form>
			</div>
			<div class="col-xs-12 col-sm-6">
				<div class="table-responsive" id="table-pointlist">
					<table cellspacing="0" id="table_point_list" class="table table-bordered table-hover table-condensed">
						<colgroup>
							<col />
							<col />
							<col />
							<col />
						</colgroup>
						<thead>
							<tr>
								<th id="date" scope="col" class="manage-column column-date"><?php esc_html_e('날짜', 'scrollads-textdomain'); ?></th>
								<th id="amount" scope="col" class="box_title_left"><?php esc_html_e('금액($)', 'scrollads-textdomain'); ?></th>
								<th id="status" scope="col" class="box_title_left"><?php esc_html_e('상태', 'scrollads-textdomain'); ?></th>
								<th id="status" scope="col" class="box_title_left"><?php esc_html_e('수신자', 'scrollads-textdomain'); ?></th>
							</tr>
						</thead>
						<tbody>
							<tr><td colspan="4" class="text-center"><?php _e('내역이 없습니다.', 'scrollads-textdomain'); ?></td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
