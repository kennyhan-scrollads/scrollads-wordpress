<?php
/**
 * The WordPress Plugin of Scrollads
 *
 * Keep Your Current Ads. However, additional revenue with Scrollads
 *
 * @package   Scrollads_wordpress
 * @author    Kenny Han <kennyhan@scrollads.net>
 * @license   MIT License
 * @link      https://github.com/kennyhan-scrollads/scrollads-wordpress/
 * @copyright 2017 scrollads.net
 *
 * @wordpress-plugin
 * Plugin Name:       Scrollads
 * Plugin URI:        https://github.com/kennyhan-scrollads/scrollads-wordpress/
 * Description:       The WordPress Plugin of Scrollads. Keep Your Current Ads. However, additional revenue with Scrollads
 * Version:           1.0.0
 * Author:            Kenny Han
 * Author URI:        https://github.com/kennyhan-scrollads/
 * Text Domain:       scrollads-textdomain
 * Domain Path:       /languages/
 * License:           MIT License
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: https://github.com/GaryJones/move-floating-social-bar-in-genesis
 * GitHub Branch:     master
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// set environments
define( 'SCROLLADS_VERSION', '0.1.5 '.time() );
define( 'SCROLLADS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'SCROLLADS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'SCROLLADS_OPTION_KEY', 'wporg_option_scrollads' );
define( 'SCROLLADS_DOMAIN', 'http://dev.scrollads.co.kr:7000' ); // 개발서버: dev.scrollads.co.kr, 글로벌 서버: admin.scrollads.net:7000
//define( 'SCROLLADS_DOMAIN', 'http://localhost:7000' ); // 개발서버: dev.scrollads.co.kr, 글로벌 서버: admin.scrollads.net:7000

function scrollads_logout() {
	setcookie('scrollads_login', 0, 10 * DAYS_IN_SECONDS, COOKIEPATH, COOKIE_DOMAIN);
}
add_action('wp_logout', 'scrollads_logout');
	
if ( is_admin() ) {	// 관리자 모드
// add dashboard widgets
//	add_action('wp_dashboard_setup', 'my_custom_dashboard_widgets');
//
//	function my_custom_dashboard_widgets() {
//		global $wp_meta_boxes;
//
//		wp_add_dashboard_widget('custom_help_widget', 'Theme Support', 'custom_dashboard_help');
//	}
//
//	function custom_dashboard_help() {
//		echo '<p>Welcome to Custom Blog Theme! Need help? Contact the developer <a href="mailto:yourusername@gmail.com">here</a>. For WordPress Tutorials visit: <a href="http://www.wpbeginner.com" target="_blank">WPBeginner</a></p>';
//	}

//	add_action( 'wp_ajax_scrollads_action', 'scrollads_ajax_action_callback' );
//	function scrollads_ajax_action_callback() {
////		global $wpdb; // 데이터베이스에 접근할 수 있는 방법을 제공
//		$_url = SCROLLADS_DOMAIN.$_POST['url'];
//		unset($_POST['action']);
//		unset($_POST['url']);
//		$response = wp_remote_post( $_url, array(
//			'method' => 'POST',
//			'timeout' => 45,
//			'redirection' => 5,
//			'httpversion' => '1.0',
//			'blocking' => true,
//			'headers' => array(),
//			'body' =>  $_POST,
//			'cookies' => array()
//		) );
//		if($response['response']['code']=='200') {
//			echo $response['body'];
//		} else {
//			echo '{"success":false}';
//		}
//		wp_die();
//	}
//	
	require_once( SCROLLADS_PLUGIN_DIR . 'class.scrollads-admin.php' );
	add_action( 'init', array( 'Scrollads_Admin', 'init' ) );

} else { // 프론트 모드

	require_once( SCROLLADS_PLUGIN_DIR . 'class.scrollads-front.php' );
	add_action( 'init', array( 'Scrollads_Front', 'init' ) );
	
}