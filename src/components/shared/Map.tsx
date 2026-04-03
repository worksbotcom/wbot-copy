'use client';

const Map = () => {
  return (
    <div className="h-[550px] w-full rounded-2xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps?q=Worksbot%20Software%20company%20in%20Chennai%20Tamil%20Nadu%20No.%20203,%20200%20Feet%20Radial%20Rd,%20Iswarya%20Nagar,%20Nemilichery,%20Pallavaram,%20Chennai,%20Tamil%20Nadu%20600044&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
