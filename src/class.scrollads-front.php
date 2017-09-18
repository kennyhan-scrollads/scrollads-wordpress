<?php

require_once 'class.scrollads.php';

/**
 * Scrollads Class
 * 
 * 스크롤애드 플러그인 프론트용 클래스
 * 포스트 공유 기능은 알파버전에서 제외함. 포스트 공유기능의 이전 작업 소스는 lovelybaking.hol.es 사이트에 있음.
 * 
 * @package scrollads
 * @subpackage wordpress
 * @version A201707
 * 
 */
class Scrollads_Front extends Scrollads {
	
	private static $initiated = false;
	public static $config = array();
	public static $scrollads_user = false;
	public static $_post_data = array(
					'method' => 'POST',
					'timeout' => 45,
					'redirection' => 5,
					'httpversion' => '1.0',
					'blocking' => true,
					'headers' => array(),
					'body' => array(),
					'cookies' => array()
				);
	
	public function init() {
		if ( self::$initiated ) { return false; }
		self::$initiated = true;
		
		parent::init();
		self::$config = parent::$config;
		self::$scrollads_user = parent::$scrollads_user;
		
		$_config = self::$config;
		
		wp_enqueue_script('jquery');
//		if ( ! is_admin() ) {
			
			// front config script
			wp_register_script('scrollads_js', SCROLLADS_PLUGIN_URL.'public/js/scrollads.js','','',true);
			wp_enqueue_script('scrollads_js');
			
			// add basic ads and native ads
			add_filter( 'the_content', array( 'Scrollads_Front', 'scrollads_addclass_content_filter' ), 10, 2);
			
//		}
	}
	
	
	// add "sa_area" class to post contents
	public function scrollads_addclass_content_filter ($content) {
		//scroll
		return '<div class="sa_area" data-ani-type="'.self::$config['animation_effect'].'">'.$content.'</div><div class="sa_area" data-sa-t="image"><div id="sa_native_zone" data-ani-type="'.self::$config['animation_effect'].'"></div></div>';
	}
	
}
