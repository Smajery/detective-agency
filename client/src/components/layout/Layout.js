import Header from '@/components/layout/header/Header';
import Meta from '@/components/seo/Meta';
import Footer from '@/components/layout/footer/Footer';

const Layout = ({children, title, description}) => {
    return (
        <Meta title={title}
              description={description}
        >
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Meta>
    );
};

export default Layout;