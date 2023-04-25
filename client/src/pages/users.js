import Users from '@/components/screens/users/Users';
import {UserService} from '@/services/user.service';

const UsersPage = ({users}) => {
    return <Users users={users} />;
}

export default UsersPage;

// export const getServerSideProps = async () => {
//     const users = await UserService.getAll()
//
//     return {
//         props: {users}
//     }
// }

export const getStaticProps = async () => {
    const users = await UserService.getAll();

    return {
        props: {users},
        revalidate: 60
    };
};