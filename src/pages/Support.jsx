/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";

const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SupportHeader = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 600;
`;

const SupportForm = styled.form`
  width: 100%;
  font-size: 1.6rem;
  border-radius: 1rem;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const SupportText = styled.p`
  margin-bottom: 1.5rem;
`;

const SupportUserInputsDiv = styled.div`
  margin-bottom: 1.5rem;
`;

const SupportUserInputsLabel = styled.label`
  font-weight: 500;
`;

const SupportInput = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const SupportTextArea = styled.textarea`
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

function Support() {
  const form = useRef();
  const [nameInput, setName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [messageTextArea, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // send email
    emailjs
      .sendForm(
        "service_i9lr97e",
        "template_r00d3zy",
        form.current,
        "hrUZK00RH_M7bercv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // reset after 5 milliseconds
    setTimeout(() => {
      event.target.reset();
    }, 500);
  };

  return (
    <SupportContainer>
      {/* Support Page Intro Text */}
      <SupportHeader>Support Form</SupportHeader>

      <SupportText>
        Please fill out the support form down below for all your questions and
        concerns.
      </SupportText>

      {/* Support Form */}
      <SupportForm ref={form} onSubmit={handleSubmit}>
        <SupportUserInputsDiv>
          <SupportUserInputsLabel>Name</SupportUserInputsLabel>
          {/* name field is used to get context over to email */}
          <SupportInput
            type="text"
            placeholder="Enter Name"
            name="user_name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></SupportInput>
        </SupportUserInputsDiv>

        <SupportUserInputsDiv>
          <SupportUserInputsLabel>Email</SupportUserInputsLabel>
          <SupportInput
            type="text"
            placeholder="Enter Email"
            name="user_email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></SupportInput>
        </SupportUserInputsDiv>

        <SupportUserInputsDiv>
          <SupportUserInputsLabel>Message</SupportUserInputsLabel>
          <SupportTextArea
            type="text"
            placeholder="Enter Message"
            name="user_message"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></SupportTextArea>
        </SupportUserInputsDiv>

        {/* Support Form Button */}
        <FormRow>
          <Button type="reset" variation="secondary">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </FormRow>
      </SupportForm>
    </SupportContainer>
  );
}

export default Support;
