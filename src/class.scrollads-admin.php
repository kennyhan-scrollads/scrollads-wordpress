<?php

require_once 'class.scrollads.php';

/**
 * Scrollads Admin Class
 * 
 * 스크롤애드 플러그인 어드민용 클래스
 * 포스트 공유 기능은 알파버전에서 제외함. 포스트 공유기능의 이전 작업 소스는 lovelybaking.hol.es 사이트에 있음.
 * 
 * @package scrollads
 * @subpackage wordpress
 * @version A201707
 */
class Scrollads_Admin extends Scrollads {
	const NONCE = 'scrollads-update-key';

	private static $initiated = false;
	public static $scrollads_user = false;
	public static $scrollads_login = false;
	public static $config = array();
	private static $notices = array();
	private static $page = 'dashboard';
	private static $_post_data = array(
						'method' => 'POST',
						'timeout' => 45,
						'redirection' => 5,
						'httpversion' => '1.0',
						'blocking' => true,
						'headers' => array(),
						'body' => array(),
						'cookies' => array()
					);
	private static $_config_item = array('pid','text_position','image_step_ratio','keyword_exchage_percent','image_position','animation_effect');

	public function init() {
		if ( self::$initiated ) { return false; }
		self::$initiated = true;
		
		parent::init();
		self::init_hooks();
		self::$config = parent::$config;
		self::$page = str_replace('scrollads-', '', $_GET['page']);
		self::$scrollads_user = parent::$scrollads_user;
		self::$scrollads_login = $_COOKIE['scrollads_login'];
		
		load_plugin_textdomain( 'scrollads-textdomain', false, dirname( plugin_basename( __FILE__ )).'/languages/');
		
		// 로그인 정보 쿠키에서 받아오기.
		if(self::$scrollads_login != '1') {
			// 로그인 정보 쿠키에 저장.
			$_param['user_id'] = self::$config['user_email'];
			$_param['user_pw'] = self::$config['site_key'];
			setcookie('scrollads_user_email', self::$config['user_email'], 10 * DAYS_IN_SECONDS, COOKIEPATH, COOKIE_DOMAIN);
			setcookie('scrollads_site_key', self::$config['site_key'], 10 * DAYS_IN_SECONDS, COOKIEPATH, COOKIE_DOMAIN);
		}

		
		add_action('wp_ajax_scrollads_action', array( 'Scrollads_Admin', 'scrollads_ajax_action_callback' ));
		
		// 외부 라이브러리 설정
		wp_register_script('scrollads-bootstrap', SCROLLADS_PLUGIN_URL.'admin/js/bootstrap.min.js', array(), SCROLLADS_VERSION );
		wp_register_style( 'scrollads-bootstrap', SCROLLADS_PLUGIN_URL.'admin/css/bootstrap.min.css', array(), SCROLLADS_VERSION );
		wp_register_style( 'scrollads-bootstrap-theme', SCROLLADS_PLUGIN_URL.'admin/css/bootstrap-theme.min.css', array(), SCROLLADS_VERSION );
		wp_register_script('scrollads-jquery-ui', SCROLLADS_PLUGIN_URL.'admin/js/jquery-ui.min.js', array(), SCROLLADS_VERSION );
		wp_register_style( 'scrollads-jquery-ui', SCROLLADS_PLUGIN_URL.'admin/css/jquery-ui.min.css', array(), SCROLLADS_VERSION );
		wp_register_style( 'scrollads-jquery-ui-theme', SCROLLADS_PLUGIN_URL.'admin/css/jquery-ui.theme.min.css', array(), SCROLLADS_VERSION );
		wp_register_script('scrollads-jquery-ui-slider-pips', SCROLLADS_PLUGIN_URL.'admin/js/jquery-ui-slider-pips.min.js', array(), SCROLLADS_VERSION );
		wp_register_style( 'scrollads-jquery-ui-slider-pips', SCROLLADS_PLUGIN_URL.'admin/css/jquery-ui-slider-pips.css', array(), SCROLLADS_VERSION );
		wp_register_script('scrollads-admin', SCROLLADS_PLUGIN_URL.'admin/js/scrollads-admin.js', array(), SCROLLADS_VERSION );
		wp_register_style( 'scrollads-admin', SCROLLADS_PLUGIN_URL.'admin/css/scrollads-admin.css', array(), SCROLLADS_VERSION );

		wp_enqueue_script('jquery');
		wp_enqueue_script('scrollads-bootstrap');
		wp_enqueue_style('scrollads-bootstrap');
		wp_enqueue_style('scrollads-bootstrap-theme');
		wp_enqueue_script('scrollads-jquery-ui');
		wp_enqueue_style('scrollads-jquery-ui');
		wp_enqueue_style('scrollads-jquery-ui-theme');
		wp_enqueue_script('scrollads-jquery-ui-slider-pips');
		wp_enqueue_style('scrollads-jquery-ui-slider-pips');
		wp_localize_script('scrollads-admin', 'scrollads_text_domain', self::get_translate_string() );
		wp_enqueue_script('scrollads-admin');
		wp_enqueue_style('scrollads-admin');

		// 화면작업 제외한 PHP 작업들 실행.
		if ( isset( $_POST['action'] ) ) {
			if ( $_POST['action'] == 'save-config' ) {
				self::save_config();
			}
			if ( $_POST['action'] == 'request_sendmoney' ) {
				self::request_sendmoney();
			}
		}
	}
	
	public function scrollads_ajax_action_callback() {
//		global $wpdb; // 데이터베이스에 접근할 수 있는 방법을 제공
		$_url = SCROLLADS_DOMAIN.$_POST['url'];
		unset($_POST['action']);
		unset($_POST['url']);
		$response = wp_remote_post( $_url, array(
			'method' => 'POST',
			'timeout' => 45,
			'redirection' => 5,
			'httpversion' => '1.0',
			'blocking' => true,
			'headers' => array(),
			'body' =>  $_POST,
			'cookies' => array()
		) );
		if($response['response']['code']=='200') {
			echo $response['body'];
		} else {
			echo '{"success":false}';
		}
		wp_die();
	}
	
	public static function init_hooks() {
		// The standalone stats page was removed in 3.0 for an all-in-one config and stats page.
		// Redirect any links that might have been bookmarked or in browser history.
		if ( isset( $_GET['page'] ) && 'scrollads-stats-display' == $_GET['page'] ) {
			wp_safe_redirect( esc_url_raw( self::get_page_url() ), 301 );die;
		}

		add_action( 'admin_init', array( 'Scrollads_Admin', 'admin_init' ) );
		add_action( 'admin_menu', array( 'Scrollads_Admin', 'admin_menu' ), 5 );
		// Register link to the setting panel
		add_filter( 'plugin_action_links', array( 'Scrollads_Admin', 'wp_sh_setting_link' ), 10, 2);
		
	}
	

	public static function wp_sh_setting_link($links, $file) {
		static $this_plugin;
		//if (!$this_plugin) $this_plugin = plugin_basename(__FILE__);
		//if ($file == $this_plugin){
		if (!$this_plugin) $this_plugin = dirname(plugin_basename(__FILE__)).'/';
		if (strpos($file , $this_plugin)===0){
			$_page_url = 'scrollads-registration';
			if(self::$config['site_key']) {
				$_page_url = 'scrollads-dashboard';
			}
			$settings_link = '<a href="admin.php?page='.$_page_url.'">'.__('Settings', 'wp_sh').'</a>';
			array_unshift($links, $settings_link);
		}
		return $links;
	}



	public static function admin_init() {
		load_plugin_textdomain( 'Scrollads' );
	}

	public static function admin_menu() {
		self::load_menu();
	}

	public static function load_menu() {
		$params = array_merge(array(), self::$config);
		if( $params['site_key'] ) {

			$hook = add_menu_page( __('Scrollads', 'scrollads-textdomain'), __('Scrollads', 'scrollads-textdomain'), 'manage_options', 'scrollads-dashboard', array( 'Scrollads_Admin', 'display_dashboard_page' ) );
			add_submenu_page('scrollads-dashboard',  __('통계', 'scrollads-textdomain'), __('통계', 'scrollads-textdomain'), 'manage_options', 'scrollads-dashboard', array( 'Scrollads_Admin', 'display_dashboard_page' ) );
			add_submenu_page('scrollads-dashboard',  __('수익금 관리', 'scrollads-textdomain'), __('수익금 관리', 'scrollads-textdomain'), 'manage_options', 'scrollads-pointlist', array( 'Scrollads_Admin', 'display_pointlist_page' ) );
			add_submenu_page('scrollads-dashboard',  __('광고 설정', 'scrollads-textdomain'), __('광고 설정', 'scrollads-textdomain'), 'manage_options', 'scrollads-adconfig', array( 'Scrollads_Admin', 'display_adconfig_page' ) );
//			add_submenu_page('scrollads-dashboard',  __('광고 관리', 'scrollads-textdomain'), __('광고 관리', 'scrollads-textdomain'), 'manage_options', 'scrollads-adlist', array( 'Scrollads_Admin', 'display_adlist_page' ) );
			add_submenu_page('scrollads-dashboard',  __('등록 정보', 'scrollads-textdomain'), __('등록 정보', 'scrollads-textdomain'), 'manage_options', 'scrollads-properties', array( 'Scrollads_Admin', 'display_properties_page' ) );

		} else {
			
			$hook = add_menu_page( __('Scrollads', 'scrollads-textdomain'), __('Scrollads', 'scrollads-textdomain'), 'manage_options', 'scrollads-registration', array( 'Scrollads_Admin', 'display_registration_page' ) );
//			add_submenu_page('scrollads-dashboard',  __('사이트 등록', 'scrollads-textdomain'), __('사이트 등록', 'scrollads-textdomain'), 'manage_options', 'scrollads-properties', array( 'Scrollads_Admin', 'display_properties_page' ) );
			
		}
		
	}
	
	/**
	 * 대시보드 페이지 컨트롤러
	 */
	public static function display_pointlist_page() {
		$params = array_merge(array(), self::$config);
		
		self::view( self::$page, $params );
	}

	/**
	 * 대시보드 페이지 컨트롤러
	 */
	public static function display_dashboard_page() {
		$params = array_merge(array(), self::$config);
		
		wp_register_script('scrollads-amcharts', SCROLLADS_PLUGIN_URL.'admin/js/amcharts/amcharts.js' );
		wp_enqueue_script('scrollads-amcharts');
		wp_register_script('scrollads-serial', SCROLLADS_PLUGIN_URL.'admin/js/amcharts/serial.js' );
		wp_enqueue_script('scrollads-serial');
		wp_register_script('scrollads-pie', SCROLLADS_PLUGIN_URL.'admin/js/amcharts/pie.js' );
		wp_enqueue_script('scrollads-pie');
		wp_register_script('scrollads-radar', SCROLLADS_PLUGIN_URL.'admin/js/amcharts/radar.js' );
		wp_enqueue_script('scrollads-radar');
		wp_register_script('scrollads-themes-light', SCROLLADS_PLUGIN_URL.'admin/js/amcharts/themes/light.js' );
		wp_enqueue_script('scrollads-themes-light');
		wp_register_script('scrollads-themes-patterns', SCROLLADS_PLUGIN_URL.'admin/js/amcharts/themes/patterns.js' );
		wp_enqueue_script('scrollads-themes-patterns');
		wp_register_script('scrollads-themes-chalk', SCROLLADS_PLUGIN_URL.'admin/js/amcharts/themes/chalk.js' );
		wp_enqueue_script('scrollads-themes-chalk');
		
		self::view( self::$page, $params );
	}
	
	/**
	 * 광고관리 페이지 컨트롤러
	 */
	public static function display_adlist_page() {
		$params = array_merge(array(), self::$config);
		self::view( self::$page, $params );
	}
	
	/**
	 * 사이트 등록 페이지 컨트롤러
	 */
	public static function display_registration_page() {
		global $current_user; // 로그인 사용자 정보.
		$params = array_merge(array(), self::$config);
		$params['scrollads_user'] = self::$scrollads_user;
		$params['user_email'] = $current_user->user_email;
		$params['user_name'] = $current_user->display_name;
		$params['site_name'] = trim($params['site_name'])=='' ? get_bloginfo('name') : $params['site_name'];
		$params['site_url'] = trim($params['site_url'])=='' ? site_url() : $params['site_url'];
		$params['paypal_email'] = '';
		$params['site_key'] = self::generateRandomString(16); //KfnvF497QVXCIU2R
		self::view( self::$page, $params );
	}
	
	/**
	 * 등록정보 페이지 컨트롤러
	 */
	public static function display_properties_page() {
		global $current_user; // 로그인 사용자 정보.
		$params = array_merge(array(), self::$config);
		$params['scrollads_user'] = self::$scrollads_user;
		$params['site_name'] = trim($params['site_name'])=='' ? '' : $params['site_name'];
		$params['site_url'] = trim($params['site_url'])=='' ? '' : $params['site_url'];
		$params['paypal_email'] = trim($params['paypal_email'])=='' ? '' : $params['paypal_email'];
		$params['site_key'] = trim($params['site_key'])=='' ? '' : $params['site_key'];
		self::view( self::$page, $params );
	}
	
	/**
	 * 광고설정 페이지 컨트롤러
	 */
	public static function display_adconfig_page() {
		$params = array_merge(array(), self::$config);
		$params['site_name'] = trim($params['site_name'])=='' ? get_bloginfo('name') : $params['site_name'];
		$params['site_url'] = trim($params['site_url'])=='' ? site_url() : $params['site_url'];
		$params['site_key'] = trim($params['site_key'])=='' ? '' : $params['site_key'];
		
//		var_dump($params); die();
		
		
		// 출금 내역  
		/*
		$_withdrawal_pageno = intval($_GET['withdrawal_pageno'])==0 ? '1' : $_GET['withdrawal_pageno'];
		self::$_post_data['body'] = array('site_key'=>$params['site_key'], 'page'=>$_withdrawal_pageno, 'referer'=>$_SERVER['HTTP_REFERER']);
		$response = wp_remote_post( SCROLLADS_DOMAIN.'/api/ads.php?mode=get_withdrawal_list', self::$_post_data );
		if ( is_wp_error( $response ) ) {
			// 실패시 경고 메시지 처리.
			self::$notices[] = array('type'=>'danger','msg'=>__('출금 신청정보를 가져오는중 오류가 발생했습니다. 잠시후 시도해 주세요.', 'scrollads-textdomain') );
			$params['lists_withdrawal'] = array();
		} else {
			$_lists = json_decode($response['body']);
			$_total_rows = $_lists->total_rows;
			$_page = $_lists->page;
			$_lists = $_lists->lists;
			for($i=0;$i<count($_lists); $i++){
				$row = $_lists[$i];
				// 상태 문자로 변경/
				$_msg = trim($row->message)=='' ? '' : '('.$row->message.')';
				switch($row->status){
					case 'D':
						$_lists[$i]->strStatus = __('지급완료', 'scrollads-textdomain') . $_msg;
					break;
					case 'H':
						$_lists[$i]->strStatus = __('지급보류', 'scrollads-textdomain') . $_msg;
					break;
					case 'C':
						$_lists[$i]->strStatus = __('출금취소', 'scrollads-textdomain') . $_msg;
					break;
					case 'R':
						$_lists[$i]->strStatus = __('지급거부', 'scrollads-textdomain') . $_msg;
					break;
					default:
						$_lists[$i]->strStatus = __('대기중', 'scrollads-textdomain') . $_msg;
					break;
				}
			}
			$params['lists_withdrawal'] = $_lists;
		}
		$params['paging_withdrawal'] = self::paging($_total_rows, $_page, 10, 'withdrawal_pageno');
		 * 
		 */
		
		
		// 입금(수입) 내역  
		/*
		$_earning_pageno = intval($_GET['earning_pageno'])==0 ? '1' : $_GET['earning_pageno'];
		self::$_post_data['body'] = array('site_key'=>$params['site_key'], 'page'=>$_earning_pageno, 'referer'=>$_SERVER['HTTP_REFERER']);
		$response = wp_remote_post( SCROLLADS_DOMAIN.'/api/ads.php?mode=get_earning_list', self::$_post_data );
		if ( is_wp_error( $response ) ) {
			// 실패시 경고 메시지 처리.
			self::$notices[] = array('type'=>'danger','msg'=>__('출금 신청정보를 가져오는중 오류가 발생했습니다. 잠시후 시도해 주세요.', 'scrollads-textdomain') );
			$params['lists_withdrawal'] = array();
		} else {
			$_lists = json_decode($response['body']);
			$_total_rows = $_lists->total_rows;
			$_page = $_lists->page;
			$_lists = $_lists->lists;
			for($i=0;$i<count($_lists); $i++){
				$row = $_lists[$i];
				// 상태 문자로 변경/
				$_msg = trim($row->message)=='' ? '' : '('.$row->message.')';
				switch($row->status){
					case 'Y':
						$_lists[$i]->strStatus = __('승인완료', 'scrollads-textdomain') . $_msg;
					break;
					default:
						$_lists[$i]->strStatus = __('대기중', 'scrollads-textdomain') . $_msg;
					break;
				}
			}
			$params['lists_earning'] = $_lists;
		}
		$params['paging_earning'] = self::paging($_total_rows, $_page, 10, 'earning_pageno');
		 * 
		 */
		
		self::view( self::$page, $params );
	}

	public static function view( $name = 'dashboard', array $args = array() ) {
		
		$args = apply_filters( 'scrollads_view_arguments', $args, $name );
		
		foreach ( $args AS $key => $val ) {
			$$key = $val;
		}
		
		load_plugin_textdomain( 'Scrollads' );

		$file = plugin_dir_path( __FILE__ ) . 'admin/views/'. $name . '.php';

		include( $file );
	}
	
	public static function get_translate_string() {
		return array(
			sha1('광고가 표시될 영역을 지정해주세요.') => __( '광고가 표시될 영역을 지정해주세요.', 'scrollads-textdomain' ),
			sha1('사이트 이름을 써주세요.')   => __( '사이트 이름을 써주세요.', 'scrollads-textdomain' ),
			sha1('사이트 URL을 써주세요.')   => __( '사이트 URL을 써주세요.', 'scrollads-textdomain' ),
			sha1('사이트 키값이 없습니다. 웹페이지를 새로고침한 후 다시 등록해주세요.')   => __( '사이트 키값이 없습니다. 웹페이지를 새로고침한 후 다시 등록해주세요.', 'scrollads-textdomain' ),
			sha1('이름을 써주세요.')   => __( '이름을 써주세요.', 'scrollads-textdomain' ),
			sha1('이메일을 써주세요.')   => __( '이메일을 써주세요.', 'scrollads-textdomain' ),
			sha1('등록 했습니다.')   => __( '등록 했습니다.', 'scrollads-textdomain' ),
			sha1('등록하지 못했습니다. 잠시후 다시 시도해 주세요.')   => __( '등록하지 못했습니다. 잠시후 다시 시도해 주세요.', 'scrollads-textdomain' ),
			sha1('등록하지 못했습니다. 잠시후 다시 시도해 주세요.')   => __( '등록하지 못했습니다. 잠시후 다시 시도해 주세요.', 'scrollads-textdomain' ),
			sha1('날짜')   => __( '날짜', 'scrollads-textdomain' ),
			sha1('콘텐츠 노출수')   => __( '콘텐츠 노출수', 'scrollads-textdomain' ),
			sha1('페이지 노출수')   => __( '페이지 노출수', 'scrollads-textdomain' ),
			sha1('클릭수')   => __( '클릭수', 'scrollads-textdomain' ),
			sha1('콘텐츠 클릭률')   => __( '콘텐츠 클릭률', 'scrollads-textdomain' ),
			sha1('페이지 클릭률')   => __( '페이지 클릭률', 'scrollads-textdomain' ),
			sha1('전환수')   => __( '전환수', 'scrollads-textdomain' ),
			sha1('콘텐츠 전환율')   => __( '콘텐츠 전환율', 'scrollads-textdomain' ),
			sha1('페이지 전환율')   => __( '페이지 전환율', 'scrollads-textdomain' ),
			sha1('수익금액')   => __( '수익금액', 'scrollads-textdomain' ),
			sha1('수익')   => __( '수익', 'scrollads-textdomain' ),
			sha1('노출수')   => __( '노출수', 'scrollads-textdomain' ),
			sha1('클릭수')   => __( '클릭수', 'scrollads-textdomain' ),
			sha1('클릭률(%)')   => __( '클릭률(%)', 'scrollads-textdomain' ),
			sha1('평균단가')   => __( '평균단가', 'scrollads-textdomain' ),
			sha1('[[value]]번 노출')   => __( '[[value]]번 노출', 'scrollads-textdomain' ),
			sha1('[[value]]번 클릭')   => __( '[[value]]번 클릭', 'scrollads-textdomain' ),
			sha1('[[value]]원 수익')   => __( '[[value]]원 수익', 'scrollads-textdomain' ),
			sha1('합계')   => __( '합계', 'scrollads-textdomain' ),
			sha1('통계 데이터를 추출하는 도중 문제가 발생했습니다.')   => __( '통계 데이터를 추출하는 도중 문제가 발생했습니다.', 'scrollads-textdomain' ),
			sha1('날짜를 지정해 통계데이터를 확인 해 주세요.')   => __( '날짜를 지정해 통계데이터를 확인 해 주세요.', 'scrollads-textdomain' ),
			sha1('검색 된 통계데이터가 없습니다.')   => __( '검색 된 통계데이터가 없습니다.', 'scrollads-textdomain' ),
			sha1('출금완료')   => __( '출금완료', 'scrollads-textdomain' ),
			sha1('반려')   => __( '반려', 'scrollads-textdomain' ),
			sha1('취소')   => __( '취소', 'scrollads-textdomain' ),
			sha1('대기중')   => __( '대기중', 'scrollads-textdomain' ),
			sha1('해당 요청이 처리중입니다.')   => __( '해당 요청이 처리중입니다.', 'scrollads-textdomain' ),
			sha1('잠시 후에 시도해주세요.')   => __( '잠시 후에 시도해주세요.', 'scrollads-textdomain' ),
			sha1('접근 권한이 없습니다.')   => __( '접근 권한이 없습니다.', 'scrollads-textdomain' ),
			sha1('다시 로그인해주세요.')   => __( '다시 로그인해주세요.', 'scrollads-textdomain' ),
			sha1('알 수 없는 오류가 발생했습니다.')   => __( '알 수 없는 오류가 발생했습니다.', 'scrollads-textdomain' ),
			sha1('계속 해당오류가 발생하면, 관리자에게 알려주시기 바랍니다.')   => __( '계속 해당오류가 발생하면, 관리자에게 알려주시기 바랍니다.', 'scrollads-textdomain' ),
			sha1('신청 금액을 선택해주세요.')   => __( '신청 금액을 선택해주세요.', 'scrollads-textdomain' ),
			sha1('신청 금액은 숫자로만 입력 해 주세요.')   => __( '신청 금액은 숫자로만 입력 해 주세요.', 'scrollads-textdomain' ),
			sha1('신청 금액은 최소 환불 신청 금액({{number}}원) 이상으로 입력해주세요.')   => __( '신청 금액은 최소 환불 신청 금액({{number}}원) 이상으로 입력해주세요.', 'scrollads-textdomain' ),
			sha1('신청 가능 금액을 넘게 입력하셨습니다.')   => __( '신청 가능 금액을 넘게 입력하셨습니다.', 'scrollads-textdomain' ),
			sha1('신청 금액은 신청 가능 금액({{number}}원)을 넘지 않게 입력해주세요.')   => __( '신청 금액은 신청 가능 금액({{number}}원)을 넘지 않게 입력해주세요.', 'scrollads-textdomain' ),
			sha1('은행명을 입력해주세요.')   => __( '은행명을 입력해주세요.', 'scrollads-textdomain' ),
			sha1('계좌번호는 숫자만 입력해주세요.')   => __( '계좌번호는 숫자만 입력해주세요.', 'scrollads-textdomain' ),
			sha1('계좌번호를 입력해주세요.')   => __( '계좌번호를 입력해주세요.', 'scrollads-textdomain' ),
			sha1('예금주명을 입력해주세요.')   => __( '예금주명을 입력해주세요.', 'scrollads-textdomain' ),
			sha1('Paypal 이메일을 입력해주세요.')   => __( 'Paypal 이메일을 입력해주세요.', 'scrollads-textdomain' ),
			sha1('환불 받을 아래의 계좌정보로 환불신청을 하시겠습니까?')   => __( '환불 받을 아래의 계좌정보로 환불신청을 하시겠습니까?', 'scrollads-textdomain' ),
			sha1('은행명')   => __( '은행명', 'scrollads-textdomain' ),
			sha1('계좌번호')   => __( '계좌번호', 'scrollads-textdomain' ),
			sha1('예금주')   => __( '예금주', 'scrollads-textdomain' ),
			sha1('환불신청금액')   => __( '환불신청금액', 'scrollads-textdomain' ),
			sha1('환불신청이 등록되었습니다.')   => __( '환불신청이 등록되었습니다.', 'scrollads-textdomain' ),
			sha1('환불을 신청하지 못했습니다.')   => __( '환불을 신청하지 못했습니다.', 'scrollads-textdomain' ),
			sha1('잠시후 다시 신청해주세요.')   => __( '잠시후 다시 신청해주세요.', 'scrollads-textdomain' )
		);
	}

	public static function get_page_url( $page = '' ) {

		// 지정된 페이지가 없으면 현제페이지로 사용.
		if($page=='') {
			$page = self::$page;// str_replace('scrollads-', '', $_GET['page']); 
		}
		
		$args = array( 'page' => 'scrollads-'.$page );
		
		$url = add_query_arg( $args, admin_url( 'admin.php' ) );

		return $url;
	}
	
	public static function save_config() {
	
		$_config_ = self::$config;
		if(is_array($_POST)) {
			unset($_POST['action']);
			$_nextpage = trim($_POST['nextpage']);unset($_POST['nextpage']);
			$_config_ = array_merge($_config_, $_POST);
		}
	
		// 옵션 정보 재설정.
		foreach( $_config_ as $key => $val ) {
			if(isset($_POST[$key])) {
				$_config_[$key] = stripslashes_deep($_POST[$key]);
			}
		}
		

		// 설정 파일 내용 만들기
		$file_version = time();
		$script = "window._scrollads_ = {'version':'".$file_version."'";
		foreach($_config_ as $key => $val) {
			if(!in_array($key, self::$_config_item)){continue;}
			if($key=='ads_position') { /*$val = $val;*/ }
			if($key=='text_effects' || $key=='img_effects') { $val = array($val); }
			if(is_array($val)){
				$script .= ",'{$key}':".json_encode($val)."";
			} else {
				$script .= ",'{$key}':'{$val}'";
			}
			$_config_['file_version'] = $file_version;
		}
		$script .= '};';
		
		if ( get_option( SCROLLADS_OPTION_KEY ) !== false ) {
			update_option( SCROLLADS_OPTION_KEY, $_config_, 'yes' );
		} else {
			add_option( SCROLLADS_OPTION_KEY, $_config_ );
		}
		
		self::$notices[] = array('type'=>'success','msg'=>__('정보를 저장했습니다.', 'scrollads-textdomain'));
		self::$config = $_config_;
		
		// 매체사 스크립트용 설정 파일 저장.
		if(!file_put_contents(SCROLLADS_PLUGIN_DIR.'public/js/scrollads-config.js', $script)){
			self::$notices[] = array('type'=>'danger','msg'=>__('public/js/scrollads-config.js 파일을 저장하지 못했습니다. 파일에 쓰기 권한이 있는지 확인해주세요.', 'scrollads-textdomain'));
		}
		// 처리후 이동할 페이지가 있으면 해당 페이지로 이동. 아니면 현재 페이지 리로딩.
		if($_nextpage!='') {
			self::$page = $_nextpage;
		}
		
		// reload page
		wp_safe_redirect( esc_url_raw( self::get_page_url() ), 301 ); die();
		
		return true;
	}

	
	/**
	 * 출금 신청 하기
	 * 출금 신청 정보를 scrollads 서버에 전송합니다. 
	 * 사이트의 도메인과 요청서버의 도메인이 같아야 합니다.
	 */
	public static function request_sendmoney() {
		
		$args['referer'] = trim($_SERVER['HTTP_REFERER']);
		$args['amount'] = trim(strip_tags(stripslashes_deep($_POST['amount'])));
		$args['receiver'] = trim(strip_tags(stripslashes_deep($_POST['receiver'])));
		$args['site_key'] = trim(strip_tags(self::$config['site_key']));
		$args['ip_requestor'] = trim($_SERVER['REMOTE_ADDR']);
		
		if( empty($args['amount']) ) {
			self::$notices[] = array('type'=>'warning','msg'=>__('출금 금액을 써주세요.', 'scrollads-textdomain') );
		} elseif( empty($args['amount']) ) {
			self::$notices[] = array('type'=>'warning','msg'=>__('출금 신청 금액이 출금 가능 금액보다 많습니다.', 'scrollads-textdomain') );
		} elseif( empty($args['receiver']) ) {
			self::$notices[] = array('type'=>'warning','msg'=>__('입금 받으실 Paypal 계정을 입력해주세요.', 'scrollads-textdomain') );
		} else {
			self::$_post_data['body'] = $args;
			$response = wp_remote_post( SCROLLADS_DOMAIN.'/api/ads.php?mode=request_sendmoney', self::$_post_data );
			if ( is_wp_error( $response ) ) {
				self::$notices[] = array('type'=>'warning','msg'=>__('출금 신청을 하지 못했습니다. 잠시후 시도해 주세요.', 'scrollads-textdomain') );
			} else {
				self::$notices[] = array('type'=>'success','msg'=>__('출금 신청을 했습니다.', 'scrollads-textdomain'));
			}
		}
		
	}

	/**
	 * 페이징
	 */
	public static function paging($p_total=0, $p_pageno=1, $p_rows=10, $p_parameter_name='') {
	
		$url = self::get_page_url();
		$p_total = intval($p_total);
		$p_pageno = intval($p_pageno);
		$p_rows = intval($p_rows);
		$p_parameter_name = trim($p_parameter_name)=='' ? 'pageno' : $p_parameter_name;
		$_total_page_no = ceil($p_total/$p_rows);
		
		$_r = '<span class="displaying-num">'.str_replace('{total_item_no}',$p_total,__('{total_item_no}개의 아이템', 'scrollads-textdomain')).'</span>';
		$_r .='<span class="pagination-links">';
		
		$_r .='<a class="first-page'.($p_pageno<=1 ? ' disabled':'').'" title="'.__('첫번째 페이지로 가기','Scrollads').'" href="'.$url.'">«</a>';
		
		$_p = $p_pageno-1 > 1 ? $p_pageno-1 : '1';
		//$_url = strpos($url, '?')!==false ? $url."&{$p_parameter_name}={$_p}" : $url."?{$p_parameter_name}={$_p}";
		$_url = self::get_url ($url, $p_parameter_name, $_p);
		$_r .='<a class="prev-page'.($p_pageno<=1 ? ' disabled':'').'" title="'.__('이전 페이지로 가기','Scrollads').'" href="'.$_url.'">‹</a>';
		
		$_r .='<span class="paging-input">'.str_replace(array('{total_page_no}','{current_page_no}'), array($_total_page_no, $p_pageno), __('<span class="total-pages">{total_page_no}</span> 의 {current_page_no}', 'scrollads-textdomain')).'</span>';
		
		$_p = $p_pageno+1 < $_total_page_no ? $p_pageno+1 : $_total_page_no;
		$_url = self::get_url ($url, $p_parameter_name, $_p);
		$_r .='<a class="next-page'.($_total_page_no>1 && $p_pageno<$_total_page_no ? '':' disabled').'" title="'.__('다음 페이지로 가기','Scrollads').'" href="'.$_url.'">›</a>';
		
		$_url = self::get_url ($url, $p_parameter_name, $_total_page_no);
		$_r .='<a class="last-page'.($_total_page_no>1 && $p_pageno<$_total_page_no ? '':' disabled').'" title="'.__('마지막 페이지로 가기','Scrollads').'" href="'.$_url.'">»</a></span>';
		
		return $_r;
	
	}
	
	function get_url ($p_url='', $p_param_name, $p_value) {
		$strparam = '?';
		$t = explode('?', $p_url);
		$url = $t[0];
		$params = trim($t[1]);
		if($params==''){
			$strparam .= "{$p_param_name}={$p_value}";
		} else {
			$params = explode('&', $params);
			foreach($params as $param) {
				$t = explode('=', $param);
				if($t[0] != $p_param_name) {
					$strparam.=$param.'&';
				}
			}
			$strparam.=$p_param_name.'='.$p_value;
		}
		return $url.$strparam;
		
	}
	
	function generateRandomString($length = 10) {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}
	
}
