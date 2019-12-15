export const withHOCs = Component => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                flag: false
            }
        }
        componentDidUpdate(preProps, preState) {
            if(preState !== this.state.flag) {
                console.log("ok");
            }
        }
        handle = () => {
            this.setState({flag: true})
        } 
        render() {
            return (
                <Component flag={this.state.flag} {...this.props}  handle={this.handle}/>
                )
        }
    }
}