import GalerySection from '../HomeComponents/galery/GalerySection';
import NewsSection from '../HomeComponents/news/NewsSection';
import SchoolSection from '../HomeComponents/school/SchoolSection';
import TeachersSection from '../HomeComponents/teacher/TeachersSection';
import Welcoming from '../HomeComponents/welcoming/Welcoming';
import { Header } from '../header/Header';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'var(--home-bg)'
        }}
      >
        <Header />
        <Welcoming />
        <NewsSection />
        <TeachersSection />
        <SchoolSection /> 
        <GalerySection />
      </div>
      <Footer />
    </>
  )
}

export default Home