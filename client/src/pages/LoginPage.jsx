import styled from "styled-components";
import LoginAccountForm from "../features/authentication/LoginAccountForm";

const LoginPageLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2.5rem;
  background-color: var(--color-grey-50);
`;

const LoginHeader = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`;

const LoginText = styled.p`
  text-align: center;
`;

function LoginPage() {
  return (
    <LoginPageLayout>
      <LoginHeader>Out The Box, Sneakers</LoginHeader>

      <LoginText>Please log in to your account!</LoginText>
      <LoginAccountForm />
    </LoginPageLayout>
  );
}

export default LoginPage;
