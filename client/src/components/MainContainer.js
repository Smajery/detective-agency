import A from './A';
import Head from 'next/head'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"my first next.js app " + keywords}></meta>
                <title>DetectiveAgency</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text={"Home"}/>
                <A href={"/users"} text={"Users List"}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;