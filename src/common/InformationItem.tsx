export interface InfoItemProps {
  title: string;
  value: string | number | undefined;
}

const InformationItem: React.FC<InfoItemProps> = ({ title, value }) => (
  <div className="dashInfoBox">
    <p className="title">{title}</p>
    <h3 className="info">{value ?? "Not Available"}</h3>
  </div>
);

export default InformationItem;