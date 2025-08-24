import { FaUser } from "react-icons/fa";

function WedgetsCard({data}) {
  return (
    <div className="wedgets">
      <div className="wedgets-left">
        <div className="wedget-icon">
          <FaUser className="wedget-user-icon" />
        </div>
        <div className="wedgets-heading">Customers</div>
      </div>

      <div className="wedgets-count">100</div>
    </div>
  );
}

export default WedgetsCard;
