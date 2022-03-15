import { Col, Container, Image, Row } from "react-bootstrap";
import { ClubResType } from "../types";
import styles from "./ClubList.module.scss";

const ClubList: React.FC = () => {
  function ClubContainer() {
    return (
      <>
        <div className={styles.club}>
          <Container className="border">
            <Row className="row-cols-2">
              <Col className="p-3">
                <Row>
                  <Image
                    className={styles.logo}
                    thumbnail={true}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOkC1wUhKEB-RkuXsgD1s6QR8D3K3JYc6Gw&usqp=CAU"
                  ></Image>
                </Row>
                <Row className="pt-3">
                  <Container className={styles.recruit}> 모집중</Container>
                </Row>
              </Col>
              <Col className="p-3">
                <Row>
                  <Container className={styles.name}> 동아리명</Container>
                </Row>
                <Row>
                  <Container className={styles.detail}> Detail</Container>
                </Row>
                <Row>
                  <a>자세히 보기</a>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row clasName="row-cols-auto justify-content-around ">
          <Col className="py-3">
            <ClubContainer></ClubContainer>
          </Col>
          <Col className="py-3">
            <ClubContainer></ClubContainer>
          </Col>
          <Col className="py-3">
            <ClubContainer></ClubContainer>
          </Col>
          <Col className="py-3">
            <ClubContainer></ClubContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClubList;
