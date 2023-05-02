import Link from 'next/link';
import {StyledDetectiveItem} from './StyledDetectiveItem';

const DetectiveItem = ({user}) => {
    return (
        <StyledDetectiveItem>
            <h2>{user.name}</h2>
            <small>Their website: {user.website}</small>
            <Link href={`/user/${user.id}`}>
                Read more
            </Link>
        </StyledDetectiveItem>
    );
};

export default DetectiveItem;