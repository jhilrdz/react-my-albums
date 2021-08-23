import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumGridItem = ({ id, title, price, thumbnail, artist, artistName, currency, releaseDate, collectionType }) => {


    const maxTextLength = 30;
    const linkStype = {
        textDecoration: 'none',                   
    }
       
   const titleStyle = {
    fontWeight:'bold',
    fontSize: '16px',       
    marginTop: '5px',  
   }

   const mediaStyle = {
    fontWeight:'none',
    fontSize: '12px',     
    textAlign:'left',
    margin: '0px',
   }

    const divStyle = {
         border: `solid 3px none`,
         backgroundColor: 'white',                  
        borderRadius: '5px',
        padding: '10px',
        height: '230px',
        boxShadow: '10px 5px 5px lightgrey'
    }

    const imgStyle = {
        borderRadius: '5px',
        height: '150px',
    }

    const priceStyle = {
        textAlign: 'right',
        fontSize: '10px',
        fontWeight: 'none',
        margin: '0px',
        padding: '5px',
        
    }

    const artistStle = {
        margin: '0px',
        fontFamily: `'Roboto Condensed', sans-serif`,
        //borderBottom: `5px solid red`,
        color: 'black',
        fontSize: 'x-large'
    }
    
    const divMedia = {
        display: 'flex',
        justifyContent: 'space-between',      
    }

    return ( 
        <Link style={linkStype} to={`/album/${id}`}>
            <div style={divStyle} >
                <img src={thumbnail} style={imgStyle} alt={artistName} />
                <h1 style={artistStle}>{artistName}</h1>
                <h2 style={titleStyle}>{title.length > maxTextLength ? `${title.substring(0, maxTextLength)}...` : title }</h2>
                <div style={divMedia}>
                <h3 style={mediaStyle}>{collectionType} {`${new Date(releaseDate).getFullYear()}`}</h3>
                <p style={priceStyle} >$ {price} {currency}</p>
                </div>
            </div>
        </Link>
     )
}

AlbumGridItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    artist: PropTypes.number,
    artistName: PropTypes.string, 
    currency: PropTypes.string, 
    releaseDate: PropTypes.string,
    collectionType: PropTypes.string,
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default AlbumGridItem;