export default function Heading(props) {
  return (
    <h2
      className={`text-xl md:text-3xl uppercase font-bold tracking-tighter ${props.color}`}
    >
      {props.name}
    </h2>
  );
}
