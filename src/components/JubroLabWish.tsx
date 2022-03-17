import { CheckCircleTwoTone, DeleteOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React from "react";
import styles from "./JubroLabWish.module.scss";

interface WishProps {
  clubId: number;
  name: string;
  section: string;
  recruiting: boolean;
  deleteWish: (clubId: string) => void;
}

const Wish: React.FC<WishProps> = React.memo(
  ({ clubId, name, section, recruiting, deleteWish }) => {
    return (
      <div className={styles.book}>
        <div className={styles.title}>
          <img
            src={`${process.env.REACT_APP_URL}/api/club/${clubId}/logo`}
            style={{ width: "22px", height: "22px" }}
            alt={`${name}`}
          />{" "}
          {name}
        </div>
        <div className={styles.author}>{section}</div>
        <div className={styles.created}>
          {recruiting ? (
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          ) : (
            <CheckCircleTwoTone twoToneColor="#eb2f96" />
          )}
        </div>
        <div className={styles.tooltips}>
          <Tooltip title="Delete">
            <Button
              size="small"
              type="primary"
              shape="circle"
              danger
              onClick={click}
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </div>
      </div>
    );
    function click() {
      deleteWish(clubId.toString());
    }
  }
);

export default Wish;
