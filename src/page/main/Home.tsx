import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Search from "./Search";
import Favorite from "./Favorite";
import Rank from "./Rank";
import banner from "../../css/img/banner.jpg";
import Update from "./Update";

function Home () {

    return (
        <>
            <div className="daily">
                <Header />
                <div className="content">
                    <section className="home-section">
                        <div className="home-banner">
                            <img className="home-bg" alt="banner" src={banner} />
                            <img className="home-bg-mobile" alt="banner" src={banner} />
                        </div>
                        <a href="/">
                            <img className="logo" alt="logo"></img>
                        </a>
                        <div className="home-search">
                            <Search />
                        </div>
                        <article className="home-favorite">
                            <Favorite />    
                        </article>
                    </section>
                    <main className="home-main">
                        <div className="home-main-form">
                            <section className="home-main-section">
                                <Rank />
                                <Update />
                            </section>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;