/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Form from '@/components/ui/Form/Form';
import { localStorageHelper } from '@/helper/credential';
import { useCreateFAQMutation } from '@/redux/api/faqApi';
import { Button, Input, message } from 'antd';
import { Controller, SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import TextArea from 'antd/lib/input/TextArea';
// const { TextArea } = Input;

type IFAQ = {
    question: string
    answer: string
}

const faqCreatePage = () => {
    const { control } = useForm();
    const [createFaq, { data }] = useCreateFAQMutation()
    console.log(data);
    const onSubmit: SubmitHandler<IFAQ> = async (data) => {
        try {
            const userInfo = localStorageHelper.getUserInfo()
            // console.log({ userInfo });
            // console.log({ ...data, addedBy: userInfo?.data?._id });
            // @ts-ignore
            const response = await createFaq({ ...data, addedBy: userInfo?.data?._id })
            console.log(response);
            message.success('Faq Added')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <p>faq create page</p>
            <Form submitHandler={onSubmit}>
                <Controller
                    name="question"
                    // control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextArea

                            {...field}
                            placeholder="Enter the question here"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                borderColor: '#ccc',
                                marginTop: '10px',
                            }}
                        />
                    )}
                />
                <Controller
                    name="answer"
                    defaultValue=""
                    render={({ field }) => (
                        <TextArea

                            {...field}
                            placeholder="Enter your answer here"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                borderColor: '#ccc',
                                marginTop: '10px',
                            }}
                        />
                    )}
                />
                <div>
                    <Button htmlType="submit"> Create FAQ </Button>
                </div>
            </Form>
        </div>
    );
};

export default faqCreatePage;
