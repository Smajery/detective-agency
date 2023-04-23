import Link from 'next/link';
import {StyledUserItem} from '@/components/ui/user/StyledUserItem';

const UserItem = ({user}) => {
    return (
        <StyledUserItem>
            <h2>{user.name}</h2>
            <small>Their website: {user.website}</small>
            <Link href={`/user/${user.id}`}>
                Read more
            </Link>
        </StyledUserItem>
    );
};

export default UserItem;