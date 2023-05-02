import Layout from '@/components/layout/Layout';
import DetectiveItem from '@/components/screens/detectives/detective-item/DetectiveItem';

const User = ({user}) => {
    console.log(user)
    return (
        <Layout title={user.name} description={`${user.name} profile`}>
            <DetectiveItem user={user}/>
        </Layout>
    );
};

export default User;