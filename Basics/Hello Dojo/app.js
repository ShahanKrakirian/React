//Create Tags
var h1 = React.createElement("h1", null, "Hello Dojo");
var h3 = React.createElement("h3", null, "Things I need to do:");
var li1 = React.createElement('li', null, "Learn React");
var li2 = React.createElement('li', null, "Climb Mt. Everest");
var li3 = React.createElement('li', null, "Run a marathon");
var li4 = React.createElement('li', null, "Feed the dogs");





//Render Tags
ReactDOM.render(h1, document.getElementById('hello'));
ReactDOM.render(h3, document.getElementById('things'));
ReactDOM.render(li1, document.getElementById('1'));
ReactDOM.render(li2, document.getElementById('2'));
ReactDOM.render(li3, document.getElementById('3'));
ReactDOM.render(li4, document.getElementById('4'));