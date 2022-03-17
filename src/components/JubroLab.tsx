import { Button, Input, Table } from "antd";
// import { Redirect } from "react-router-dom";
import useAccessToken from "../hooks/useAccessToken";
import { WishResType } from "../types";
import React, { useEffect, useState } from "react";
import Wish from "./JubroLabWish";

interface TestProps {
  wishs: WishResType[] | null;
  wish_error: Error | null;
  wish_loading: boolean;
  getWishs: () => void;
  deleteWish: (clubId: string) => void;
  addWish: (clubId: string) => void;
}

const JubroLab: React.FC<TestProps> = ({
  wishs,
  wish_error,
  wish_loading,
  getWishs,
  deleteWish,
  addWish,
}) => {
  const token = useAccessToken();
  const idRef = React.useRef<Input>(null);
  const [test_wishs, setWishs] = useState<WishResType[] | null>(null);

  useEffect(() => {
    if (token) {
      getWishs();
    }
  }, [getWishs, token]);

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
        loading={wishs === null || wish_loading}
        showHeader={false}
        rowKey="clubId"
        pagination={false}
      />
    </div>
  );
};

export default JubroLab;
