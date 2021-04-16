const App = () => {
    const [item, setItem] = useState(1);
    const incount = () => setItem(item + 1);
    const decount = () => setItem(item - 1);
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={incount}>incount</button>
        <button onClick={decount}>decount</button>
      </div>
    );
  };
  class AppUgly extends React.Component {
    state = {
      item: 1
    };
    render() {
      const { item } = this.state;
      return (
        <div className="App">
          <h1>Hello {item}</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button onClick={this.incount}>incount</button>
          <button onClick={this.decount}>decount</button>
        </div>
      );
    }
    incount = () => {
      this.setState((state) => {
        return {
          item: state.item + 1
        };
      });
    };
    decount = () => {
      this.setState((state) => {
        return {
          item: state.item - 1
        };
      });
    };
  }