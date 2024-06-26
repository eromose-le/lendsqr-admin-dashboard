import InformationItem, { InfoItemProps } from "./InformationItem";

interface EducationInformationProps {
  title: string;
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

const EducationInformation: React.FC<EducationInformationProps> = ({
  title,
  level,
  employmentStatus,
  sector,
  duration,
  officeEmail,
  monthlyIncome,
  loanRepayment,
}) => {
  const educationInfoItems: InfoItemProps[] = [
    { title: "Level of Education", value: level },
    {
      title: "Employment Status",
      value: employmentStatus,
    },
    { title: "Sector of Employment", value: sector },
    { title: "Duration of Employment", value: duration },
    { title: "Office Email", value: officeEmail },
    {
      title: "Monthly Income",
      value: monthlyIncome,
    },
    { title: "Loan Repayment", value: loanRepayment },
  ];

  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {educationInfoItems.map((item, index) => (
          <InformationItem key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};
export default EducationInformation;