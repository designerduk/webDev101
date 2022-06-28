let input = 2; 
let level = 9; 
if (input == 1) 
for (let i = 1; i <= level; i++) {

    for (let h = 0; h < i; h++) {
        process.stdout.write("*");
    }
    console.log('');
} 

else if (input == 2) {
    for (let z = 1; z <= level; z++) {
    
        for (let k = 0; k < level-z; k++) {
            process.stdout.write("*");
        }
        console.log('');
    } 
    }
