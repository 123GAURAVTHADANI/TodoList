import React from "react";

class TestComponent extends React.Component {
  componentDidMount() {
    console.log("Hello!!!!");
  }

  //   componentDidUpdate(prevState){
  //     if(prevState)
  //   }
  //   useEffect(()=>{
  //   console.log("Hello!!!")
  // },[])
  render() {
    return (
      <div>
        <h2>Test Component</h2>
      </div>
    );
  }
}
export default TestComponent;
