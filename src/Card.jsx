const Card = ({ img, name, age }) => {
  return (
    <div
      className="card w-[200px]"
      style={{ border: "1px solid gray", marginBottom: "50px" }}
    >
      <img src={img} height={200} alt={name} />
      <h1 className="text-red-500 bg-green-600">{name}</h1>
      <b>{age}</b>
    </div>
  );
};
export default Card;
