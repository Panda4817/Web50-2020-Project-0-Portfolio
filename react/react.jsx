
class Year extends React.Component {
    
    render() {
        return (
            new Date().getFullYear()
        );
    }
}

ReactDOM.render(<Year />, document.querySelector('#year'));