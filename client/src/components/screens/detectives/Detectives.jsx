import Layout from '@/components/layout/Layout';
import UserItem from '@/components/ui/user/UserItem';

const Detectives = ({users}) => {
    return (
        <Layout title="Detectives"
                description="Detectives list"
        >
            <h1>Detectives list</h1>
            {users && users.length > 0 ? (
                users.map(user => (
                    <UserItem key={user.id}
                              user={user}
                    />
                ))
            ) : (
                <div>Detectives not found</div>
            )}
        </Layout>
    );
};

export default Detectives;