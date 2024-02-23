let intervalId ;

    const colorGenerator = function() {
        const hex = '0123456789ABCDEF';
        let color = '#';

        for(let i=0; i<6; i++){
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;  
    };

    const changeColor = function(){
        document.body.style.backgroundColor = colorGenerator()
    };

    const startInterval = function(){
        if(!intervalId)
        intervalId = setInterval(changeColor , 1000);
    };

    const stopInterval = function(){
        clearInterval(intervalId);
        intervalId = null;
    };

    document.querySelector('#start').addEventListener('click', startInterval);
    document.querySelector('#stop').addEventListener('click', stopInterval);
    
    coloGenerator();