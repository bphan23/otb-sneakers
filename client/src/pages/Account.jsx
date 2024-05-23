import styled from "styled-components";
import UpdateUserForm from "../features/authentication/UpdateUserForm";

const AccountHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

function Account() {
  return (
    <>
      <AccountHeader>Update Account Information</AccountHeader>
      <UpdateUserForm />
    </>
  );
}

export default Account;
