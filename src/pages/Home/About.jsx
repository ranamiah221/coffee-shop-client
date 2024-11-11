import icon1 from '../../assets/coffee/icons/1.png'
import icon2 from '../../assets/coffee/icons/2.png'
import icon3 from '../../assets/coffee/icons/3.png'
import icon4 from '../../assets/coffee/icons/4.png'

const About = () => {
    return (
        <div className='bg-[#ECEAE3] lg:flex gap-4 lg:py-10 p-2 space-y-2'>
            <div>
                <img src={icon1} alt="" />
                <h2 className='text-xl font-medium'><i>Awesome Aroma</i></h2>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={icon2} alt="" />
                <h2 className='text-xl font-medium'><i>High Quality</i></h2>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={icon3} alt="" />
                <h2 className='text-xl font-medium'><i>Pure Grades</i></h2>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={icon4} alt="" />
                <h2 className='text-xl font-medium'><i>Proper Roasting</i></h2>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default About;