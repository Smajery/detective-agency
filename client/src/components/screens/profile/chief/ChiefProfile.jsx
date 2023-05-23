import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import {format} from 'date-fns';

import {StyledChiefProfile} from '@/components/screens/profile/chief/StyledChiefProfile';
import Layout from '@/components/layout/Layout';
import {chiefMenuList} from '@/utils/menu-list';
import MessageModal from '@/components/ui/modals/message/MessageModal';
import {isEmptyArr} from '@/utils/is-empty-arr';
import TreatiesList from '@/components/screens/profile/chief/treaties/TreatiesList';

const ChiefProfile = () => {
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

    const [sortingValue, setSortingValue] = useState('')

    useEffect(() => {
        if (Object.keys(currentMenu).length === 0) return;
        if (typeof currentMenu.model.getAll !== 'function') {
            return setCurrentMenuContent([]);
        }

        setIsLoading(true);
        const currentSorting = sortingValue === '' ? null : sortingValue
        currentMenu.model.getAll(currentSorting)
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

    }, [currentMenu, sortingValue]);

    return (
        <Layout title={t('ProfilePage.ChiefProfile.title')}
                description={t('ProfilePage.ChiefProfile.description')}
        >
            <StyledChiefProfile>
                <div className='chief-menu-leftbar'>
                    <div className='leftbar-container'>
                        <div className='menu-list'>
                            <div className='menu-title'>
                                <p>
                                    {t('ProfilePage.ChiefProfile.Your control panel')}
                                </p>
                            </div>
                            {chiefMenuList.map((menu) => (
                                <div className='menu-title-text-box'
                                     key={menu.id}
                                     onClick={() => setCurrentMenu(menu)}
                                >
                                    <p className={currentMenu.id === menu.id ? 'active' : ''}>
                                        {t(`ProfilePage.ChiefProfile.${menu.title}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='chief-menu-rightbar'>
                    <div className='rightbar-container'>
                        {currentMenu.title === 'Treaties' && (
                            <TreatiesList treaties={currentMenuContent}
                                          sorting={sortingValue}
                                          setSorting={setSortingValue}
                            />
                        )}
                    </div>
                </div>
            </StyledChiefProfile>
            <MessageModal child={messageModalText}
                          isActive={isMessageModal}
                          handleClose={handleCloseMessageModal}
            />
        </Layout>
    );
};

export default ChiefProfile;