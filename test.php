<?php



// Complete the getSequenceSum function below.
function getSequenceSum($i, $j, $k) {
    $tmp = 0;
    for ($i; $i < $j; $i++) {
         $tmp += $i;
    }
    for ($k; $k < $j; $k++) {
        $tmp += $k;
    }
    return $tmp + $j;
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");