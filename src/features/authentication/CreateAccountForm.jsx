/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";

const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateForm = styled.form`
  border-radius: 1rem;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const CreateInputDiv = styled.div`
  margin-bottom: 1.5rem;
`;

const CreateInputLabel = styled.label`
  font-weight: 400;
`;

const CreateInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid rgb(220, 220, 220);
`;

const CreateButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
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

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const LoginLink = styled.a`
  color: var(--color-brand-600);

  &:hover {
    text-decoration: underline;
  }
`;

function CreateAccountForm() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {}

  return (
    <CreateAccountContainer>
      <CreateForm onSubmit={handleSubmit}>
        <CreateInputDiv>
          <CreateInputLabel>Email</CreateInputLabel>
          <CreateInput
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </CreateInputDiv>

        <CreateInputDiv>
          <CreateInputLabel>Password</CreateInputLabel>
          <CreateInput
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CreateInputDiv>

        <LoginDiv>
          <LoginLink href="/login">Login to existing account</LoginLink>
        </LoginDiv>

        {/* create account button */}
        <CreateButtonDiv>
          <SubmitInputButton
            type="submit"
            value="Create Account"
          ></SubmitInputButton>
        </CreateButtonDiv>
      </CreateForm>
    </CreateAccountContainer>
  );
}

export default CreateAccountForm;