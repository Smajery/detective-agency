import {useTranslation} from 'react-i18next';

import Layout from '@/components/layout/Layout';
import DetectiveItem from '@/components/screens/detectives/detective-item/DetectiveItem';
import {StyledDetectives} from './StyledDetectives';

const Detectives = ({users}) => {
    const {t} = useTranslation()

    return (
        <Layout title={t('DetectivesPage.title')}
                description={t('DetectivesPage.description')}
        >
            <StyledDetectives>
                <h1>Detectives list</h1>
                {users && users.length > 0 ? (
                    users.map(user => (
                        <DetectiveItem key={user.id}
                                       user={user}
                        />
                    ))
                ) : (
                    <div>Detectives not found</div>
                )}
            </StyledDetectives>
        </Layout>
    );
};

export default Detectives;