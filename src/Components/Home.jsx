
import useTitle from "../useHook/useTitle";
import Banner from "./Banner";
import Rating from "./Rating";

const Home = () => {
    useTitle('Home');
    return (
        <div className=" bg-blue-100">
        <Banner></Banner>
        <Rating></Rating>
        </div>
    );
};

export default Home;