export default function About() {
  return (
    <section className="max-w-[1300px] pt-[10rem] mx-auto justify-between md:items-center gap-4 grid md:grid-cols-2 grid-cols-1 ">
      <div className="p-4">
        <h2 className="heading-secondary mb-4" id="about-us">
          About Us
        </h2>
        <p className="paragraph">
          Ashok Vatika is your trusted partner for flower nurseries, custom
          garden creation, and professional maintenance services. With a wide
          variety of vibrant flowers and creative landscaping solutions, we
          transform homes, offices, and outdoor spaces into refreshing green
          havens where nature and happiness flourish.
        </p>
        <br />
        <p className="paragraph">
          What began as a small passion project has blossomed into a
          full-service gardening studio. Our team of experienced horticulturists
          and designers carefully plan and create gardens that suit your
          lifestyle and space — be it cozy balcony gardens, expansive lawns, or
          bespoke terrace landscapes.
        </p>
        <br />
        <p className="paragraph">
          We don't just plant — we nurture. Our maintenance programs include
          seasonal pruning, soil health checks, pest management, and scheduled
          visits so your garden stays healthy and beautiful throughout the year.
        </p>
      </div>
      <div>
        <img src="about.png" alt="about-us" />
      </div>
    </section>
  );
}
