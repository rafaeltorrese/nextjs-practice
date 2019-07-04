import 'isomorphic-fetch'
import Link from 'next/link'


export default class extends React.Component {

	static async getInitialProps() { // only for nextjs
		let req = await fetch('https://api.audioboom.com/channels/recommended'); // isomorphic-fetch
		let { body: channels } = await req.json()
		
		return { channels };

	}

	render() {
		const { channels } = this.props
		return (
			<div>
				<header>		Podcasts	</header>

				<div className="channels">
					{channels.map((channel) => (
						<Link href="/channel" prefetch key={channel.id}>
							<a className="channel">
								<img src={channel.urls.logo_image.original} alt="image" />
								<h2>{channel.title}</h2>
							</a>
						</Link>
					))}
				</div>



				<style jsx>{`
				header{
					color:#fff;
					background:#8756ca;
					padding:15px;
					text-align:center;
				}

				.channels {
					display:grid;
					grid-gap:15px;
					padding:15px;
					grid-template-columns:repeat(auto-fill , minmax(160px, 1fr));
				}
				.channel{
					display:block;
					border-radius:3px;
					box-shadow:0px 2px 6px rgba(0,0,0,0.15);
					margin-bottom:5em;
				}
				.channel img{
					width:100%;
				}
				h2{
					padding:5px;
					font-size:0.9em;
					font-weight:600;
					margin:0;
					text-align:center;
				}

				`}
				</style>

				<style jsx global>{`
					body {
						background:white;
						margin:0;
						font-family:system-ui;
					}
				`}</style>
			</div>

		)
	}
}