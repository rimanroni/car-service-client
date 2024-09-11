import About from "../About/About";
import Banner from "../Banner/Banner";
import ChooseUs from "../Choseus/Choseus";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Term from "../Term/Term";
import Testimonial from "../Testimonial/Testimonial";

 

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <About/>
            <Services/>
            <Products/>
            <Term/>
            <ChooseUs/>
            <Testimonial/>
        </div>
    );
};

export default Home;