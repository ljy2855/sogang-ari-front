import { Button, Input, message, Table } from "antd";
// import { Redirect } from "react-router-dom";
import useAccessToken from "../hooks/useAccessToken";
import { WishResType } from "../types";
import React, { useEffect, useState } from "react";
import Wish from "./JubroLabWish";
import ClubService from "../services/ClubService";
import SignUpService from "../services/SignUpService";

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
  const nameRef = React.useRef<Input>(null);
  const userIdRef = React.useRef<Input>(null);
  const passwordRef = React.useRef<Input>(null);

  useEffect(() => {
    if (wish_error === null) return;
    switch (wish_error.message) {
      case "AUTH_ERROR":
        console.log("로그인");
        message.error("로그인이 필요합니다.");
        break;
      default:
        message.error(wish_error.message);
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
  function click() {
    const name = nameRef.current!.state.value;
    const userId = userIdRef.current!.state.value;
    const password = passwordRef.current!.state.value;
    SignUpService.signUp({ name, userId, password }).then((res) => {
      switch (res?.result) {
        case "success":
          message.success(res.message);
          break;
        case "fail":
          message.error(res.message);
          break;
        default:
          console.log(res?.message);
          message.error(res?.message);
      }
      console.log(res);
    });
  }

  return (
    <div>
      <h1>jubro Lab</h1>
      <Input type="text" placeholder="Name" ref={nameRef} />
      <Input type="text" placeholder="UserId" ref={userIdRef} />
      <Input type="text" placeholder="Password" ref={passwordRef} />
      <Button key="1" onClick={click}>
        Sign Up
      </Button>
      <Input type="text" placeholder="ClubId" ref={idRef} />
      <Button key="2" onClick={clickAdd}>
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
