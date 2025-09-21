function MapEmbed() {
  return (
    <div className="relative max-w-[1300px] mx-auto pt-[10rem] p-4 pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7155038654944!2d80.7216387!3d26.6318325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c0990ed9077a3%3A0xa3bfd1df782cfe3f!2sASHOKVATIKA%20GREEN%20SERVICES!5e0!3m2!1sen!2sin!4v1726560000000!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
