import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {retrieveAlbum} from '../service/api'
import Header from './Header'

const AlbumDetails = () => {
    const { albumId } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const getDetails = async () => {
            const album = await retrieveAlbum('album', albumId)            
            setDetails(album)
        }
        getDetails()
    }, [albumId])

    const returnButtonStyle = {
        backgroundColor: 'whitesmoke',        
        borderRadius: '5px',
        padding: '5px 20px',        
        marginBottom: '20px',
        width: '100px'
    }

    const contentStyle = {
        backgroundColor: 'whitesmoke',
        borderRadius: '5px',
        padding: '20px',
    }

    const detailStyle = {        
        borderRadius: '5px',
        padding: '20px',
        textAlign: 'left'
    }

    const imgStyle = {        
        borderRadius: '5px',        
        height: '300px',
        marginBottom: '50px'
    }

    return (
        <div>
            <div style={returnButtonStyle}>
                <Link to='/'>Return</Link>
            </div>
            <Header text={details.collectionName} />
            <div style={contentStyle}>
                <img src={details.artworkUrl100} alt={details.artistName} style={imgStyle} />
                <div style={detailStyle}>
                    <p>Artist: {details.artistName}</p>
                    <p>Price: $ {details.collectionPrice} {details.currency}</p>
                    <p>Genre: {details.primaryGenreName}</p>
                    <p>{details.copyright}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumDetails;