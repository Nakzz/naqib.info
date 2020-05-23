import '../assets/styles/bootstrap.min.css';
import '../assets/styles/icofont.min.css';
import '../assets/styles/style.scss';
import '../assets/styles/responsive.scss';
import '../assets/styles/animate.min.css';

import { Provider } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/shared/Loader';
import GoTop from '../components/shared/GoTop';

export default withRedux(initStore)(
    class MyApp extends App {
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <React.Fragment>
                    <DefaultSeo
                        title="Ajmain Naqib | Personal Website"
                        description="Ajmain Naqib's portfolio website, built on top of React Next Multi-Concepts Templates. This has been built with React, Next.js, Express.js, and ES6+" // TODO: change this since this will be shown on google search
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'http://naqib.info',
                            site_name: 'Ajmain Naqib | Personal Website',
                        }}
                    />
                    <Preloader>
                        <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider>
                        <GoTop scrollStepInPx="50" delayInMs="16.66" />
                        <Placeholder>
                            <Loader />
                        </Placeholder>
                    </Preloader>
                </React.Fragment>
            );
        }
    }
)