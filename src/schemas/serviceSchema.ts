import * as yup from "yup";


export const serviceSchema = yup.object().shape({
  serviceName: yup.string().required(),
  description: yup.string().required(),
  idealFor: yup.string().required(),
  price: yup.string().required(),
  features: yup.array(yup.string()).required(),
});



