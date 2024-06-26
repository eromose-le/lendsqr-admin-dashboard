import { assets } from "@/assets/constants";

interface Statistic {
  imgSrc: string;
  altText: string;
  label: string;
  value: number;
}

const statisticsData: Statistic[] = [
  { imgSrc: assets.user, altText: "user", label: "USERS", value: 2453 },
  {
    imgSrc: assets.users,
    altText: "users",
    label: "Active Users",
    value: 2453,
  },
  {
    imgSrc: assets.loans,
    altText: "loans",
    label: "Users with Loans",
    value: 12453,
  },
  {
    imgSrc: assets.savings,
    altText: "savings",
    label: "Users with Savings",
    value: 102453,
  },
];

export const Statistics: React.FC = () => {
  return (
    <>
      {statisticsData.map((stat, index) => (
        <div className="overviewBox" key={index}>
          <img className="homeIcon" src={stat.imgSrc} alt={stat.altText} />
          <p className="overviewText">{stat.label}</p>
          <h3 className="value">{stat.value.toLocaleString()}</h3>
        </div>
      ))}
    </>
  );
};
