import InformationItem, { InfoItemProps } from "./InformationItem";

interface SocialInformationProps {
  title: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

const SocialInformation: React.FC<SocialInformationProps> = ({
  title,
  twitter,
  facebook,
  instagram,
}) => {
  const socialInformationItems: InfoItemProps[] = [
    { title: "Twitter", value: twitter },
    { title: "Facebook", value: facebook },
    { title: "Instagram", value: instagram },
  ];

  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {socialInformationItems.map((item, index) => (
          <InformationItem key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default SocialInformation;
