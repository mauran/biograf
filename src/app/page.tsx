import './globals.css'

export default function Home() {

  const streamingServices = [
    {
      'title': 'DR',
      'link': 'http://dr.dk/tv'
    }, 
    {
      'title': 'Viaplay',
      'link': 'https://viaplay.dk'
    },
    {
      'title': 'HBO Max',
      'link': 'https://www.hbomax.com'
    },
    {
      'title': 'Cmore',
      'link': 'https://cmore.dk'
    },
    {
      'title': 'Discovery+',
      'link': 'https://www.discoveryplus.com/dk/'
    },
    {
      'title': 'TV2 Play',
      'link': 'https://play.tv2.dk/'
    },
    {
      'title': 'Apple TV',
      'link': 'https://tv.apple.com'
    },
  ];

  return (
    <main className="bg-black">
      <div className='bg-black'>
        Hello
      </div>
     { streamingServices.map(obj => <><li><a href={obj.link}>{obj.title}</a></li></>)}
     <a href="https://www.youtube.com/redirect?q=https://biograf.vercel.app/">Gå fullscreen</a>
    </main>
  )
}
