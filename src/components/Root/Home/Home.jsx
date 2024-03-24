import Banner from "../../Banner/Banner";
import CategoriesList from "../../CategoriesLists/CategoriesList";
import FeaturedJobs from "../../FeatureedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <CategoriesList></CategoriesList>
            <FeaturedJobs></FeaturedJobs>
            
        </div>
    );
};

export default Home;