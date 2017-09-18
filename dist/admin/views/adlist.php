<div class="wrap box_scrollads">

	<?php Scrollads_Admin::view( 'notice' ); ?>
	
	<h2><?php esc_html_e('스크롤애드', 'scrollads-textdomain'); ?> - <?php esc_html_e('광고관리', 'scrollads-textdomain'); ?></h2>

	<?php /* <h2 id="scrollads-nav" class="nav-tab-wrapper">

	  <a class="nav-tab" href="http://www.good2.co.kr/wp-admin/user-edit.php?user_id=10">프로필</a>
	  <a class="nav-tab nav-tab-active" href="http://www.good2.co.kr/wp-admin/users.php?page=bp-profile-edit&amp;user_id=10">확장 프로필</a>
	  <a class="nav-tab" href="http://www.good2.co.kr/wp-admin/users.php?page=mycred-edit-balance&amp;user_id=10&amp;ctype=mycred_default">굿투포인트</a><a class="nav-tab" href="http://www.good2.co.kr/wp-admin/users.php?page=mycred-edit-badges&amp;user_id=10">뱃지 (0)</a>
	  </h2> */ ?>

	<?php /* ?>

	  <div class="new-snapshot stats">

	  <span style="float:right;margin:10px 15px -5px 0px">
	  <a href="<?php echo esc_url( Scrollads_Admin::get_page_url( 'stats' ) ); ?>" class=""><?php esc_html_e( '요약' , 'scrollads-textdomain');?></a>
	  </span>

	  <ul>
	  <li>
	  <h3><?php esc_html_e( '보유금액($)' , 'scrollads-textdomain');?></h3>
	  <?php esc_html_e( '이번달 수입: ' , 'scrollads-textdomain');?><span><?php echo number_format( 0 );?></span><br />
	  <?php esc_html_e( '지난달 수입: ' , 'scrollads-textdomain');?><span><?php echo number_format( 0 );?></span>
	  <div>일자별 차트 영역</div>
	  </li>
	  </ul>
	  <div class="clearfix"></div>
	  </div>
	  <?php */ ?>

	<?php // if ( $scrollads_user ):?>

	<!-- 수입 내역 -->
	<div id="normal-sortables-2" class="meta-box-sortables ui-sortable">
		<div id="box_earning_list" class="postbox ">
			<div class="handlediv" title="<?php _e('Click to toggle'); ?>"><br></div>
			<h3 class="hndle ui-sortable-handle"><span><?php esc_html_e('수입 내역', 'scrollads-textdomain'); ?></span></h3>
			<!-- http://119.69.239.99/single/wp-admin/options-general.php?page=scrollads-key-config -->
			<form name="scrollads_form_publisher" id="scrollads_form_publisher" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST">
				<div class="inside">

					<table cellspacing="0" class="wp-list-table widefat fixed posts">
						<colgroup>
							<col width="20%" />
							<col width="12%" />
							<col width="20%" />
							<col width="" />
						</colgroup>
						<thead>
							<tr>
								<th id="date" scope="col" class="manage-column column-date"><?php esc_html_e('날짜', 'scrollads-textdomain'); ?></th>
								<th id="amount" scope="col" class="box_title_left"><?php esc_html_e('금액($)', 'scrollads-textdomain'); ?></th>
								<th id="status" scope="col" class="box_title_left"><?php esc_html_e('상태', 'scrollads-textdomain'); ?></th>
								<th id="status" scope="col" class="box_title_left"><?php esc_html_e('수입원', 'scrollads-textdomain'); ?></th>
							</tr>
						</thead>
						<tbody id="the-list">
							<?php for ($i = 0; $i < count($lists_earning); $i++) {
								$row = $lists_earning[$i]; ?>
								<tr class="<?php echo $i % 2 == 0 ? 'tr_gray' : ''; ?>">
									<td align="left"><?php echo $row->regDate; ?></td>
									<td align="right"><?php echo $row->amount; ?></td>
									<td align="left"><?php echo $row->strStatus; ?></td>
									<td align="left"><?php echo $row->sender; ?></td>
								</tr>
<?php } ?>
						</tbody>
					</table>

					<div class="tablenav bottom">
						<div class="alignleft actions bulkactions">
						</div>
						<div class="alignleft actions">
						</div>
						<div class="tablenav-pages">
<?php echo $paging_earning; ?>
							<!--
							<span class="displaying-num">1개의 아이템</span>
							<span class="pagination-links"><a class="first-page disabled" title="첫번째 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php">«</a>
							<a class="prev-page disabled" title="이전 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php?paged=1">‹</a>
							<span class="paging-input"><span class="total-pages">6</span> 의 1</span>
							<a class="next-page" title="다음 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php?paged=2">›</a>
							<a class="last-page" title="마지막 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php?paged=6">»</a></span>
							-->
						</div>
						<br class="clear">
					</div>

				</div>
			</form>
		</div>
		<!-- 수입 내역 -->


		<!-- 지출 내역 -->
		<div id="box_withdrawal_list" class="postbox ">
			<div class="handlediv" title="<?php _e('Click to toggle'); ?>"><br></div>
			<h3 class="hndle ui-sortable-handle"><span><?php esc_html_e('출금 내역', 'scrollads-textdomain'); ?></span></h3>

			<div class="inside">

				<form name="scrollads_form_request_sendmoney" id="scrollads_form_request_sendmoney" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST">
					<input type="hidden" name="action" value="request_sendmoney"/>
<?php esc_html_e('출금 가능 금액:', 'scrollads-textdomain'); ?> $ <?php echo number_format($_my_amount); ?> 
					<br />
					<input type="text" name="amount" value="0" style="width:10%;text-align:right" /> <?php esc_html_e('금액을', 'scrollads-textdomain'); ?> <input type="text" name="receiver" value="" style="width:20%" /> Paypal 계정으로 <input type="submit" value="<?php esc_html_e('출금신청', 'scrollads-textdomain'); ?>"/>
				</form>

				<form name="scrollads_form_publisher" id="scrollads_form_publisher" action="<?php echo esc_url(Scrollads_Admin::get_page_url()); ?>" method="POST">
					<table cellspacing="0" id="tbl_withdrawal_list" class="wp-list-table widefat fixed posts">
						<colgroup>
							<col width="22%" />
							<col width="12%" />
							<col width="20%" />
							<col width="" />
						</colgroup>
						<thead>
							<tr>
								<th id="date" scope="col" class="manage-column column-date"><?php esc_html_e('날짜', 'scrollads-textdomain'); ?></th>
								<th id="amount" scope="col" class="box_title_left"><?php esc_html_e('금액($)', 'scrollads-textdomain'); ?></th>
								<th id="status" scope="col" class="box_title_left"><?php esc_html_e('상태', 'scrollads-textdomain'); ?></th>
								<th id="status" scope="col" class="box_title_left"><?php esc_html_e('수신자', 'scrollads-textdomain'); ?></th>
							</tr>
						</thead>
						<tbody id="the-list">
<?php for ($i = 0; $i < count($lists_withdrawal); $i++) {
	$row = $lists_withdrawal[$i]; ?>
								<tr class="<?php echo $i % 2 == 0 ? 'tr_gray' : ''; ?>">
									<td align="left"><?php echo $row->regDate; ?></td>
									<td align="right"><?php echo $row->amount; ?></td>
									<td align="left"><?php echo $row->strStatus; ?></td>
									<td align="left"><?php echo $row->receiver; ?></td>
								</tr>
<?php } ?>
						</tbody>
					</table>


					<div class="tablenav bottom">
						<div class="alignleft actions bulkactions">
						</div>
						<div class="alignleft actions">
						</div>
						<div class="tablenav-pages">
<?php echo $paging_withdrawal; ?>
							<!--
							<span class="displaying-num">1개의 아이템</span>
							<span class="pagination-links"><a class="first-page disabled" title="첫번째 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php">«</a>
							<a class="prev-page disabled" title="이전 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php?paged=1">‹</a>
							<span class="paging-input"><span class="total-pages">6</span> 의 1</span>
							<a class="next-page" title="다음 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php?paged=2">›</a>
							<a class="last-page" title="마지막 페이지로 가기" href="http://benant.dothome.co.kr/wp-admin/edit.php?paged=6">»</a></span>
							-->
						</div>
						<br class="clear">
					</div>
				</form>
			</div>
		</div>
		<!-- 수입 내역 -->
	</div>

<?php // endif; ?>

</div>
