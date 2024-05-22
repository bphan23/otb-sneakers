/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useUser } from "./useUser";
import { useUpdate } from "./useUpdate";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";
import FileInput from "../../ui/FileInput";
import Input from "../../ui/Input";

const UpdateForm = styled.form`
  padding: 2.4rem 4rem;
  background-color: white;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  font-size: 1.4rem;
`;

const updateFormRow = {
  padding: "1.2rem 0",
};

function UpdateUserForm() {
  const {
    user: {
      email,
      user_metadata: { name: currentName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdate();

  const [name, setName] = useState(currentName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    updateUser(
      { name, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setName(currentName); // set back to previous name
    setAvatar(null);
  }

  return (
    <UpdateForm onSubmit={handleSubmit}>
      <FormRow label="Email" style={updateFormRow}>
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Name" style={updateFormRow}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar Image" style={updateFormRow}>
        <FileInput
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow style={updateFormRow}>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </UpdateForm>
  );
}

export default UpdateUserForm;
