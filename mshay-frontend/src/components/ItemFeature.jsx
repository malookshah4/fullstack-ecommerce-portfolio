const ItemFeature = ({ features }) => {
  return (
    <table className="features-table">
      <tbody>
        {features.map((feature) => (
          <tr key={feature.name}>
            <td>{feature.name}</td>
            <td>{feature.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemFeature;