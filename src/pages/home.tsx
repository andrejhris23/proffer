import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Layout from "../components/layouts/Layout";
import ChooseRoleScreen from "../components/screens/ChooseRoleScreen";
import AgentHomeScreen from "../components/screens/AgentHomeScreen";
import TalentHomeScreen from "../components/screens/TalentHomeScreen";

// TODO: change this style of rendering screens, switch to middleware for role checking maybe
const Home: NextPage = () => {
  const {data: session} = useSession();

  if(!session?.user?.role){
  // render welcome screen, trpc call to set role
    return <ChooseRoleScreen />;
  }

  return(
    <Layout>
      { session.user.role === 'AGENT' && <AgentHomeScreen /> }
      { session.user.role === 'TALENT' && <TalentHomeScreen /> }
    </Layout>
  );
}

export default Home;