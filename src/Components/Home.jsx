
import useTitle from "../useHook/useTitle";
import Banner from "./Banner";
import CategoryTabs from "./CategoryTabs";
import PicturesSlide from "./PicturesSlide";
import Rating from "./Rating";

const Home = () => {
    useTitle('Home');
    return (
        <div data-aos="data-aos-easing" data-aos-anchor-placement="top-center"
        className=" bg-blue-100"> 
        <Banner></Banner>
        <PicturesSlide></PicturesSlide>
        <CategoryTabs></CategoryTabs>
        <Rating></Rating>
        </div>
    );
};

export default Home;