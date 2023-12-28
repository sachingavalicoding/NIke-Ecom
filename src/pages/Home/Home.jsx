import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import CardWraper from './CardWraper'
import HeroPage from './HeroPage'
import Testimonial from './Testimonial'
const Home = () => {
    return (
        <>
            <Navbar />
            <HeroPage />
            <CardWraper />
            <Testimonial />

        </>
    )
}

export default Home