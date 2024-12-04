function InProgress(props) {
  let { todoInprogress } = props;
  return (
    <div className="card">
      <h3>In-Progress</h3>
      {todoInprogress.map((item) => {
        return <h3>{item}</h3>;
      })}
    </div>
  );
}
export default InProgress;
