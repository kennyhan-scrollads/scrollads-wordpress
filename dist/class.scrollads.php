<?php

/**
 * 스크롤애드 플러그인 기본 클래스. 
 * 
 * 스크롤애드 작동시 기본이 되는 부모클래스.
 * 
 * @package scrollads
 * @subpackage wordpress
 * @version A201707
 * 
 */
class Scrollads {

	public static $config = array();
	public static $scrollads_user = false;

	public function init() {

		// set default value
		self::$config = array(
			'URL_API_SERVER' => 'http://dev.scrollads.co.kr:7000', // 개발서버: dev.scrollads.co.kr, 글로벌 서버: admin.scrollads.net:7000
			'ads_active' => 'Y', // 광고 작동유무
			'ads_lang_code' => 'en', // 기본 광고 언어
			'ads_area' => '.ads_area, body.single #content', // 기본형 광고 영역
			'animation_effect' => 'flip', // 애니메이션 효과(flip)
			'text_position' => 50, // 택스트 전환위치
			'keyword_exchage_percent' => 30, // 택스트 광고 밀도
			'image_position' => 100, // 이미지 전환위치
			'image_step_ratio' => 2, // 이미지 광고 간격
			'site_idx' => '', // 사이트 번호
			'site_key' => '', // 사이트 키
			'site_url' => '', // 사이트 주소
			'site_name' => '', // 사이트 이름
			'ads_type' => array(), // 광고 종류
			'ads_item' => array(), // 광고 아이템
			'ads_link' => array(), // 광고 링크
			'ads_idx' => array(), // 광고 번호
			'post_id' => array(), // 글 번호
		);
		self::$config['ads_lang_code'] = @get_locale(); // 워드프레스의 언어 설정 값으로 반영
		$_saved_option = get_option(SCROLLADS_OPTION_KEY); // 저장된 옵션값 호출
		self::$config = empty($_saved_option) ? self::$config : array_merge(self::$config, $_saved_option); // 저장된 옵션값 반영
		
		// 회웍가입여부 설정
		self::$scrollads_user = self::$config['site_key']!='' ? true : false;
		
		// load config file
		wp_register_script('scrollads-config', SCROLLADS_PLUGIN_URL.'public/js/scrollads-config.js', null,self::$config['file_version']);
		wp_enqueue_script('scrollads-config');
		
//		add_action('wp_logout', array( 'Scrollads_Admin', 'scrollads_logout' ));

	}

//	public function scrollads_logout() {
//		setcookie('scrollads_login', 0, 10 * DAYS_IN_SECONDS, COOKIEPATH, COOKIE_DOMAIN);
////		echo '1';exit;
//	}
	
}
