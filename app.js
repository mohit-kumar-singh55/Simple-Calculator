let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');

let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;        // we can get text writen on that button

        console.log(buttonText);

        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C')
        {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);          // it is an in-built function in JS which will evalute the problem writen on screen
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}