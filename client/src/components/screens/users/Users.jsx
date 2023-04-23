import Layout from '@/components/layout/Layout';
import UserItem from '@/components/ui/user/UserItem';

const Users = ({users}) => {
    return (
        <Layout title="Users"
                description="Users list"
        >
            <h1>Users list</h1>
            {users && users.length > 0 ? (
                users.map(user =>
                    <UserItem key={user.id} user={user}/>
                )
            ) : (
                <div>Users not found</div>
            )}
        </Layout>
    );
};

export default Users;