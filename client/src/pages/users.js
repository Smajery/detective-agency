import Users from '@/components/screens/users/Users';
import {UserService} from '@/services/user.service';

export default function UsersPage({users}) {
    return <Users users={users}/>;
}

export const getServerSideProps = async () => {
    const users = await UserService.getAll()

    return {
        props: {users}
    }
}