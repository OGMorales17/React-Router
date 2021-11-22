import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Color.css";

function Color({ colors }) {
  const { color } = useParams()
  const navigate = useNavigate()
  const hex = colors[color]

  if (!hex) {
    navigate("/colors");
  }
  console.log(color)
  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;
