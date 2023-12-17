import useFocus from '../hooks/useFocus';
import useIdle from '../hooks/useIdle';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function HeadConfig() {
  const isIdle = useIdle(10000);
  const isFocused = useFocus();

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {isFocused && !isIdle
            ? 'Him\'s Portfolio'
            : 'where are you?'}
        </title>
      </Helmet>
    </HelmetProvider>
  );
}

export default HeadConfig;
