import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignupForm = () => {
    const [hasAccount, setHasAccount] = useState(false);

    const formikSignup = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
            phone: Yup.string().required('Phone is required')
        }),
        onSubmit: (values) => {
            console.log('Signup Submitted:', values);
            formikSignup.resetForm();
        }
    });

    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: (values) => {
            console.log('Login Submitted:', values);
            formikLogin.resetForm();
        }
    });

    const toggleForm = () => {
        setHasAccount(!hasAccount);
        formikSignup.resetForm();
        formikLogin.resetForm();
    };

    const getErrorStyles = (touched, error) => {
        if (touched && error) {
            return {
                borderColor: 'red',
                color: 'red'
            };
        }
        return {};
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="col-lg-6 shadow p-4 rounded">
                {hasAccount ? (
                    <>
                        <h2>Log In Here</h2>
                        <form onSubmit={formikLogin.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="login-email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    id="login-email"
                                    className={`form-control ${formikLogin.touched.email && formikLogin.errors.email ? 'is-invalid' : ''}`}
                                    {...formikLogin.getFieldProps('email')}
                                    style={getErrorStyles(formikLogin.touched.email, formikLogin.errors.email)}
                                />
                                {formikLogin.touched.email && formikLogin.errors.email && (
                                    <div className="invalid-feedback">{formikLogin.errors.email}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="login-password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    className={`form-control ${formikLogin.touched.password && formikLogin.errors.password ? 'is-invalid' : ''}`}
                                    {...formikLogin.getFieldProps('password')}
                                    style={getErrorStyles(formikLogin.touched.password, formikLogin.errors.password)}
                                />
                                {formikLogin.touched.password && formikLogin.errors.password && (
                                    <div className="invalid-feedback">{formikLogin.errors.password}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-success">Log In</button>
                            </div>
                        </form>
                        <p>
                            Don't have an account?{' '}
                            <span className="text-primary" onClick={toggleForm}>
                                Sign Up
                            </span>
                        </p>
                    </>
                ) : (
                    <>
                        <h2>Sign Up Here</h2>
                        <form onSubmit={formikSignup.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="signup-username" className="form-label">Username:</label>
                                <input
                                    type="text"
                                    id="signup-username"
                                    className={`form-control ${formikSignup.touched.username && formikSignup.errors.username ? 'is-invalid' : ''}`}
                                    {...formikSignup.getFieldProps('username')}
                                    style={getErrorStyles(formikSignup.touched.username, formikSignup.errors.username)}
                                />
                                {formikSignup.touched.username && formikSignup.errors.username && (
                                    <div className="invalid-feedback">{formikSignup.errors.username}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signup-email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    className={`form-control ${formikSignup.touched.email && formikSignup.errors.email ? 'is-invalid' : ''}`}
                                    {...formikSignup.getFieldProps('email')}
                                    style={getErrorStyles(formikSignup.touched.email, formikSignup.errors.email)}
                                />
                                {formikSignup.touched.email && formikSignup.errors.email && (
                                    <div className="invalid-feedback">{formikSignup.errors.email}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signup-password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    id="signup-password"
                                    className={`form-control ${formikSignup.touched.password && formikSignup.errors.password ? 'is-invalid' : ''}`}
                                    {...formikSignup.getFieldProps('password')}
                                    style={getErrorStyles(formikSignup.touched.password, formikSignup.errors.password)}
                                />
                                {formikSignup.touched.password && formikSignup.errors.password && (
                                    <div className="invalid-feedback">{formikSignup.errors.password}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signup-confirm-password" className="form-label">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="signup-confirm-password"
                                    className={`form-control ${formikSignup.touched.confirmPassword && formikSignup.errors.confirmPassword ? 'is-invalid' : ''}`}
                                    {...formikSignup.getFieldProps('confirmPassword')}
                                    style={getErrorStyles(formikSignup.touched.confirmPassword, formikSignup.errors.confirmPassword)}
                                />
                                {formikSignup.touched.confirmPassword && formikSignup.errors.confirmPassword && (
                                    <div className="invalid-feedback">{formikSignup.errors.confirmPassword}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signup-phone" className="form-label">Phone:</label>
                                <PhoneInput
                                    id="signup-phone"
                                    country={'pk'}
                                    value={formikSignup.values.phone}
                                    onChange={(phone) => formikSignup.setFieldValue('phone', phone)}
                                    inputStyle={{
                                        width: '100%',
                                        borderColor: formikSignup.touched.phone && formikSignup.errors.phone ? 'red' : '',
                                        color: formikSignup.touched.phone && formikSignup.errors.phone ? 'red' : ''
                                    }}
                                />
                                {formikSignup.touched.phone && formikSignup.errors.phone && (
                                    <div className="invalid-feedback">{formikSignup.errors.phone}</div>
                                )}
                            </div>
                            {/* ... */}
                            <div className="mb-3">
                                <button type="submit" className="btn btn-success">Sign Up</button>
                            </div>

                        </form>
                        <p>
                            Already have an account?{' '}
                            <span className="text-primary" onClick={toggleForm}>
                                Log In
                            </span>
                        </p>
                    </>
                )}
            </div>
        </div >
    );
};

export default SignupForm;

