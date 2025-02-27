import CustomCarousel from '@/features/carousal/Carousal';
import { ImageGrid } from '@/features/imagegrid/ImageGrid';




function Main() {
  const images = [
    { image: "Images/Industry1.jpg", text: "food and pharma" },
    { image: "Images/Industry2.jpg", text: "personal care" },
    { image: "Images/Industry3.jpg", text: "power sector" },
    { image: "Images/Industry4.jpg", text: "metal working" },
    { image: "Images/Industry5.jpg", text: "agriculture" },
    { image: "Images/Industry6.jpg", text: "auto oem & ancillary" },
    { image: "Images/Industry7.jpg", text: "automative retail" },
    { image: "Images/Industry8.jpg", text: "chemicals & petrochemicals" },
    { image: "Images/Industry9.jpg", text: "construction and mining" },
    { image: "Images/Industry10.jpg", text: "engineering" },
    { image: "Images/Industry11.jpg", text: "petroleum and offshore" },
    { image: "Images/Industry12.jpg", text: "rubber" },
    { image: "Images/Industry13.jpg", text: "steel" },
    { image: "Images/Industry14.jpeg", text: "steel and metal" },
    { image: "Images/Industry15.jpg", text: "textile" },
    { image: "Images/Industry16.jpg", text: "transport including railways" },
    { image: "Images/Industry17.jpg", text: "others" },
  ];


  const logos = [
    "Logos/Brand_electrol.png",
    "Logos/Brand_kyros.png",
    "Logos/Brand_onwo.png",
    "Logos/Brand_rajell.png",
    "Logos/Brand_rajol.png",
    "Logos/Brand_rajprol.png",
    "Logos/Brand_rawax.png",
    "Logos/Brand_stansol.png",
    "Logos/Brand_zoomol.png",
  ];



  return (
    <>
      {/* Carousel */}
      <CustomCarousel />
      {/* image grid */}
      <ImageGrid images={images} />

      {/* logos sections */}
      <div className="lg:px-72 max-sm:px-10 md:px-20 mt-20 space-y-10 text-center">
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-5xl font-semibold'>Our Brands</h1>
          <div className='flex gap-2'>
            <div className='w-16 rounded-r-3xl rounded-l-3xl bg-blue-500 h-1'></div>
            <div className='w-6 rounded-r-3xl rounded-l-3xl bg-gray-400 h-1'></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex justify-center items-center ${index % 3 === 2 ? "col-span-2 sm:col-span-1" : ""
                }`}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-sm:w-48 max-sm:h-48 h-56 w-56  rounded-full cursor-pointer object-cover transition-transform duration-700 hover:scale-[1.10]"
              />
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default Main