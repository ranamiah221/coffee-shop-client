import SectionHeader from "./SectionHeader";
import bgImage from '../assets/images/more/1.png'

const Coffees = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="py-5 px-64">
            <SectionHeader header={'Our Popular Products'} subHeader={'Sip & Savor'}></SectionHeader>

        </div>
    );
};

export default Coffees;