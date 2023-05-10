import Detectives from '@/components/screens/detectives/Detectives';
import {Auth} from '@/api/auth';

const DetectivesPage = ({users}) => {
    return <Detectives users={users} />;
}

export default DetectivesPage;

// export const getServerSideProps = async () => {
//     const detectives = await Auth.getAll()
//
//     return {
//         props: {detectives}
//     }
// }

export const getStaticProps = async () => {
    const users = await Auth.getAll();

    return {
        props: {users},
        revalidate: 60
    };
};