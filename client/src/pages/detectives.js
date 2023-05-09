import Detectives from '@/components/screens/detectives/Detectives';
import {UserService} from '@/api/user.service';

const DetectivesPage = ({users}) => {
    return <Detectives users={users} />;
}

export default DetectivesPage;

// export const getServerSideProps = async () => {
//     const detectives = await UserService.getAll()
//
//     return {
//         props: {detectives}
//     }
// }

export const getStaticProps = async () => {
    const users = await UserService.getAll();

    return {
        props: {users},
        revalidate: 60
    };
};