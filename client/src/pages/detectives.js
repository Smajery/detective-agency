import Detectives from '@/components/screens/detectives/Detectives';
import {Auth} from '@/api/auth';
import HelpPage from '@/pages/help';

const DetectivesPage = ({users}) => {
    return <Detectives users={users} />;
}

export default DetectivesPage;

// DetectivesPage.isPrivate = true

// export const getServerSideProps = async () => {
//     const detectives = await Auth.getAll()
//
//     return {
//         props: {detectives}
//     }
// }

// export const getStaticProps = async () => {
//     const users = await Auth.getAll();
//
//     return {
//         props: {users},
//         revalidate: 60
//     };
// };