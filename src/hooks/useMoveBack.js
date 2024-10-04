import { useRouter } from 'next/navigation';

const useMoveBack = () => {
  const roter = useRouter();

  return () => roter.back();
};

export default useMoveBack;
