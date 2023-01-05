import Alert from '../common/Alert';
import { api } from '@/src/utils/api';
import { useRouter } from 'next/router';

// TODO: add styling 
const ChooseRoleScreen = () => {

  const agentRoleMutation = api.user.setRoleAsAgent.useMutation();
  const talentRoleMutation = api.user.setRoleAsTalent.useMutation();
  const router = useRouter();

  const handleAgentRole = () => {
    agentRoleMutation.mutate(undefined, {
      onSuccess: () => router.reload()
    });
  }

  const handleTalentRole = () => {
    talentRoleMutation.mutate(undefined, {
      onSuccess: () => router.reload()
    });
  }

  return (
    <>
      <h2 className='mt-10 text-center'>Choose your role! Remember you can only do this once</h2>
      <div className='flex justify-between items-center'>
        <button
        onClick={handleAgentRole}
        disabled={agentRoleMutation.isLoading}
        className='mx-10 bg-indigo-200 hover:bg-indigo-500 p-5 m-5 rounded'
        >
          Choose Agent
        </button>
        <button
        onClick={handleTalentRole}
        disabled={talentRoleMutation.isLoading}
        className='mx-10 bg-teal-200 hover:bg-teal-500 p-5 m-5 rounded'
        >
          Choose Talent
        </button>
      </div>
    </>
  );
};

export default ChooseRoleScreen;
