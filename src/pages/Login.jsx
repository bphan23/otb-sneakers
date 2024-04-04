/* eslint-disable no-unused-vars */
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginHeader = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 600;
`;

const LoginForm = styled.form`
  width: 50%;
  height: 50%;
  border-radius: 10px;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const LoginText = styled.p`
  margin-bottom: 1.5rem;
`;

const LoginInputDiv = styled.div`
  margin-bottom: 1.5rem;
`;

const LoginInputLabel = styled.label`
  font-weight: 400;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid rgb(220, 220, 220);
`;

const LoginButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const SubmitInputButton = styled.input`
  cursor: pointer;
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const CreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const CreateAccountLink = styled.a`
  color: var(--color-brand-600);

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  return (
    <LoginContainer>
      <LoginHeader>Login</LoginHeader>

      <LoginText>Please login if you have an existing account</LoginText>

      <LoginForm>
        {/* login email */}
        <LoginInputDiv>
          <LoginInputLabel>Email</LoginInputLabel>
          <LoginInput type="text" placeholder="Enter Email" />
        </LoginInputDiv>
        {/* login password */}
        <LoginInputDiv>
          <LoginInputLabel>Password</LoginInputLabel>
          <LoginInput type="text" placeholder="Enter Password" />
        </LoginInputDiv>

        <CreateDiv>
          <CreateAccountLink href="/create-account">
            Create a new account
          </CreateAccountLink>
        </CreateDiv>

        {/* login button */}
        <LoginButtonDiv>
          <SubmitInputButton type="submit" value="Submit" />
        </LoginButtonDiv>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
