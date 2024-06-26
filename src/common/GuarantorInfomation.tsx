import InformationItem, { InfoItemProps } from "./InformationItem";

interface GuarantorInformationProps {
  title: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

const GuarantorInformation: React.FC<GuarantorInformationProps> = ({
  title,
  firstName,
  lastName,
  phoneNumber,
  email,
  relationship,
}) => {
  const guarantorInformationItems: InfoItemProps[] = [
    {
      title: "Full Name",
      value: `${firstName ?? ""} ${
        lastName ?? ""
      }`,
    },
    { title: "Phone Number", value: phoneNumber },
    { title: "Email Address", value: email },
    { title: "Relationship", value: relationship },
  ];

  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {guarantorInformationItems.map((item, index) => (
          <InformationItem key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default GuarantorInformation;
