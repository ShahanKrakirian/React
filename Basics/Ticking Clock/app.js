// const myButton = React.createElement('button', null, 'Click Me');
// console.log(JSON.stringify(myButton));
// ReactDOM.render(myButton, document.getElementById('app'));

setInterval(function(){ 
    const p = React.createElement('p', null, new Date().toLocaleTimeString('en-US'));
    ReactDOM.render(p, document.getElementById('time'))
 }, 1000);
