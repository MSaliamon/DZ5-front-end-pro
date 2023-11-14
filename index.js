var number = parseInt(prompt("Введіть розмір масиву"), 10);

let arr = [];
arr.length = number;

for(i=0; i<number; i++){
    let k = parseInt(prompt("Введіть "+ (i+1) +"-ий елемент масиву"), 10);
    arr[i] = k;
}

for(i=0; i<arr.length; i++){
    document.write(arr[i]+" ");
}
document.write("<br>");

for(i=0;i<number;i++){
    for(j=0; j<number; j++){
        let tmp = arr[j-i];
        if(arr[j-i]>arr[number-i]){
            arr[j-i] = arr[number-i];
            arr[number-i] = tmp;
        }
    }
}
for(i=0; i<arr.length; i++){
    document.write(arr[i]+" ");
}
document.write("<br>");

for(i=1; i<number; i++){
    arr[i]=arr[i+3];
}
arr.length = number-3;
for(i=0; i<arr.length; i++){
    document.write(arr[i]+" ");
}
document.write("<br>");
