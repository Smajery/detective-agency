import {useRouter} from 'next/router';

const UserPage = () => {
    const {asPath, pathname, query} = useRouter()

    return (
        <div>
            User {query.id}
        </div>
    );
};

export default UserPage;