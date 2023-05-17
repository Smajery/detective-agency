import Profile from '@/components/screens/profile/Profile';

const ProfilePage = () => {
    return <Profile />;
};

export default ProfilePage;

// export const getStaticProps = async () => {
//     let treaties = []
//
//     try {
//         treaties = await ClientTreaty.getAll();
//         console.log(treaties)
//     } catch (e) {
//         console.error(e)
//     }
//
//     return {
//         props: {treaties},
//         revalidate: 60
//     };
// };