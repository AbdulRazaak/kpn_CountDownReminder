<?php

/*
Plugin Name: CountDown Reminder
Plugin URI:
Description: CountDown Reminder will remind with alert box what the user fill in the message input field after count down the user inputs of the Hours,Minutes and Seconds. 
Version: 1.0
Author: Kyaw Phyo Naing
Author URI: http://kyawphyonaing.web44.net
License: GPL2
*/

function reminder_script(){
    wp_enqueue_style('DesignStyle', plugin_dir_url(__FILE__) . '/css/style.css');
    wp_enqueue_script('RunningScript', plugin_dir_url(__FILE__) . '/js/script.js');
}

add_action( 'wp_enqueue_scripts', 'reminder_script' );

function Display() {
    echo '<h1 id="header_section">Reminder!</h1>';
    echo '<form id="myForm">
Messsage:<input type="text" id="msg" name="msg" value="" placeholder="Please type what you want remind here!">    
Hours: <input type="text" id="hrs" name="hrs" value="0" size="3" maxlength="3" /> 
Minutes: <input type="text" id="mns" name="mns" value="0" size="3" maxlength="3" />
Seconds: <input type="text" id="scs" name="scs" value="0" size="2" maxlength="2" /><br/>
<input class="myButton" type="button" id="btnct" value="START" onclick="countdownTimer()"/>
<span id="timer">Timer: &nbsp;</span> <span id="showhrs">00</span><span id="timer">:</span><span id="showmns">00</span><span id="timer">:</span><span id="showscs">00</span>    
</form>';
}
add_shortcode('display','Display');
?>