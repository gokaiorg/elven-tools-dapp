// Login component wraps all auth services in one place
// You can always use only one of them if needed
import { useCallback, memo } from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import { useLogin } from '../hooks/auth/useLogin';
import { LoginMethodsEnum } from '../types/enums';
import { MobileLoginQR } from './MobileLoginQR';

export const LoginComponent = memo(() => {
  const { login, isLoggedIn, error, walletConnectUri } = useLogin();

  const handleLogin = useCallback(
    (type: LoginMethodsEnum) => () => {
      login(type);
    },
    [login]
  );

  if (error) return <div>{error}</div>;

  return (
    <>
      <Stack spacing={4} direction="column" align="center">
        {!isLoggedIn && (
          <>
            <Button
              mt={5}
              background="elvenTools.color2.lighter"
              _hover={{
                bg: 'elvenTools.color2.darker',
                color: 'elvenTools.color2.lighter',
              }}
              color="elvenTools.color2.base"
              borderRadius="full"
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.wallet)}
            >
              Elrond Web Wallet
            </Button>
            <Button
              mt={5}
              background="elvenTools.color2.lighter"
              _hover={{
                bg: 'elvenTools.color2.darker',
                color: 'elvenTools.color2.lighter',
              }}
              color="elvenTools.color2.base"
              borderRadius="full"
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.extension)}
            >
              Maiar Browser Extension
            </Button>
            <Button
              mt={5}
              background="elvenTools.color2.lighter"
              _hover={{
                bg: 'elvenTools.color2.darker',
                color: 'elvenTools.color2.lighter',
              }}
              color="elvenTools.color2.base"
              borderRadius="full"
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.walletconnect)}
            >
              Maiar Mobile App
            </Button>
          </>
        )}
      </Stack>
      {walletConnectUri && (
        <Box mt={5}>
          <MobileLoginQR walletConnectUri={walletConnectUri} />
        </Box>
      )}
    </>
  );
});

LoginComponent.displayName = 'LoginComponent';
