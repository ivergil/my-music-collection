import * as React from 'react';
import './Collection.css';

const Collection = ({ collection }) => {
    return collection.length > 0 ? (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                   {collection.map((item, idx) => (
                    <tr key={`item-${idx}`}>
                        <td>{item.title}</td>
                        <td>{item.artist}</td>
                        <td>{item.year}</td>
                        <td>{item.genre}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </>
    ) : (
        <h2>No results. Please add an item.</h2>
    ); 
}

export default Collection;