import Head from 'next/head';
import {useTranslation} from 'react-i18next';



const Meta = ({title, description, children}) => {
    const {t} = useTranslation()

    const getTitle = (title) => `${title} | ${t('meta.title')}`;
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                {description ? (
                    <>
                        <meta name="description"
                              content={description}
                        />
                        <meta name="og:title"
                              content={getTitle(title)}
                        />
                        <meta name="og:description"
                              content={description}
                        />
                    </>
                ) : (
                    <meta name="robots"
                          content="noindex, nofollow"
                    />
                )}

            </Head>
            {children}
        </>
    );
};

export default Meta;