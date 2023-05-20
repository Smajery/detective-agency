import {useTranslation} from 'react-i18next';

import {StyledSeniorProfile} from './StyledSeniorProfile';
import Layout from '@/components/layout/Layout';
import {useEffect, useState} from 'react';
import {seniorMenuList} from '@/utils/menu-list';
import CasesList from './cases/CasesList';

const SeniorProfile = () => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState();

    const [isMessageModal, setIsMessageModal] = useState(false);
    const [messageModalText, setMessageModalText] = useState('');

    const handleCloseMessageModal = () => {
        setIsMessageModal(false);
        setMessageModalText('')
    };

    const [currentMenu, setCurrentMenu] = useState({});
    const [currentMenuContent, setCurrentMenuContent] = useState([]);

    useEffect(() => {
        if (Object.keys(currentMenu).length === 0) return;
        if (typeof currentMenu.model.getAll !== 'function') {
            return setCurrentMenuContent([]);
        }

        setIsLoading(true);
        currentMenu.model.getAll()
            .then(data => {
                setCurrentMenuContent(data);
            })
            .catch(e => {
                setMessageModalText(e.response?.data.message);
                setIsMessageModal(true);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, [currentMenu]);

    return (
        <Layout title={t('ProfilePage.SeniorProfile.title')}
                description={t('ProfilePage.SeniorProfile.description')}
        >
            <StyledSeniorProfile>
                <div className='senior-menu-leftbar'>
                    <div className='leftbar-container'>
                        <div className='menu-list'>
                            {seniorMenuList.map((menu) => (
                                <div className='menu-title-text-box'
                                     key={menu.id}
                                     onClick={() => setCurrentMenu(menu)}
                                >
                                    <p className={currentMenu.id === menu.id ? 'active' : ''}>
                                        {t(`ProfilePage.SeniorProfile.${menu.title}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='senior-menu-rightbar'>
                    <div className='rightbar-container'>
                        {currentMenu.title === 'Cases' && (
                            <CasesList cases={currentMenuContent} />
                        )}
                    </div>
                </div>
            </StyledSeniorProfile>
        </Layout>
    );
};

export default SeniorProfile;