import SiteEnum from '@models/enums/SiteEnum';
import { useEffect, useState } from 'react';

const useEnvironment = () => {
  const [environment, setEnvironment] = useState<SiteEnum | undefined>();

  useEffect(() => {
    const element = document.querySelector('[data-site]');

    setEnvironment(
      (element?.getAttribute('data-site') as SiteEnum) || undefined
    );
  }, []);

  return environment;
};

export default useEnvironment;
