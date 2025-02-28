
function CompanyOverview() {
    return (
        <>
            {/* Banner */}
            <img className="w-screen" src="Images/BannerCompanyOverview.png" alt="Img Not Found" />
            {/* Company Overview */}
            <div className=" lg:px-52 py-24  space-y-12 bg-white">
                <div className=" max-sm:justify-self-center space-y-4">
                    <h1 className="text-4xl font-medium">Company Overview</h1>
                    <div className='flex gap-2'>
                        <div className='w-16 rounded-r-3xl rounded-l-3xl bg-blue-500 h-1'></div>
                        <div className='w-6 rounded-r-3xl rounded-l-3xl bg-gray-400 h-1'></div>
                    </div>
                </div>
                <div className="text-xl text-justify text-gray-600 space-y-8">
                    <p>
                        Raj Petro Specialities Pvt Ltd, a Brenntag Group company, is a multi-faceted petrochemical manufacturing and marketing company with business partners in about 100 countries across the globe. The company offers a complete range of products catering to Power & Energy, Personal Care, Tyre & Rubber, Food & Pharma, Construction & Mining, Chemicals & Petrochemicals, Engineering, Petroleum & Offshore, Textiles, Steel & Metal, Transport including Railways, Automotive Retail, Agriculture, Metalworking and general engineering industries. Raj Petro has been operating for eight decades providing innovative, customized solutions for a range of high-performance applications.
                    </p>

                    <p>
                        Raj Petro Specialities Pvt Ltd has two state-of-the-art ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 certified manufacturing plants based in Chennai and Silvassa, with a total production capacity of 350,000 MT per annum along with R&D Centres of Excellence, recognized by DSIR, Ministry of Science & Technology, Government of India NABL accredited Laboratory.
                    </p>

                    <p>
                        Raj Petro offers a wide range of product portfolios - ELECTROL (Transformer Oils), RAJOL (White Oils), RAJELL (Petroleum Jellies), RAJPROL (Process Oils), RAWAX (Waxes), STANSOL (Synthetic Base Fluid), ZOOMOL (Premium Automotive Lubricants), KYROS (Industrial Oils & Fluids) ONWO (High-Performance Lubricants & Food Grade Lubricants), DURATEK, KELEOL & KYROS E3 (Agrispray Oil), SYNELECT (Synthetic Ester Dielectric Fluid), and BIOELECTROL (Natural Ester Dielectric Fluid).
                    </p>
                </div>
            </div>

            {/*Global Footprint */}
            <div className=" lg:px-52 py-24 space-y-12 bg-white">
                <div className="max-sm:justify-self-center space-y-4">
                    <h1 className="text-4xl font-medium">Global Footprint in 95+ Countries</h1>
                    <div className='flex gap-2'>
                        <div className='w-16 rounded-r-3xl rounded-l-3xl bg-blue-500 h-1'></div>
                        <div className='w-6 rounded-r-3xl rounded-l-3xl bg-gray-400 h-1'></div>
                    </div>
                </div>
                <img src="Images/GlobalFootprint.jpg" alt="Img not found    " />
            </div>


            {/* Company Overview */}
            <div className=" lg:px-52 py-24 space-y-6 bg-white">
                <div className=" max-sm:justify-self-center space-y-4">
                    <img src="Logos/brenntag-logo.jpg" alt="Img not found" />
                </div>
                <div className="text-xl text-justify text-gray-600 space-y-8">
                    <p>
                        Brenntag is the global market leader in chemicals and ingredients distribution. With 10000 products and a world-class supplier base, it has 195000 customers across the globe. The company operates a network of more than 700 sites in 78 countries and is headquartered in Essen, Germany. With a global workforce of more than 17,000 employees, Brenntag has generated sales of around 14.4 billion EUR in 2021.
                    </p>

                    <p>
                        Brenntag manages its business regionally, holding leading market positions across Europe, North America and Latin America and is continuously expanding its presence in the Asia Pacific region.
                    </p>

                    <p>
                        Brenntag Asia Pacific is part of Brenntag and has its regional headquarters in Singapore with a presence in 16 countries in the region. The two global divisions, Brenntag Essentials and Brenntag Specialties provide a full-line portfolio of industrial and speciality chemicals and ingredients as well as value-added services. Brenntag strives to be the chemical industry’s preferred channel partner by offering the highest quality of products and services through its unique portfolio. The company believes in maintaining high integrity and standards in its business operation and creating long-lasting relationships with customers and suppliers. Hence, the company’s slogan ‘Connecting Chemistry’ emphasises Brenntag’s corporate culture in connecting customers and suppliers across the globe for a win-win situation in business.
                    </p>
                    <p>
                        Brenntag shares have been listed at the Frankfurt Stock Exchange since 2010, initially in the MDAX and since September 2021 in the DAX. In addition, the Brenntag SE shares are listed in the DAX 50 ESG and DAX ESG Target.
                    </p>
                </div>
                <div className="flex flex-col text-sm">
                    <a target="_blank" className="text-indigo-600 hover:underline" href="https://www.brenntag.com/corporate/en/">Visit Brenntag Global website</a>
                    <a target="_blank" className="text-indigo-600 hover:underline" href="https://www.brenntag.com/en-in/">Visit Brenntag Asia Pacific website</a>
                </div>
            </div>
        </>
    )
}

export default CompanyOverview
