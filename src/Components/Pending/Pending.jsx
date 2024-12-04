function Pending(props) {
  let { todoPending } = props;
  return (
    <div className="card">
      <h3>Pending!!</h3>
      {todoPending.map((item) => {
        return <h3>{item}</h3>;
      })}
    </div>
  );
}

export default Pending;
