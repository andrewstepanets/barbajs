
import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init({
    transitions: [
        {
            name: 'home',
            beforeOnce(){
                console.log('beforeOnce');
            },
            // with css plugin, this will not run
            once(){
                console.log('once');
            },
            afterOnce(){
                console.log('afterOnce');
            }
        }
    ]
});