export default class extends React.Component {

  static async getInitialProps({ query }) {
    let idChannel = query.id

    let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`); // isomorphic-fetch
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let reqAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`); // isomorphic-fetch
    let dataAudios = await reqAudios.json()
    let audioClips = dataAudios.body.audio_clips

    let reqChilds = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    let dataChilds = await reqChilds.json();
    let audioChilds = dataChilds.body.channels

    return { channel, audioClips, audioChilds };
  }



  render() {
    const { channel, audioClips, audioChilds } = this.props
    console.log(audioChilds)
    return (
      <div>
        <header> PodCast</header>
        <h1>{channel.title}</h1>

        <h2>Series </h2>
        {audioChilds.map((series, idx) => <div key={idx}> {series.title}</div>)}


        <h2>Last PodCasts </h2>
        {audioClips.map((clip,idx) => <div key={idx}> {clip.title}</div>)}

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
        h1{
          font-weight:600;
          padding:15px;
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