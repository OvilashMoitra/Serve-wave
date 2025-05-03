/* eslint-disable @next/next/no-img-element */
import { Button, Radio, RadioChangeEvent, Rate } from "antd";
import Form from "./Form/Form";
import { SubmitHandler } from "react-hook-form";
import {  useRef, useState } from "react";
import TextArea from 'antd/lib/input/TextArea';
import DynamicModal from "./Modal/Modal";


type IFeedbackFormData = {
    findWhatLooking: boolean;
    likeAboutUs: string;
    dislikeAboutUs: string;
    newThingBringNext: string;
    rateExperience: number;
};



const FeedbackForm = () => {
    // !hooks state management
    const [value, setValue] = useState<number>(5);
    const [isOpen, setIsOpen] = useState(false)
    const [findWhatLooking, setFindWhatLooking] = useState<boolean>(true);
    const [newThingBringNext, setNewThingBringNext] = useState<string>('');
    const [likeAboutUs, setLikeAboutUs] = useState<string>('');
    const [dislikeAboutUs, setDislikeAboutUs] = useState<string>('');
    const [textAreaValue, setTextAreaValue] = useState<string>('');

    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const formSubmitRef = useRef<HTMLButtonElement>(null)

    const handleFindWhatLooking = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setFindWhatLooking(e.target.value);
    };

    const handleDislikeAboutUsTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setDislikeAboutUs(e?.target?.value);

    };
    const handleLikeAboutUsTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setLikeAboutUs(e?.target?.value);

    };
    const handleNewThingBringNextTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setNewThingBringNext(e?.target?.value);

    };

    // ! modal function

    const showModal = () => {
        setIsOpen(true);
    };

    const handleOk = () => {
        if (formSubmitRef && formSubmitRef.current) {
            formSubmitRef.current?.click()
        }
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    // !form submission
    const onSubmit: SubmitHandler<IFeedbackFormData> = async (data) => {

        console.log(findWhatLooking, likeAboutUs, dislikeAboutUs, newThingBringNext, value);

    }
    return (
        <div>
            <Button onClick={showModal}>Open Modal</Button>
            <DynamicModal
                width={1000}
                title="Feedback Form"
                open={isOpen}
                onCancel={handleCancel}
                onOk={handleOk}

                okText="Submit feedback"
            >
                <div className="py-4 flex justify-between">
                    <div className="hidden md:block md:w-1/2">
                        <img src="https://i.ibb.co/jMJ63Mx/User-Feed-Back-Large.jpg" alt="feedback" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Form submitHandler={onSubmit} >

                            <div className="my-2">
                                <p>Rate your experience</p>
                                <span className='my-4'>
                                    <Rate tooltips={desc} onChange={setValue} value={value} />
                                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                </span>
                            </div>

                            <div className="my-2">
                                <p className="mt-3">Have you find what you looking?</p>
                                <Radio.Group onChange={handleFindWhatLooking} value={findWhatLooking}>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </div>

                            <div className="my-2">
                                <p>One thing You like about us</p>
                                <TextArea
                                    required
                                    rows={4}
                                    placeholder="I like the...."
                                    value={likeAboutUs}
                                    onChange={handleLikeAboutUsTextAreaChange}
                                />
                            </div>

                            <div className="my-2">
                                <p>One thing You dislike about us</p>
                                <TextArea
                                    required
                                    rows={4}
                                    placeholder="I dislike the...."
                                    value={dislikeAboutUs}
                                    onChange={handleDislikeAboutUsTextAreaChange}
                                />
                            </div>

                            <div>
                                <p>What new thing we can bring next?</p>
                                <TextArea
                                    required
                                    rows={4}
                                    placeholder="I dislike the...."
                                    value={newThingBringNext}
                                    onChange={handleNewThingBringNextTextAreaChange}
                                />
                            </div>

                            <div className='hidden'>
                                <Button ref={formSubmitRef} style={{ background: "blue" }} htmlType="submit"> Submit FeedBack </Button>
                            </div>
                        </Form>
                    </div>

                </div>
            </DynamicModal>
        </div>
    );
};

export default FeedbackForm;