/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "./useLogin";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  align-content: center;
  min-width: 50vw;
  border-radius: 10px;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const LoginInputDiv = styled.div`
  margin-bottom: 1.5rem;
`;

const LoginInputLabel = styled.label`
  font-weight: 500;
`;

const LoginInput = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const LoginButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`;

const SubmitInputButton = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);

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
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function LoginAccountForm() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password1");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    // since form - prevent default
    e.preventDefault();

    // if email or password doesn't exist - just return
    if (!email || !password) return;

    // otherwise - email and password exists so login
    login(
      {
        email,
        password,
      },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        {/* login email */}
        <LoginInputDiv>
          <LoginInputLabel>Email</LoginInputLabel>
          <LoginInput
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </LoginInputDiv>
        {/* login password */}
        <LoginInputDiv>
          <LoginInputLabel>Password</LoginInputLabel>
          <LoginInput
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </LoginInputDiv>

        <CreateDiv>
          <CreateAccountLink href="/create-account">
            Create a new account
          </CreateAccountLink>
        </CreateDiv>

        {/* login button */}
        <LoginButtonDiv>
          <SubmitInputButton
            type="submit"
            value={!isLoading ? "Log In" : "Logging In..."}
            disabled={isLoading}
          />
        </LoginButtonDiv>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginAccountForm;
