<div class="wrap box_scrollads">

	<?php Scrollads_Admin::view( 'notice' ); ?>
	
	<div class="page-header">
		<h1><?php esc_html_e('스크롤애드', 'scrollads-textdomain'); ?> <small><?php esc_html_e('통계', 'scrollads-textdomain'); ?></small></h1>
	</div>

	<form class="form-inline" style="margin-bottom: 20px;" method="get">
		<div class="form-group">
			<label for="start_date"><?php esc_html_e('통계 기간 설정', 'scrollads-textdomain'); ?>: </label>
			<div class="input-group">
				<input type="text" class="form-control text-center datepicker_from" name="start_date" id="start_date" placeholder="<?php esc_html_e('시작날짜', 'scrollads-textdomain'); ?>" value="<?php echo $_GET['start_date'];?>">
				<div class="input-group-addon text-center">~</div>
				<input type="text" class="form-control text-center datepicker_to" name="stop_date" id="stop_date" placeholder="<?php esc_html_e('종료날짜', 'scrollads-textdomain'); ?>" value="<?php echo $_GET['stop_date'];?>">
			</div>
			<input type="hidden" name="page" value="<?php echo $_GET['page'];?>"/>
			<button type="submit" class="btn btn-default"><?php esc_html_e('조회', 'scrollads-textdomain'); ?></button>
		</div>
	</form>

	<div class="row">
<!--		<div class="col-xs-6 col-md-3">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title"><?php esc_html_e('포인트', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body box_big" id="my_point">0</div>
			</div>
		</div>-->
		<div class="col-xs-6 col-md-3">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title"><?php esc_html_e('수익', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body box_big" id="price_in"><small>$</small>0</div>
			</div>
		</div>
		<div class="col-xs-6 col-md-3">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title "><?php esc_html_e('콘텐츠 노출수', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body box_big" id="cv">0</div>
			</div>
		</div>
		<div class="col-xs-6 col-md-3">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title "><?php esc_html_e('클릭수', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body box_big" id="click">0</div>
			</div>
		</div>
		<div class="col-xs-6 col-md-3">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title "><?php esc_html_e('클릭률', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body box_big" id="ctr_cv">0<small>%</small></div>
			</div>
		</div>

	</div>

	<div class="row">
		<div class="col-xs-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title "><?php esc_html_e('일별 통계', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="">
							<div class="form-group">
								<div id="amChart_1" style="height:500px;width:100%;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-xs-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title "><?php esc_html_e('일별 상세 정보', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body">
					<table class="table table-bordered table-striped table-condensed flip-content table-hover" id="table_1">
						<thead class="flip-content">
							<tr>
								<th class="text-center" translate> <?php esc_html_e('날짜 ', 'scrollads-textdomain'); ?></th>
								<th class="numeric text-center" translate> <?php esc_html_e('수익금액 ', 'scrollads-textdomain'); ?> </th>
								<th class="numeric text-center" translate> <?php esc_html_e('노출수 ', 'scrollads-textdomain'); ?> </th>
								<th class="numeric text-center" translate> <?php esc_html_e('클릭수 ', 'scrollads-textdomain'); ?></th>
								<th class="numeric text-center" translate> <?php esc_html_e('클릭률(%) ', 'scrollads-textdomain'); ?></th>
								<th class="numeric text-center" translate> <?php esc_html_e('평균단가 ', 'scrollads-textdomain'); ?> </th>
							</tr>
						</thead>
						<tbody>
							<tr class="ng-hide" ng-show="data.row_labels.length == 0">
								<td class="text-center" colspan="6" translate> <?php esc_html_e('결과가 없습니다. ', 'scrollads-textdomain'); ?></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-xs-12 col-sm-6">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title "><?php esc_html_e('노출수 통계', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body">
					<ul class="nav nav-tabs">
						<li role="presentation" class="active"><a href="#cv-browser" aria-controls="cv-browser" role="tab" data-toggle="tab"><?php esc_html_e('브라우저', 'scrollads-textdomain'); ?></a></li>
						<li role="presentation"><a href="#cv-device" aria-controls="cv-device" role="tab" data-toggle="tab"><?php esc_html_e('디바이스', 'scrollads-textdomain'); ?></a></li>
						<li role="presentation"><a href="#cv-os" aria-controls="cv-os" role="tab" data-toggle="tab"><?php esc_html_e('OS', 'scrollads-textdomain'); ?></a></li>
					</ul>
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane active" id="cv-browser">
							<div id="amChart_cv_browser" class="box_chart box_empty"><?php esc_html_e('내역이 없습니다.', 'scrollads-textdomain'); ?></div>
						</div>
						<div role="tabpanel" class="tab-pane" id="cv-device">
							<div id="amChart_cv_device" class="box_chart box_empty"><?php esc_html_e('내역이 없습니다.', 'scrollads-textdomain'); ?></div>
						</div>
						<div role="tabpanel" class="tab-pane" id="cv-os">
							<div id="amChart_cv_os" class="box_chart box_empty"><?php esc_html_e('내역이 없습니다.', 'scrollads-textdomain'); ?></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title "><?php esc_html_e('클릭수 통계', 'scrollads-textdomain'); ?></h3>
				</div>
				<div class="panel-body">
					<ul class="nav nav-tabs">
						<li role="presentation" class="active"><a href="#click-browser" aria-controls="click-browser" role="tab" data-toggle="tab"><?php esc_html_e('브라우저', 'scrollads-textdomain'); ?></a></li>
						<li role="presentation"><a href="#click-device" aria-controls="click-device" role="tab" data-toggle="tab"><?php esc_html_e('디바이스', 'scrollads-textdomain'); ?></a></li>
						<li role="presentation"><a href="#click-os" aria-controls="click-os" role="tab" data-toggle="tab"><?php esc_html_e('OS', 'scrollads-textdomain'); ?></a></li>
					</ul>
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane active" id="click-browser">
							<div id="amChart_click_browser" class="box_chart box_empty"><?php esc_html_e('내역이 없습니다.', 'scrollads-textdomain'); ?></div>
						</div>
						<div role="tabpanel" class="tab-pane" id="click-device">
							<div id="amChart_click_device" class="box_chart box_empty"><?php esc_html_e('내역이 없습니다.', 'scrollads-textdomain'); ?></div>
						</div>
						<div role="tabpanel" class="tab-pane" id="click-os">
							<div id="amChart_click_os" class="box_chart box_empty"><?php esc_html_e('내역이 없습니다.', 'scrollads-textdomain'); ?></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
