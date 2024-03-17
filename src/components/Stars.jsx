const stars = ["1", "2", "3", "4", "5"];

export const Stars = () => {
  return (
    <>
      {stars.map((value, index) => (
        <li
          key={index}
          className="text-2xl hover:bg-slate-100 hover:p-2 p-2 hover:rounded-xl"
        >
          {value}
        </li>
      ))}
    </>
  );
};
