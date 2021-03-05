import React from 'react';
import { useFormik } from 'formik';
import classes from './login.module.css';
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
            <body className={classes.body}>
            <main className={classes.main}>
                <h2 className={classes.h2}>Login</h2>
                <form className={classes.form}onSubmit={formik.handleSubmit}>

                    <div className={classes.input-field}>

                        <label htmlFor="email">Email: </label>
                        <br />
                        <input
                            className={classes.input-field}
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Insira seu email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <label htmlFor="email">{formik.errors.email}</label> : null}
                        <div className={classes.underline}></div>
                        <br />
                    </div>

                    <div className={classes.input-field}>
                        <label className={classes.label} htmlFor="senha">Senha: </label>
                        <br />
                        <input
                            className={classes.input-field}
                            id="senha"
                            name="senha"
                            type="password"
                            placeholder="Insira sua senha"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.senha}
                        />
                        {formik.touched.senha && formik.errors.senha ? <label htmlFor="senha">{formik.errors.senha}</label> : null}
                        <div className={classes.underline} id="underline"></div>
                        <br />
                    </div>
                    <input type="submit" className={classes.submit} value="Continue"></input>
                </form>

                <div className={classes.footer}>
                    <span className={classes.span}>Ou conecte com redes sociais</span>
                    <div className={classes.social-fields}>
                        <div className={classes.social-field-twitter}>
                            <a href="#">
                                <i className={classes.fab-fa-twitter}></i>
                                    Entre com o Twitter
                                </a>
                        </div>
                        <div className={social-fields}>
                            <div className={classes.social-field-facebook}>
                                <a className={classes.a}href="#">
                                    <i className="fab fa-facebook-f"></i>
                                    Entre com o Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
     </body>

        </>

    )
};

export default Login;