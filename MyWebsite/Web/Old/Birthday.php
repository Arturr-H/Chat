<!DOCTYPE html>
<html>
<body>

<?php
$time = time() - 1616699513;

$hours = ($time / 60 / 60);
$hoursINT = (int)($time / 60 / 60);
$minutesINT = (int)(($hours-$hoursINT)*60);
$seconds = (int)($time - $minutesINT+$hours*60)/60/60;

$info = "JAG SKAPADES FÖR: $time SEKUNDER 🎉";

file_put_contents($filename, $info, FILE_APPEND);

print "jag skapades för $hoursINT timmar, $minutesINT minuter, och $seconds sekunder sedan<br>";

echo'<header><title>jag skapades';
echo$time;
echo' sekunder sedan 🎉</title></header>';

// $lines = file($filename) ; 

// echo '<ul>' ;

// foreach ($lines as $line) {
//     echo "<li>$line</li>" ;
// }

// echo '</ul>' ;

?>

</body>
</html>     