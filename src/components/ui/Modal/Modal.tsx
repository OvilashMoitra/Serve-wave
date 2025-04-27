import  { Children, useState } from 'react';
import { Modal } from 'antd';


type IDynamicModalProps = {
    title: string;
    open: boolean;
    okText: string;
    width?: number;
    cancelText?: string| "Cancel";
    children: React.ReactElement| React.ReactNode
    onCancel: () => void;
    onOk: () => void;
}


const DynamicModal = (props:IDynamicModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        width={props.width || 416}
        title={props.title}
        open={props.open}
        onOk={props.onOk}
        onCancel={props.onCancel}
        okText={props.okText}
        cancelText={props.cancelText}
      >
        {props.children}
      </Modal>
    </>
  );
};

export default DynamicModal;