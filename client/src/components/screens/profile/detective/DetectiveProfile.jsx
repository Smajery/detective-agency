import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

import {StyledDetectiveProfile} from './StyledDetectiveProfile';
import Layout from '@/components/layout/Layout';
import {detectiveMenuList} from '@/utils/menu-list';
import CasesList from '@/components/screens/profile/detective/cases/CasesList';

const DetectiveProfile = () => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState();

    const [isMessageModal, setIsMessageModal] = useState(false);
    const [messageModalText, setMessageModalText] = useState('');

    const handleCloseMessageModal = () => {
        setIsMessageModal(false);
        setMessageModalText('');
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
        <Layout title={t('ProfilePage.DetectiveProfile.title')}
                description={t('ProfilePage.DetectiveProfile.description')}
        >
            <StyledDetectiveProfile>
                <div className='detective-menu-leftbar'>
                    <div className='leftbar-container'>
                        <div className='menu-list'>
                            <div className='menu-title'>
                                <p>
                                    {t('ProfilePage.DetectiveProfile.Your control panel')}
                                </p>
                            </div>
                            {detectiveMenuList.map((menu) => (
                                <div className='menu-title-text-box'
                                     key={menu.id}
                                     onClick={() => setCurrentMenu(menu)}
                                >
                                    <p className={currentMenu.id === menu.id ? 'active' : ''}>
                                        {t(`ProfilePage.DetectiveProfile.${menu.title}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='detective-menu-rightbar'>
                    <div className='rightbar-container'>
                        {currentMenu.title === 'Cases' && (
                            <CasesList cases={currentMenuContent} />
                        )}
                    </div>
                </div>
            </StyledDetectiveProfile>
        </Layout>
    );
};

export default DetectiveProfile;