import { stdin, exit } from 'process';

var t: number;
var s: Array<number> = new Array();

function solve(n: number) {
    let a: Array<number> = n.toString(2).split('').map((d) => parseInt(d, 2));
    //console.log(a);

    var prev_1: boolean = false;
    var last_1_rm_idx: number = -1;
    for (let i = a.length - 1; i >= 0; i--) {
        if(a[i] == 1) {
            if(i < (a.length - 1) && prev_1) {
                a[i + 1] = 0;
                last_1_rm_idx = i + 1;
            }
            prev_1 = true;
        } else {
            prev_1 = false;
        }
    }
    if (last_1_rm_idx != -1) {
        for (let i = last_1_rm_idx - 1; i >= 0; i--) {
            if (a[i] == 0) {
                if (!prev_1) {
                    a[i] = 1;
                    break;
                } else {
                    prev_1 = false;
                }
            } else {
                prev_1 = true;
            }
        }
    }
    //console.log(a);
    let o: number = parseInt(a.join(''), 2);
    //console.log(o);
    s.push(o);

}

stdin.on('data', function(data) {
    if (t == null) {
        t = parseInt(data, 10);
    } else {
        let n: number = parseInt(data, 10);
        solve(n);
        t--;
        if (t == 0) {
            console.log(s.join("\n"));
            exit(0); 
        }      
    }
});


/*
my first attempt to write a typescript program
also a first attempt to write a solution on hackerearth in ts
it was a struggle
finally, had the ts working locally
it emitted correct output for the sample test case
but, on HE, it won't run, it has problems importing the process module
without it, it seems impossible to do cli io in ts
i did a lot of googling, but, dependency on node for cli io seems to be the only way
tried the js version of the code produced by tsc
pasted it in HE editor
and, it won't work, the error says "program didn't print anything"
*/
