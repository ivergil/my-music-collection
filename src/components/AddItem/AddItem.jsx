import * as React from 'react';
import './AddItem.css';

const AddItem = ({ updateCollection }) => {
    const initialNewItemState = {
        title: '',
        artist: '',
        year: '',
        genre: '',
    }
    const [newItem, setNewItem] = React.useState(initialNewItemState);
    const [error, setError] = React.useState('');
    const validate = () => {
        if (Object.keys(newItem).every((key) => newItem[key].length > 0)) {
            return true;
        }  
        return false;
     };

    return (
        <>
            <div className="add-item">
                <div>
                    <input placeholder="Title" value={newItem.title} onChange={e => setNewItem({ ...newItem, title: e.target.value })}/>
                    <input placeholder="Artist" value={newItem.artist} onChange={e => setNewItem({ ...newItem, artist: e.target.value })}/>
                    <input placeholder="Year" value={newItem.year} onChange={e => setNewItem({ ...newItem, year: e.target.value })}/>
                    <input placeholder="Genre" value={newItem.genre} onChange={e => setNewItem({ ...newItem, genre: e.target.value })}/>
                </div>
                <button onClick={() => {
                    if (validate()) {
                        setError('');
                        updateCollection(newItem);
                        setNewItem(initialNewItemState);
                    } else {
                        setError('Please fill out all fields.');
                    }
                }}>Add Item</button>
            </div>
            <div className="error-message">
                {error.length > 0 ? error : null}
            </div>
        </>
    );
}

export default AddItem;
