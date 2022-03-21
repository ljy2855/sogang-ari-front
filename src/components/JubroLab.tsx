import { Button, Input, message, Table } from "antd";
// import { Redirect } from "react-router-dom";
import useAccessToken from "../hooks/useAccessToken";
import { WishResType } from "../types";
import React, { useEffect, useState } from "react";
import Wish from "./JubroLabWish";

interface TestProps {
  wishs: WishResType[] | null;
  wish_error: Error | null;
  wish_loading: boolean;
  deleteWish: (clubId: string) => void;
  addWish: (clubId: string) => void;
}

const JubroLab: React.FC<TestProps> = ({
  wishs,
  wish_error,
  wish_loading,
  deleteWish,
  addWish,
}) => {
  // const token = useAccessToken();
  const idRef = React.useRef<Input>(null);

  useEffect(() => {
    if (wish_error === null) return;
    switch (wish_error.message) {
      case "AUTH_ERROR":
        console.log("로그인");
        message.error("로그인이 필요합니다.");
        break;
      default:
        console.log("Server Error");
        message.error("Server Error");
    }
  }, [wish_error]);

  // if (token === null) {
  //   return <Redirect to="/" />;
  // }

  function clickAdd() {
    const clubId = idRef.current!.state.value;
    console.log("club");
    addWish(clubId);
  }

  return (
    <div>
      <h1>jubro Lab</h1>
      <Input type="text" placeholder="ClubId" ref={idRef} />
      <Button key="1" onClick={clickAdd}>
        Add Wish
      </Button>
      <Table
        dataSource={wishs || []}
        columns={[
          {
            title: "Wish",
            dataIndex: "wish",
            key: "wish",
            render: (text, record) => (
              <Wish {...record} deleteWish={deleteWish} key={record.clubId} />
            ),
          },
        ]}
        loading={wish_loading}
        showHeader={false}
        rowKey="clubId"
        pagination={{
          pageSize: 7,
          position: ["bottomCenter"],
        }}
      />
    </div>
  );
};

export default JubroLab;
