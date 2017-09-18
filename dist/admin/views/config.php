<div class="wrap box_scrollads">

	<h2><?php esc_html_e( '스크롤애드' , 'scrollads-textdomain');?> - adconfig</h2>

	<?php Scrollads_Admin::view( 'notice' ); ?>
	
	<?php /* <h2 id="scrollads-nav" class="nav-tab-wrapper">
			
		<a class="nav-tab" href="http://www.good2.co.kr/wp-admin/user-edit.php?user_id=10">프로필</a>
		<a class="nav-tab nav-tab-active" href="http://www.good2.co.kr/wp-admin/users.php?page=bp-profile-edit&amp;user_id=10">확장 프로필</a>
		<a class="nav-tab" href="http://www.good2.co.kr/wp-admin/users.php?page=mycred-edit-balance&amp;user_id=10&amp;ctype=mycred_default">굿투포인트</a><a class="nav-tab" href="http://www.good2.co.kr/wp-admin/users.php?page=mycred-edit-badges&amp;user_id=10">뱃지 (0)</a>
	</h2> */ ?>

	<?php /* ?>

		<div class="new-snapshot stats">

			<span style="float:right;margin:10px 15px -5px 0px">
				<a href="<?php echo esc_url( Scrollads_Admin::get_page_url( 'stats' ) ); ?>" class=""><?php esc_html_e( '요약' , 'scrollads');?></a>
			</span>

			<ul>
				<li>
					<h3><?php esc_html_e( '보유금액($)' , 'scrollads');?></h3>
					<?php esc_html_e( '이번달 수입: ' , 'scrollads');?><span><?php echo number_format( 0 );?></span><br />
					<?php esc_html_e( '지난달 수입: ' , 'scrollads');?><span><?php echo number_format( 0 );?></span>
					<div>일자별 차트 영역</div>
				</li>
			</ul>
			<div class="clearfix"></div>
		</div>
	<?php */ ?>

	
	<div id="dashboard-widgets-wrap">
	
	<?php // if ( $scrollads_user ):?>

		<div id="dashboard-widgets" class="metabox-holder">
		
			<!-- left box -->
			<div id="postbox-container-1" class="postbox-container" >
				<div id="normal-sortables-1" class="meta-box-sortables ui-sortable">
			
			
			
				<!-- 사이트 키 -->
					<div id="box_config_site" class="postbox ">
						<div class="handlediv" title="<?php _e( 'Click to toggle');?>"><br></div>
						<h3 class="hndle ui-sortable-handle"><span><?php esc_html_e( '사이트 정보' , 'scrollads');?></span></h3>
						<form name="scrollads_form_advertiser" id="scrollads_form_advertiser" action="<?php echo esc_url( Scrollads_Admin::get_page_url() ); ?>" method="POST">
							<div class="inside">
								<table cellspacing="0" class="scrollads-settings width_full">
									<tbody>
										<tr>
											<th align="left" scope="row" class="box_title_left">
												<?php esc_html_e('사이트 이름', 'scrollads');?>
											</th>
											<td></td>
											<td align="left">
												<p>
													<label><input type="text" name="site_name" id="site_name" value="<?php echo $site_name; ?>" class="width_full" /></label>
												</p>
											</td>
										</tr>
										<tr>
											<th align="left" scope="row" class="box_title_left"><?php esc_html_e('사이트 URL', 'scrollads');?><span class="tooltip"> ? <span><?php esc_html_e('현재 웹사이트의 URL을 등록해주세요. 등록된 URL에서만 모든 작업들이 가능합니다. ', 'scrollads');?></span></span></th>
											<td></td>
											<td align="left">
												<p>
													<label><input type="text" name="site_url" id="site_url" value="<?php echo $site_url;?>" class="width_full" /></label>
												</p>
											</td>
										</tr>
										<tr>
											<th align="left" scope="row" class="box_title_left">
												<?php esc_html_e('사이트 번호', 'scrollads');?>
												<span class="tooltip"> ? <span><?php esc_html_e('사이트 번호는 자동으로 생성됩니다.', 'scrollads');?></span></span>
											</th>
											<td></td>
											<td align="left">
												<p>
													<label><input type="text" name="site_idx" id="site_idx" value="<?php echo $site_idx; ?>" class="width_full" readonly="" /></label>
												</p>
											</td>
										</tr>
										<tr>
											<th align="left" scope="row" class="box_title_left"><?php esc_html_e('사이트 키', 'scrollads');?><span class="tooltip"> ? <span><?php esc_html_e('사이트 키는 자동으로 생성됩니다.', 'scrollads');?></span></span></th>
											<td></td>
											<td align="left">
												<p>
													<label><input type="text" name="site_key" id="site_key" value="<?php echo $site_key; ?>" class="width_full" readonly="" /></label>
												</p>
												<p class="text_important"><?php _e('사이트 키는 외부에 노출되지 않도록 주의해 주세요. ', 'scrollads');?></p>
											</td>
										</tr>
									</tbody>
								</table>
								<div class="box_btn">
									<?php wp_nonce_field(Scrollads_Admin::NONCE) ?>
									<div id="publishing-action">
											<input type="hidden" name="action" value="save-config">
											<input type="submit" name="submit" id="submit" class="button button-primary" value="<?php esc_attr_e('저장하기', 'scrollads');?>">
									</div>
									<div class="clear"></div>
								</div>
							</div>
						</form>
					</div>
				<!-- 사이트 키 -->
				
				<!-- 퍼블리셔 광고 설정 -->
					<div id="box_config_ads" class="postbox ">
						<div class="handlediv" title="<?php _e( 'Click to toggle');?>"><br></div>
						<h3 class="hndle ui-sortable-handle"><span><?php esc_html_e('광고 설정', 'scrollads');?></span></h3>
						<!-- http://119.69.239.99/single/wp-admin/options-general.php?page=scrollads-key-config -->
						<form name="scrollads_form_publisher" id="scrollads_form_publisher" action="<?php echo esc_url( Scrollads_Admin::get_page_url() ); ?>" method="POST">
							<div class="inside">


								<table cellspacing="0" class="scrollads-settings width_full mt_10">
									<tbody>
										<tr>
											<th align="left" scope="row" class="box_title_left width_30p"><?php esc_html_e('광고 영역 지정', 'scrollads');?><span class="tooltip"> ? <span><?php _e('광고가 표시될 영역을 지정해주세요. 글본문 영역을 선택하시는 것이 좋습니다.<br/>기본값은 ".ads_area"입니다.<br/>자세한 작성방법은 <a href="http://api.jquery.com/category/selectors/" target="_blank">jQuery Selector</a>를 참고하시면 됩니다.', 'scrollads');?></span></span></th>
											<td align="left">
												<input type="text" name="ads_area" id="ads_area" value="<?php echo $ads_area?>" class="width_full"/>
											</td>
										</tr>
										<tr>
											<td align="left" colspan="2">
												<p>
													<span class="bold"><?php esc_html_e('광고 전환 지점', 'scrollads');?></span>
													<span class="tooltip"> ? <span><?php _e('광고 전환 지점 아래에 광고가 표시되고 위에는 원본이 표시됩니다.<br />아래 있던 광고는 광고전환지점 위로 올라가면 사라집니다. 다시 아래로 내려오면 광고가 표시됩니다.', 'scrollads');?></span></span>
													<input type="hidden" name="ads_position" id="ads_position" value="<?php echo $ads_position?>" />
												</p>
												<div class="box_ads_position">
													<iframe name="iframe_preview" src="about:blank" class="box_website_preview" ></iframe>
													<div class="line_ads_position" style="top: <?php echo ((20 - $ads_position) * 5) . '%'?>;"></div>
													<div id="ads_position_slider" class="slider" target="#ads_position"></div>
												</div>
												<p>
													미리보기: <a href="<?php echo site_url();?>?t=<?php echo time();?>" target="iframe_preview">열기</a>,
													<a href="about:blank" target="iframe_preview">닫기</a>
												</p>
											</td>
										</tr>
										<tr>
											<th align="left" scope="row" class="box_title_left width_30p">
												<?php esc_html_e('텍스트 광고량 설정', 'scrollads');?>
												<span class="tooltip"> ? <span><?php _e('텍스트 광고가 표시되는 양을 지정합니다.<br/>광고 영역의 단어수에 비례하여 광고가 셋팅됩니다.<br/>기본값은 5%입니다.', 'scrollads');?></span></span>
											</th>
											<td align="left">
												<input type="hidden" name="keyword_exchage_percent" id="keyword_exchage_percent" value="<?php echo $keyword_exchage_percent?>" />
												<div class="box_keyword_exchage_percent">
													<div id="keyword_exchage_percent_slider" class="slider" target="#keyword_exchage_percent"></div>
												</div>
									
											</td>
										</tr>
										<tr>
											<th align="left" scope="row" class="box_title_left width_30p"><?php esc_html_e('텍스트 트랜지션', 'scrollads');?></th>
											<td align="left">
												<select name="text_effects" id="text_effects">
													<option value="flip" <?php echo $text_effects=='flip' ? 'selected=""' : '' ?>>flip</option>
												</select>
											</td>
										</tr>
										<tr>
											<th align="left" scope="row" class="box_title_left width_30p"><?php esc_html_e('이미지 트랜지션', 'scrollads');?></th>
											<td align="left">
												<select name="img_effects" id="img_effects">
													<option value="flip" <?php echo $img_effects=='flip' ? 'selected=""' : '' ?>>flip</option>
												</select>
											</td>
										</tr>
									</tbody>
								</table>
								
								
							</div>
							<div class="box_btn">
								<?php wp_nonce_field(Scrollads_Admin::NONCE) ?>
								<div id="publishing-action">
										<input type="hidden" name="action" value="save-config">
										<input type="submit" name="submit" id="submit" class="button button-primary" value="<?php esc_attr_e('저장하기', 'scrollads');?>" >
								</div>
								<div class="clear"></div>
							</div>
						</form>
					</div>
				<!-- 퍼블리셔 광고 설정 -->
				
				<!-- 광고 등록하기 -->
					<div id="box_myads_list" class="postbox ">
						<div class="handlediv" title="<?php _e( 'Click to toggle');?>"><br></div>
						<h3 class="hndle ui-sortable-handle"><span><?php esc_html_e( '블로그 최신글 알리기' , 'scrollads');?></span>
						<span class="tooltip"> ? <span><?php _e('스크롤애드를 사용하는 전세계 여러 블로거들에게 블로그의 최신글을 공개 하세요.', 'scrollads');?></span></span></h3>
						<form name="scrollads_form_advertiser" id="scrollads_form_advertiser" action="<?php echo esc_url( Scrollads_Admin::get_page_url() ); ?>" method="POST">
							<div class="inside">

								<p>
									<label for="ads_lang_code"><?php esc_html_e('블로그 최신글 알리기', 'scrollads');?> 
									<span class="tooltip"> ? <span><?php _e('활성화 하시면 신규 글이 잘성될때 스크롤애드를 통하여 최대 10개까지 공유됩니다. 비활성화 하시면 블로그의 정보를 공유하지 않습니다.', 'scrollads');?></span></span>
									</label>
									<select name="ads_active" id="ads_active">
										<option value="Y"<?php echo $ads_active=='Y' ? 'selected=""' : ''?>><?php _e('예, 공유합니다.', 'scrollads'); ?></option>
										<option value="N"<?php echo $ads_active=='N' ? 'selected=""' : ''?>><?php _e('아니요, 공유하지 마세요.', 'scrollads'); ?></option>
									</select>
								</p>
							
								<p>
									<label for="ads_lang_code"><?php esc_html_e('블로그 언어', 'scrollads');?> 
									<span class="tooltip"> ? <span><?php _e('광고의 언어를 선택해주세요.<br/>선택하신 언어를 사용하는 사용자에게 광고가 보여집니다.<br/>기본값은 현재 워드프레스에서 설정한 언어값입니다.', 'scrollads');?></span></span>
									</label>
<?php
wp_dropdown_languages( array(
	'name'         => 'ads_lang_code',
	'id'           => 'ads_lang_code',
	'selected'     => $ads_lang_code
) );
?>
								</p>
								
								<label><?php esc_html_e('공유중인 포스트', 'scrollads');?> </label>
								<ol>
									<?php for($i=0; $i<10; $i++) {  if(empty($ads_item[$i])){continue;}?>
									<li>
										<div>
											<?php esc_html_e('제목: ', 'scrollads')?>
											<?php echo htmlspecialchars($ads_item[$i],ENT_QUOTES).''?>
										</div>
										<div>
											<?php esc_html_e('링크 주소: ', 'scrollads')?>
											<?php echo '<a href="'.$ads_link[$i].'" target="_blank">'.$ads_link[$i].'</a>'?>
										</div>
									</li>
									<?php } ?>
								</ol>

							</div>
							<div class="box_btn">
								<?php wp_nonce_field(Scrollads_Admin::NONCE) ?>
								<div id="publishing-action">
										<input type="hidden" name="action" value="save-config"/>
										<input type="submit" name="submit" id="submit" class="button button-primary" value="<?php esc_attr_e('저장하기', 'scrollads');?>"/>
								</div>
								<div class="clear"></div>
							</div>
						</form>
					</div>
				<!-- 광고 등록하기 -->
				
				</div>
				
			</div>
			
			<!-- right box -->
			<div id="postbox-container-2" class="postbox-container" >
			
				<!-- 수입 내역 -->
				<div id="normal-sortables-2" class="meta-box-sortables ui-sortable">
					<div id="box_earning_list" class="postbox ">
						<div class="handlediv" title="<?php _e( 'Click to toggle');?>"><br></div>
						<h3 class="hndle ui-sortable-handle"><span><?php esc_html_e('수입 내역', 'scrollads');?></span></h3>
						<!-- http://119.69.239.99/single/wp-admin/options-general.php?page=scrollads-key-config -->
						<form name="scrollads_form_publisher" id="scrollads_form_publisher" action="<?php echo esc_url( Scrollads_Admin::get_page_url() ); ?>" method="POST">
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
											<th id="date" scope="col" class="manage-column column-date"><?php esc_html_e('날짜', 'scrollads');?></th>
											<th id="amount" scope="col" class="box_title_left"><?php esc_html_e('금액($)', 'scrollads');?></th>
											<th id="status" scope="col" class="box_title_left"><?php esc_html_e('상태', 'scrollads');?></th>
											<th id="status" scope="col" class="box_title_left"><?php esc_html_e('수입원', 'scrollads');?></th>
										</tr>
									</thead>
									<tbody id="the-list">
										<?php for($i=0; $i<count($lists_earning); $i++){ $row = $lists_earning[$i];?>
										<tr class="<?php echo $i%2==0 ? 'tr_gray' : ''; ?>">
											<td align="left"><?php echo $row->regDate;?></td>
											<td align="right"><?php echo $row->amount;?></td>
											<td align="left"><?php echo $row->strStatus;?></td>
											<td align="left"><?php echo $row->sender;?></td>
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
						<div class="handlediv" title="<?php _e( 'Click to toggle');?>"><br></div>
						<h3 class="hndle ui-sortable-handle"><span><?php esc_html_e('출금 내역', 'scrollads');?></span></h3>

						<div class="inside">

							<form name="scrollads_form_request_sendmoney" id="scrollads_form_request_sendmoney" action="<?php echo esc_url( Scrollads_Admin::get_page_url() ); ?>" method="POST">
								<input type="hidden" name="action" value="request_sendmoney"/>
								<?php esc_html_e('출금 가능 금액:', 'scrollads');?> $ <?php echo number_format($_my_amount); ?> 
								<br />
								<input type="text" name="amount" value="0" style="width:10%;text-align:right" /> <?php esc_html_e('금액을', 'scrollads');?> <input type="text" name="receiver" value="" style="width:20%" /> Paypal 계정으로 <input type="submit" value="<?php esc_html_e('출금신청', 'scrollads');?>"/>
							</form>
							
							<form name="scrollads_form_publisher" id="scrollads_form_publisher" action="<?php echo esc_url( Scrollads_Admin::get_page_url() ); ?>" method="POST">
								<table cellspacing="0" id="tbl_withdrawal_list" class="wp-list-table widefat fixed posts">
									<colgroup>
										<col width="22%" />
										<col width="12%" />
										<col width="20%" />
										<col width="" />
									</colgroup>
									<thead>
										<tr>
											<th id="date" scope="col" class="manage-column column-date"><?php esc_html_e('날짜', 'scrollads');?></th>
											<th id="amount" scope="col" class="box_title_left"><?php esc_html_e('금액($)', 'scrollads');?></th>
											<th id="status" scope="col" class="box_title_left"><?php esc_html_e('상태', 'scrollads');?></th>
											<th id="status" scope="col" class="box_title_left"><?php esc_html_e('수신자', 'scrollads');?></th>
										</tr>
									</thead>
									<tbody id="the-list">
										<?php for($i=0; $i<count($lists_withdrawal); $i++){ $row = $lists_withdrawal[$i];?>
										<tr class="<?php echo $i%2==0 ? 'tr_gray' : ''; ?>">
											<td align="left"><?php echo $row->regDate;?></td>
											<td align="right"><?php echo $row->amount;?></td>
											<td align="left"><?php echo $row->strStatus;?></td>
											<td align="left"><?php echo $row->receiver;?></td>
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
			</div>
			
		</div>

	<?php // endif;?>
	
	</div>

</div>
