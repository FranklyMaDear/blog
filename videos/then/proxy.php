<?php
// proxy.php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('X-Frame-Options: ALLOWALL');

$url = 'https://www.camel1.live/football/fulham-vs-everton/live/1l4rjnh91xkwm7v';

// Χρήση cURL για καλύτερο control
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
curl_setopt($ch, CURLOPT_REFERER, 'https://www.camel1.live/');

$html = curl_exec($ch);
curl_close($ch);

// Αφαίρεση X-Frame-Options headers από το αρχικό HTML
$html = preg_replace('/X-Frame-Options[^\r\n]*/i', '', $html);
$html = preg_replace('/x-frame-options[^\r\n]*/i', '', $html);
$html = preg_replace('/Content-Security-Policy[^\r\n]*/i', 'X-Content-Security-Policy: none', $html);

echo $html;
?>
