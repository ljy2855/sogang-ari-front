import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ClubResType } from "../types";
import ClubDetail from "./ClubDetail";
import styles from "./ClubList.module.scss";

interface ClubListProps {
  clubs: ClubResType[];
}

const ClubList: React.FC<ClubListProps> = ({ clubs }) => {
  const [isDetailFormShow, setDetailFormShow] = useState(false);

  const handleDetailFormShow = () => setDetailFormShow(true);
  const handleDetailFormClose = () => setDetailFormShow(false);

  const [selectedClub, setSelectedClub] = useState<ClubResType>();

  const showDetailForm = (club: ClubResType) => {
    setSelectedClub(club);
    handleDetailFormShow();
  };

  const clubContainer = (club: ClubResType) => {
    return (
      <>
        <div className={styles.club}>
          <Container className="border border-4 rounded-3">
            <Row className="row-cols-2">
              <Col className="p-3">
                <Row>
                  <Image
                    className={styles.logo}
                    src={`${process.env.REACT_APP_URL}/api/club/${club.id}/logo`}
                  ></Image>
                </Row>
                <Row className="pt-3">
                  <Container className={styles.recruit}>
                    {" "}
                    {club.recruiting ? "모집중" : "모집 마감"}
                  </Container>
                </Row>
              </Col>
              <Col className="p-3">
                <Row>
                  <Container className={styles.name}> {club.name}</Container>
                </Row>
                <Row>
                  <Container className={styles.detail}>
                    {" "}
                    {club.detail}
                  </Container>
                </Row>
                <Row>
                  <a onClick={() => showDetailForm(club)}>자세히 보기</a>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  };

  return (
    <>
      <Container>
        <Row className="row-cols-auto justify-content-around ">
          {clubs &&
            clubs.map((club: ClubResType) => (
              <Col className="py-3">{clubContainer(club)}</Col>
            ))}
        </Row>
      </Container>
      {selectedClub !== undefined ? (
        <ClubDetail
          show={isDetailFormShow}
          handleCloseForm={handleDetailFormClose}
          club={selectedClub}
        ></ClubDetail>
      ) : null}
    </>
  );
};

export default ClubList;
