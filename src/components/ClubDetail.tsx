import { Col, Container, Image, Modal, ModalBody, Row } from "react-bootstrap";
import { ClubResType } from "../types";

interface ClubDetailProps {
  show: boolean;
  handleCloseForm: () => void;
  club: ClubResType;
}

const ClubDetail: React.FC<ClubDetailProps> = ({
  show,
  handleCloseForm,
  club,
}) => {
  return (
    <>
      <Modal size="xl" show={show} onHide={handleCloseForm} centered>
        <ModalBody>
          <Container>
            <Col>
              <Row>
                <Col>
                  <Image
                    thumbnail
                    src={`${process.env.REACT_APP_URL}/api/club/${club.id}/logo`}
                  ></Image>
                </Col>
                <Col>{club.name}</Col>
              </Row>
              <Row></Row>
            </Col>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ClubDetail;
