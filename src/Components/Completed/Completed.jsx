function Completed(props) {
  let { todoCompleted } = props;
  return (
    <div className="card">
      <h3>Completed!</h3>
      {todoCompleted.map((item) => {
        return <h3>{item}</h3>;
      })}
    </div>
  );
}
export default Completed;
