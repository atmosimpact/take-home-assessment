// Incomplete
// import React, { useState } from 'react'

// import { FieldDefaultProps, FieldProps } from '../../types'

// import { useFormik } from 'formik';
// import * as yup from 'yup';

// function PercentageField({ name, initialValue, onChange }: FieldProps) {
//     const [value, setValue] = useState(initialValue)

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value)
//         onChange(e)
//       }

//     const PercentageSchema = yup.object().shape({
//         percentage: yup
//         .number()
//         .min(0)
//         .max(100)
//     });

//     const formik = useFormik({
//             initialValues: {
//                 percentage: ''
//             },
//             PercentageSchema,
//             onSubmit: () => {
//                 handleChange()
//                 console.log(value);
//             },
//             });
//   return (
//     <input
//           type="number"
//           name={name}
//           className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
//           value={formik.values.percentage}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
        
//       />
//   )
    
// }

// PercentageField.defaultProps = FieldDefaultProps

// export default PercentageField
