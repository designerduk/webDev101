let input = 1; 
let level = 10; 

if (input == 1) 
for (let i = 1; i <= level; i++) {

    for (let h = 0; h < i; h++) {
        process.stdout.write("*");
    }
    console.log('');
    }    

else if (input == 2) {
    for (let z = 1; z <= level; z++) {
    
        for (let k = 0; k <= level-z; k++) {
            process.stdout.write("*");
        }
        console.log('');
        } 
        }

else if (input == 3) {
    for (let g = 1; g <= level; g++) {

        for (let l = 0; l <= level-g; l++) {
            process.stdout.write(" ");
        }
        for (let l = 0; l < g; l++) {
            process.stdout.write("*");
        }
        console.log('');
        } 
        }

else if (input == 4) {
    for (let w = 1; w <= level; w++) {
        for (let r = 0; r < w; r++) {
            process.stdout.write(" ");
        }
        for (let r = 0; r <= level-w; r++) {
            process.stdout.write("*");
        }
        console.log('');
        } 
        }