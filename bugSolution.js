```javascript
// Corrected component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
    return (
      <View>
        {data && <Text>{data.name}</Text>}
      </View>
    );
  }
}
```