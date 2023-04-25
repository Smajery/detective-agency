import Layout from '@/components/layout/Layout';
import UserItem from '@/components/ui/user/UserItem';

const User = ({user}) => {
    console.log(user)
    return (
        <Layout title={user.name} description={`${user.name} profile`}>
            <UserItem user={user}/>
        </Layout>
    );
};

export default User;