import React ,{useState, useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Row,Col }  from "react-bootstrap";

function Formc() {
      const [values, setsetvalues] = useState('');
      const MySwal = withReactContent(Swal);


     


    const SignupSchema = Yup.object().shape({
           name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required '),
          subject: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
          email: Yup.string().
          email('Invalid email').
          required('Required'),
          message: Yup.string()
          .min(20, 'Too Short!')
          .max(250, 'Too Long!')
          .required('Required'),
        
      });


    return (
        <>
            <h2>Contact</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
       
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          setsetvalues(values);
          // contactadd(values).then(response => {
          //   MySwal.fire({
          //     title: <strong>send message successfully</strong>,
          //     showConfirmButton: false,
          //     icon: 'success',
          //     timer: 2000
          //   }) 
           

          // }).catch(error=>{
          //     alert('حدث خطأ غير معروف');
          // });
        }
              }
      >
        <Form>
        <Row>
          <Col md={6} >
          <Field id="name" name="name" placeholder="Name" className='form-control' />
          <small className="text-danger"> <ErrorMessage name="name"  /></small>
          </Col>
          <Col md={6} >
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            className='form-control'
          />
            <small className="text-danger"><ErrorMessage name="email" /></small>
          </Col>
        </Row>
        <Row>
        <Col md={12} className="my-4">
        <Field id="subject" name="subject" placeholder="subject" className='form-control ' />
          <small className="text-danger"><ErrorMessage name="subject" /></small>
        </Col>
        <Col md={12} className="mb-4">
        <Field  as="textarea" name='message' id='message'  rows={8} className='form-control' placeholder='Message' />
        <small className="text-danger"><ErrorMessage name="message" /></small>

        </Col>
        </Row>

          <button type="submit" className='bttn px-4 py-md-2 mt-3 font-weight-bold'>Submit</button>
        </Form>
      </Formik>
        </>
    )
}

export default Formc
