import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Title from "../../components/UI/Title/Title";
import Input from "../../components/UI/Input/Input";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/UI/Button/Button";
import styles from "./Register.module.css";
import InfoModal from "../../components/UI/InfoModal/InfoModal";
const Register = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [info, setInfo] = useState(null);

  const closeModal = () => {
    setInfo(null);
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      setInfo({
        subtitle: "Pole tytuł nie może być puste!",
        content: "Wpisz jak nazwałeś swoją notatkę.",
      });
      return;
    } else if (email.trim().length === 0) {
      setInfo({
        subtitle: "Pole data nie może być puste!",
        content: "Wpisz kiedy dodałeś notatkę.",
      });
      return;
    } else if (pass.trim().length === 0) {
      setInfo({
        subtitle: "Pole treść nie może być puste!",
        content: "Wpisz jaką treść chciałeś/aś sobie zapisać",
      });
      return;
    } else if (pass2.trim().length === 0) {
      setInfo({
        subtitle: "Pole treść nie może być puste!",
        content: "Wpisz jaką treść chciałeś/aś sobie zapisać",
      });
      return;
    } else {
      setInfo({
        subtitle: "Dodano notatkę!",
        content: "Notatka poprawnie dodana, trwa przekierowanie...",
      });

      props.register(name, email, pass, pass2);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
    // navigate("/login");
  };

  return (
    <>
      {info && (
        <InfoModal
          subtitle={info.subtitle}
          content={info.content}
          onConfirm={closeModal}
        />
      )}
      <Title className={styles.title}>Formularz rejestracji</Title>
      <Card>
        <Form className={styles.registerForm} onSubmit={registerUser}>
          <FontAwesomeIcon icon={faRegistered} size="6x" />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.inp}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inp}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            name="pass"
            placeholder="Password"
            className={styles.inp}
            onChange={(e) => {
              setPass(e.target.value);
              console.log(pass);
            }}
          />
          <Input
            type="password"
            name="pass"
            placeholder="Password again"
            className={styles.inp}
            onChange={(e) => {
              setPass2(e.target.value);
            }}
          />
          <div className={styles.boxBtns}>
            <Input
              type="submit"
              value="Zarejestruj"
              className={styles.inpBtn}
            />

            <Input type="reset" value="Wyczyść" className={styles.inpBtn} />
          </div>
        </Form>
        <Button
          onClick={() => {
            navigate("/");
          }}
          className={styles.backBtn}
        >
          Wróć
        </Button>
      </Card>
    </>
  );
};

export default Register;
