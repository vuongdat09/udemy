document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(text);
});

for (const [i,row] of rows){
    const [first, second] = row.tolowerCase().trim().split('_');
    console.log(row, first ,second);

    const output =`${first}${second.replace(
        second[0],
        second[0].toUpperCase
    )}`;
    console.log(`${outpust.padEnd(20)}${'ok'.repeat(i+1)}`);
}