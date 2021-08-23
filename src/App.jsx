import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { retrieveAlbums } from './service/api'
import './fonts.css'


import Header from './components/Header';
import Footer from './components/Footer';
import AlbumGrid from './components/Albumgrid';
import AlbumDetails from './components/Albumdetail';
import Search from './components/Search';



function MyAlbum() {
  const style = {
    background: 'whitesmoke',
    textAlign: 'center',
    borderRadius: '7px',
    padding: '10px',
    fontFamily: `'Lato', sans-serif`
  }

  const [albums, setAlbums] = useState([])
  const [isSending, setIsSending] = useState(false)
  const sendRequest = useCallback(async (searchArtist) => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    const albums = await retrieveAlbums('album', searchArtist)
    setAlbums(albums)
    // once the request is sent, update state again
    setIsSending(false)
  }, [isSending]) // update the callback if the state changes


  const handleSearchClicked = (searchArtist) => {
    console.log('child clicked', searchArtist);
    sendRequest(searchArtist);
  }

  return (
    <Router>
      <div style={style} className='App'>
        <Route path='/' exact render={(props) => (
          <>
            <Header text='Albums Catalog' />         
            <Search onClick={handleSearchClicked}/>   
            <section>
              <AlbumGrid albums={albums} />
            </section>
          </>
        )} />
        <Route path='/album/:albumId' component={AlbumDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default MyAlbum;


