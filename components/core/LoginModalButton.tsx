import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Flex,
  ModalHeader,
  Tooltip
} from '@chakra-ui/react';
import { FC } from 'react';
import { ActionButton } from '../ActionButton';
import { LoginComponent } from './LoginComponent';
import { useEffectOnlyOnUpdate } from '../../hooks/tools/useEffectOnlyOnUpdate';
import { useLogin } from '../../hooks/auth/useLogin';
import { useLogout } from '../../hooks/auth/useLogout';
import { setLoggingInState } from '../../store/auth';

interface LoginModalButtonProps {
  onClose?: () => void;
  onOpen?: () => void;
}

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const LoginModalButton: FC<LoginModalButtonProps> = ({
  onClose,
  onOpen,
}) => {
  const { isLoggedIn, isLoggingIn } = useLogin();
  const { logout } = useLogout();
  const {
    isOpen: opened,
    onOpen: open,
    onClose: close,
  } = useDisclosure({ onClose, onOpen });

  useEffectOnlyOnUpdate(() => {
    if (isLoggedIn) {
      close();
    }
    if (!opened) {
      setLoggingInState('error', '');
    }
  }, [opened, isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <ActionButton onClick={logout}>
          <svg
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            stroke="currentColor"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </ActionButton>
      ) : (
          <ActionButton onClick={open}>
            <Tooltip label='Login' fontSize='md'>
              <svg
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              >
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
            </Tooltip>
        </ActionButton>
      )}
      <Modal
        isOpen={opened}
        size="sm"
        onClose={close}
        isCentered
        scrollBehavior="inside"
      >
        <CustomModalOverlay />
        <ModalContent
          bgColor="elvenTools.color2.base"
          px={6}
          pt={7}
          pb={10}
          position="relative"
        >
          <ModalCloseButton _focus={{ outline: 'none' }} />
          <ModalHeader>
            <Text textAlign="center" fontWeight="black" fontSize="2xl">
              Connect your wallet
            </Text>
          </ModalHeader>
          <ModalBody px={10}>
            {isLoggingIn && (
              <Flex
                alignItems="center"
                backdropFilter="blur(3px)"
                bgColor="elvenTools.color3.base"
                justifyContent="center"
                position="absolute"
                inset={0}
              >
                <Spinner
                  thickness="3px"
                  speed="0.4s"
                  color="elvenTools.color2.base"
                  size="xl"
                />
              </Flex>
            )}
            <LoginComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
