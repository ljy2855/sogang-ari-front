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
    const period = "2022-03-20 ~ 2022-04-20";
    return (
      <div
        className={styles.wish}
        title={recruiting ? period : "not recruiting"}
      >
        <div className={styles.title}>
          <img
            className={styles.logo}
            src={`${process.env.REACT_APP_URL}/api/club/${clubId}/logo`}
            alt={`${name}`}
          />{" "}
          {name}
        </div>
        <div className={styles.section}>{section}</div>
        <div className={styles.recruiting}>
          {recruiting ? (
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          ) : (
            <CheckCircleTwoTone twoToneColor="#eb2f96" title="test" />
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
