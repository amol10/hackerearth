"use strict";
exports.__esModule = true;
var process_1 = require("process");
var t;
var s = new Array();
function solve(n) {
    var a = n.toString(2).split('').map(function (d) { return parseInt(d, 2); });
    //console.log(a);
    var prev_1 = false;
    var last_1_rm_idx = -1;
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] == 1) {
            if (i < (a.length - 1) && prev_1) {
                a[i + 1] = 0;
                last_1_rm_idx = i + 1;
            }
            prev_1 = true;
        }
        else {
            prev_1 = false;
        }
    }
    if (last_1_rm_idx != -1) {
        for (var i = last_1_rm_idx - 1; i >= 0; i--) {
            if (a[i] == 0) {
                if (!prev_1) {
                    a[i] = 1;
                    break;
                }
                else {
                    prev_1 = false;
                }
            }
            else {
                prev_1 = true;
            }
        }
    }
    //console.log(a);
    var o = parseInt(a.join(''), 2);
    //console.log(o);
    s.push(o);
}
process_1.stdin.on('data', function (data) {
    if (t == null) {
        t = parseInt(data, 10);
    }
    else {
        var n = parseInt(data, 10);
        solve(n);
        t--;
        if (t == 0) {
            console.log(s.join("\n"));
            process_1.exit(0);
        }
    }
});
