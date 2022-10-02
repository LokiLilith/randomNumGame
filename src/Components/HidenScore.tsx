type HSProps = {
  num : string | number
}
const HidenScore: React.FC<HSProps> = ({num}) => {
  return <div className="number">{num}</div>;
};

export default HidenScore;
