import SectionHeader from "./SectionHeader";

import cup1 from '../assets/images/cups/Rectangle 10.png'
import cup2 from '../assets/images/cups/Rectangle 11.png'
import cup3 from '../assets/images/cups/Rectangle 12.png'
import cup4 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup5 from '../assets/images/cups/Rectangle 15.png'
import cup7 from '../assets/images/cups/Rectangle 16.png'
import cup8 from '../assets/images/cups/Rectangle 9.png'

const Instragram = () => {
    return (
        <>
            <SectionHeader header={'Follow on Instagram'} subHeader={'Follow Us Now'}></SectionHeader>
            <div className="grid grid-cols-4 gap-5 py-5 px-64">
                    <img src={cup1} alt="" />
                    <img src={cup2} alt="" />
                    <img src={cup3} alt="" />
                    <img src={cup4} alt="" />
                    <img src={cup5} alt="" />
                    <img src={cup6} alt="" />
                    <img src={cup7} alt="" />
                    <img src={cup8} alt="" />
            </div>
        </>
    );
};

export default Instragram;