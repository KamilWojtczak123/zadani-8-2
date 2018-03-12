    var Counter = React.createClass({
    getInitialState: function() {
    console.log('definiuje początkowy stan komponentu');
    return {
    counter: 0
    };
 },
        
increment: function() {
    this.setState({
    counter: this.state.counter + 1
    });
},
    
decrement: function() {
    this.setState({
    counter: this.state.counter - 1
    });
},
        
componentWillMount: function() {
    console.log('funkcja odpala się przed render()')
},
        
componentDidMount: function(){
    console.log('funkcja odpala się po zamontowaniu komponentu w drzewie DOM');
},
        
render: function() {
        console.log('następuje renderowanie komponentu...')
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.decrement},'-'),
            React.createElement('span', {}, 'Licznik' +this.state.counter),
            React.createElement('button',{onClick: this.increment},'+')
        );
    }
    });

var element = React.createElement('div',{},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));