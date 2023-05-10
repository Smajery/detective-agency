import User from '@/components/screens/user/User';
import {Auth} from '@/api/auth';

export default function UserPage({user}) {
    return <Auth user={user} />;
};

export const getStaticPaths = async () => {
    const users = await Auth.getAll();

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
    const user = await Auth.getById(String(params?.id));

    return {
        props: {user},
        revalidate: 60
    };
};