/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "./useLogin";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginForm = styled.form`
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
  align-items: center;
  margin-top: 1.5rem;
`;

const SubmitInputButton = styled.input`
  cursor: pointer;
  background-color: var(--color-brand-600);
  width: 100%;
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

function LoginAccountForm() {
  // state
  const [email, setEmail] = useState("bryan@example.com");
  const [password, setPassword] = useState("pass206");

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
            type="text"
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
            type="text"
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
