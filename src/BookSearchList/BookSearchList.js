import React from 'react';
import './BookSearchList.css';
import BookSearchItem from '../BookSearchItem/BookSearchItem';

function BookSearchList(props) {
    const { bookResults } = props;
    const listOfBooks = bookResults.items
                        .map(( book, index ) => <BookSearchItem 
                                                    book={ book } 
                                                    key={ index } />); 

    return (
        <div>
            <section className = 'search_list_container'>
                <ul>
                    {listOfBooks}
                </ul>
            </section>
        </div>
    );
}

export default BookSearchList;