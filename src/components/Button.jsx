export default function Button(props) {
  return (
    <a
      className={`p-4 text-center transition-all rounded-xl hover:-translate-y-1 inline-block shadow-xl uppercase font-bold ${props.textColor} ${props.bgColor}`}
    >
      {props.name}
    </a>
  );
}
