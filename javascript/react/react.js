class Year extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let x = new Date().getFullYear();
        return { x };
    }
}
ReactDOM.render(Year, document.querySelector('#year'));