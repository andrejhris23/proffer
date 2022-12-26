import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Layout from "../components/layouts/Layout";
import ChooseRoleScreen from "../components/screens/ChooseRoleScreen";

// TODO: render a welcome screen if user role is undefined, if not render the screen depending on the role of the user
const Home: NextPage = () => {
  // const {data: session} = useSession();
  // if(!session?.user?.role){
  //   // render welcome screen, trpc call to set role
  //   return (
  //     <>
  //     Please choose if this is you're first time joining!
  //     </>
  //   )
  // }

  // return(
  //   <div>
  //   {  session.user.role === 'AGENT' && <>You&aposre an agent. Congrats!</>}
  //   {  session.user.role === 'TALENT' && <>You&aposre a talent. Good luck with finding a job!</>}
  //   </div> 
  // );
  return (
    <Layout>
      <ChooseRoleScreen/>
    </Layout>
    );
}

export default Home;