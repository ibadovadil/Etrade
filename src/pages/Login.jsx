import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const user = {
  email: "adil@gmail.com",
  password: "test",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState({
    text: "",
    color: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg({
        text: "Please fill input",
        color: "warning",
      });
    } else {
      if (email === user.email && password === user.password) {
        setMsg({
          text: "Login succes",
          color: "success",
        });
        navigate("/");
        localStorage.setItem('active','true');
        // localStorage.setItem('info',user.email);
        window.location.reload();
      } else {
        setMsg({
          text: "Email or password is wrong !",
          color: "danger",
        });
      }
    }
  };

  return (
    <Container>
      <h1 className="text-center">Login</h1>
      <p className={`alert alert-${msg.color}`}>{msg.text}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
