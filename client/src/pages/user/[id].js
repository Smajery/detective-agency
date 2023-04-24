import User from '@/components/screens/user/User';
import {UserService} from '@/services/user.service';

export default function UserPage({user}) {
    return <User user={user} />;
};

export const getStaticPaths = async () => {
    const users = await UserService.getAll();

    return {
        paths: users.map(user => ({
            params: {
                id: user.id.toString()
            }
        })),
        fallback: 'blocking'
    };
};

export const getStaticProps = async ({
                                         params
                                     }) => {
    const user = await UserService.getById(String(params?.id));

    return {
        props: {user},
        revalidate: 60
    };
};