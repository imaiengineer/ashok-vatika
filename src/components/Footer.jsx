function Button(props) {
  return (
    <a
      className={`p-4 text-center transition-all rounded-xl hover:-translate-y-1 inline-block shadow-xl uppercase font-bold ${props.textColor} ${props.bgColor}`}
    >
      {props.name}
    </a>
  );
}

function HeadingThrice(props) {
  return (
    <h3
      className={`font-bold tracking-tighter text-base md:text-lg uppercase ${props.color}`}
    >
      {props.name}
    </h3>
  );
}

export default function Footer() {
  const footerData = [
    {
      heading: "Company",
      subHeading: ["Home", "About Us", "Contact Us", "Services"],
    },
    {
      heading: "Resources",
      subHeading: ["Carrer", "Do Not Sell My Info", "Forum", "Support"],
    },
    {
      heading: "Policy",
      subHeading: ["Privacy", "Security"],
    },
  ];
  return (
    <div className="pt-16 overflow-hidden">
      <div className="max-w-[2500px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 bg-green-500 px-8 py-4">
        <div className="text-center md:text-left md:col-span-2 flex flex-col gap-4">
          <HeadingThrice name="Contact-us" color="text-white" />
          <div className="flex gap-4">
            <input
              type="text"
              className="rounded-md outline-none bg-white text-black text-center"
              placeholder="mob@gmail.com"
            />
            <Button
              bgColor="bg-white"
              textColor="text-gray-500"
              name="submit"
            />
          </div>
        </div>
        {footerData.map((value, index) => (
          <FooterList compData={value} key={index} />
        ))}
      </div>
      <div className="text-white text-center bg-green-500 py-4">
        <p>copyright © all rights reserved</p>
      </div>
    </div>
  );
}

function FooterList({ compData }) {
  return (
    <div className="text-white text-center md:text-left">
      <HeadingThrice name={compData.heading} color="text-white" />
      <ul>
        {compData.subHeading.map((value, index) => (
          <ListItem subHeadingName={value} key={index} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ subHeadingName }) {
  return (
    <>
      <li>
        <a href="##">{subHeadingName}</a>
      </li>
    </>
  );
}
