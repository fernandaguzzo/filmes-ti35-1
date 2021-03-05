import React from 'react';
import { useFormik } from 'formik';
import './login.css';
import * as Yup from 'yup';




const Login = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Obrigatório';
        }
        return errors;

    }


    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',

        },
        validationSchema: Yup.object({
            email: Yup.string().email(' E-mail inválido').required(' Obrigatório'),
            senha: Yup.string().required(' Obrigatório'),
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>

            <main className="container">
                <h2>Login</h2>
                <form onSubmit={formik.handleSubmit}>

                    <div class="input-field">

                        <label htmlFor="email">Email: </label>
                        <br />
                        <input
                            className="input-field"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Insira seu email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <label htmlFor="email">{formik.errors.email}</label> : null}
                        <div className="underline"></div>
                        <br />
                    </div>

                    <div className="input-field">
                        <label htmlFor="senha">Senha: </label>
                        <br />
                        <input
                            className="input-field"
                            id="senha"
                            name="senha"
                            type="password"
                            placeholder="Insira sua senha"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.senha}
                        />
                        {formik.touched.senha && formik.errors.senha ? <label htmlFor="senha">{formik.errors.senha}</label> : null}
                        <div className="underline" id="underline"></div>
                        <br />
                    </div>
                    <input type="submit" value="Continue"></input>
                </form>

                <div className="footer">
                    <span className="span">Ou conecte com redes sociais</span>
                    <div className="social-fields">
                        <div className="social-field twitter">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                                    Entre com o Twitter
                                </a>
                        </div>
                        <div className="social-fields">
                            <div className="social-field facebook">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                    Entre com o Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </>

    )
};

export default Login;