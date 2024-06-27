import { assets } from "@/assets/constants";

interface CustomDateInputProps {
  id: string;
}

const CustomDateInput: React.FC<CustomDateInputProps> = ({ id }) => {
  const handleIconClick = () => {
    const dateInput = document.getElementById(id);
    if (dateInput) {
      dateInput.click();
    }
  };

  return (
    <div className="filerItemBox">
      <input
        className="filterDate"
        type="datetime-local"
        id={id}
        style={{ display: "none" }}
      />
      <img src={assets.calender} alt="date icon" onClick={handleIconClick} />
    </div>
  );
};

export default CustomDateInput;
