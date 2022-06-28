let input = 1; 
let level = 8; 
if (input == 1) 
for (let i = 1; i <= level; i++) {

    for (let h = 0; h < i; h++) {
        process.stdout.write("*");
    }
    console.log('');
} 