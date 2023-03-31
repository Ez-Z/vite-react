import { FC } from "react";
import { Space, Table, Tag, Row, Col, Form, Input, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getAreaPath } from "@/utils";
import styles from "./index.module.scss";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const Second: FC = () => {
  const [form] = Form.useForm();

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  console.log(getAreaPath("内蒙古自治区锡林郭勒盟正镶白旗前进大街2699号"));

  return (
    <div className={styles.App}>
      <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Row>
          <Col span={5}>
            <Form.Item label="Name" name="name">
              <Input placeholder="search Name" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Address" name="address">
              <Input placeholder="search Address" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Age" name="age">
              <Input placeholder="search Age" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Button type="primary">查询</Button>
            <Button style={{ marginLeft: 10 }}>重置</Button>
          </Col>
        </Row>
      </Form>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Second;
