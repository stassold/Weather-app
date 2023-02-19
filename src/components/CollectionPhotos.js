import React, { useState } from 'react';
import { getCollectionById } from '/src/api/unsplashApi';

function CollectionPhotos() {
    const [id, setId] = useState('');
    const [collection, setCollection] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await getCollectionById(id);
        setCollection(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection ID:
                    <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
                </label>
                <button type="submit">Get collection</button>
            </form>
            {collection && (
                <div>
                    <h2>{collection.title}</h2>
                    <p>{collection.description}</p>
                    <ul>
                        {collection.photos.map((photo) => (
                            <li key={photo.id}>
                                <img src={photo.urls.small} alt={photo.description} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CollectionPhotos;
