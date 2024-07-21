import "../css/pages/home.css";
import HomeGrid from "../components/home/HomeGrid";
import HomeCategories from "../components/home/HomeCategories";
import HomeProducts from "../components/home/HomeProducts";
import HomeSuggestions from "../components/home/HomeSuggestions";
import HomeCallToAction from "../components/home/HomeCallToAction";
import HomeSale from "../components/home/HomeSale";
import HomeDiscounts from "../components/home/HomeDiscounts";

const Home = () => {
  return (
    <section id="home-section">
      <HomeCallToAction></HomeCallToAction>
      <HomeGrid></HomeGrid>
      <HomeCategories></HomeCategories>
      <HomeProducts></HomeProducts>
      <HomeSuggestions></HomeSuggestions>
      <HomeDiscounts></HomeDiscounts>
      <HomeSale></HomeSale>
    </section>
  );
};

export default Home;
