import { useState } from "react";
import { styled } from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

const StyledLoginBox = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 0.8rem;
  box-shadow: 1px 1px 4px var(--color-grey-300);
  padding: 3rem;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <StyledLoginBox>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label='Email address'>
          <Input
            type='email'
            id='email'
            // This makes this form better for password managers
            autoComplete='username'
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>

        <FormRowVertical label='Password'>
          <Input
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size='large' disabled={isLoading}>
            {!isLoading ? "Log in" : <SpinnerMini />}
          </Button>
        </FormRowVertical>
      </Form>
    </StyledLoginBox>
  );
}

export default LoginForm;
