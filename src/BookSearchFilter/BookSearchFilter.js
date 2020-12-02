import React from 'react';
import './BookSearchFilter.css';

function BookSearchFilter(props) {
    const {handlePrintType, handleBookType} = props;

    return (
        <div className = 'filter_bar_container'>
            <label>Print Type:</label>
            <form
                action = ""
                className = 'print_type_filter_form'
                onChange = {e => handlePrintType(e.target.value)}>
                <select
                    name = 'print-type-filter'>
                    <option
                        value = 'all'>
                            all
                        </option>
                    <option
                        value = 'books'>
                            Only Books
                        </option>
                    <option
                        value = 'magazines'>
                            Only magazines
                        </option>
                    </select>
                </form>
                <label>Book Type:</label>
                <form
                    action = ""
                    className = 'book_type_filter_form'
                    onChange = {e => handleBookType(e.target.value)}>
                    <select
                        name = 'book-type-filter'>
                            <option
                                value = 'ebooks'>
                                    All eBooks
                                </option>
                            <option
                                value = 'free-ebooks'>
                                    Free eBooks
                                </option>
                            <option
                                value = 'paid-ebooks'>
                                    Paid eBooks
                                </option>
                            <option
                                value = 'full'>
                                    Fully Available eBooks
                                </option>
                            <option
                                value = 'partial'>
                                    Partially Available eBooks
                                </option>
                        </select>
                    </form>
        </div>
    );
}

export default BookSearchFilter;