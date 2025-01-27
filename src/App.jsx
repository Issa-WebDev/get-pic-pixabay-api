import Header from "./components/Header";
import ThemeProvider from "./ThemeContext";
import FetchDataProvider from "./FetchAPI";
import Banner from "./components/Banner";
import ImagesBox from "./components/ImagesBox";
import HeaderOnScroll from "./components/HeaderOnScroll";

// https://pixabay.com/api/?key=48466442-ea1cdeffab6f92f6dd28f179e&q=yellow+flowers&image_type=phot


const App = () => {
  return (
    <ThemeProvider>
      <FetchDataProvider>
        <HeaderOnScroll />
        <Header />
        <Banner />
        <ImagesBox />
      </FetchDataProvider>
    </ThemeProvider>
  );
};

export default App;
