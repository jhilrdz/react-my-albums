import PropTypes from 'prop-types'
import AlbumGridItem from './Albumgriditem';

const AlbumGrid = ({ albums }) => {
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',        
        rowGap: '20px',
        columnGap: '20px',
    }

    return ( 
        <div style={style}>
            {albums.map(album => (
                <AlbumGridItem
                    key={album.collectionId}
                    id={album.collectionId}                    
                    artist={album.artistId}
                    artistName={album.artistName}
                    thumbnail={album.artworkUrl100}                    
                    price={((!album.collectionPrice) ? 'N/A' : album.collectionPrice)}
                    currency={album.currency}
                    releaseDate={album.releaseDate}
                    collectionType={album.collectionType}
                    title={album.collectionName} />
            ))}
        </div>
    )
}

AlbumGrid.propTypes = {
    albums: PropTypes.array.isRequired
}

export default AlbumGrid;