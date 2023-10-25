import { Head } from 'next/head'
import Header from '../HeaderComponents/Header.js'
import Content from './Content.js'

function HomePage({ data }) {
	return (
		<>
			<Head>
				<meta name="google-site-verification" content="rvTVa5KFKGG9g5QcehEZVOLpdbqlLlhJ_tRQRlYykhw" />
			</Head>
			<Header />
			<Content data={ data } />
		</>
	)
}

export default HomePage
