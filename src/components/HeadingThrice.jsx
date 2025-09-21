export default function HeadingThrice(props) {
  return (
    <h3
      className={`font-bold tracking-tighter text-base md:text-lg uppercase ${props.color}`}
    >
      {props.name}
    </h3>
  );
}
