import { Col, Container, Row } from "react-bootstrap";
import { LoginReqType } from "../types";
import LoginButton from "./LoginButton";
import styles from "./RightSideBar.module.scss";

interface AuthInterface {
    logout: () => void;
    login: ({ userId, password }: LoginReqType) => void;
    loading: boolean;
    error: Error | null;
  }

const RightSideBar:React.FC<AuthInterface> = ({  logout,
    login,
    loading,
    error,}) =>{

    return(<>
        <Container>
      <Col>
        <Row>
          <div className={styles.item}>
            <LoginButton 
                login={login}
                logout={logout}
                loading={loading}
                error={error}
            ></LoginButton>
          </div>
        </Row>
        <Row>
          <div className={styles.item}>
            Instagram
          </div>
        </Row>
        <Row>
          <div className={styles.item}>
            FaceBook
          </div>
        </Row>
        <Row>
          <div className={styles.item}>
            Else
          </div>
        </Row>
      </Col>
    </Container></>);
};

export default RightSideBar