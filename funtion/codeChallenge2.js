function tiendatontop (){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue'
    })
};

 console.log(tiendatontop()); 
