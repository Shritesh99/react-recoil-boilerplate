import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { useRecoilState, RecoilRoot } from "recoil";
import { LoadingAtom } from "../atoms";
import { Layout, Loading } from "../components";
import { ToastContainer, toast } from "react-toastify";

const Application = ({ Component, pageProps }) => {
	const [loading, setLoading] = useRecoilState(LoadingAtom);
	useEffect(() => {
		setLoading(false);
	}, []);
	if (loading) return <Loading />;
	return (
		<div className="hero-body is-align-items-flex-start container">
			<Component {...pageProps} />
		</div>
	);
};

export default function App({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Layout>
				<ToastContainer />
				<Application Component={Component} pageProps={pageProps} />
			</Layout>
		</RecoilRoot>
	);
}
