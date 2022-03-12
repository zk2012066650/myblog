import './style.scss';
import Footer from '@/pages/common/footer'
import Header from '@/pages/common/header'



const Content = () => {
    return (
        <div className="content">content</div>
    )
}
const Home = () => {
    return (
        <div className="home common">
            < Header />
            < Content />
            < Footer />
        </div>
    );
}

export default Home;
