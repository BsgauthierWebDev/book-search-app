import React from 'react';
import './BookSearchItem.css';

function BookSearchItem(props) {
    const {book} = props;

    let author;
    let title;
    let thumbnailUrl;
    let previewUrl;
    let snippet;
    let cost;

    if (book.volumeInfo) {
        author = book.volumeInfo.authors !== undefined
            ? book.volumeInfo.authors[0]
            : 'No authors listed'
        title = book.volumeInfo.title !== undefined
            ? book.volumeInfo.title
            : 'No authors listed';
        thumbnailUrl = book.volumeInfo.imageLinks.thumbnail !== undefined
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';
        previewUrl = book.volumeInfo.previewLink !== undefined
            ? book.volumeInfo.previewLink
            : 'https://books.google.com';
    } else {
        author = null;
        title = null;
        thumbnailUrl = null;
        previewUrl = null;
        snippet = null;
        cost = null;
    }

    if (book.searchInfo) {
        snippet = book.searchInfo.textSnippet !== undefined
            ? book.searchInfo.textSnippet
            : null;
    } else {
        snippet = null;
    }

    if (book.saleInfo) {
        cost = book.saleInfo.saleability === 'FOR SALE'
            ? '$' + book.saleInfo.listPrice.amount
            : null;
    } else {
        cost = null;
    }

    return (
        <div className = 'item_container'>
            <a href={previewUrl} target='_blank'>
                <li className = 'item_li'>
                    <img sec ={thumbnailUrl} className = 'item_image' alt = {`The cover of ${title}`}></img>
                    <div className = 'item_info'>
                        <h2 className = 'book_title'>{title}</h2>
                        <h4 className = 'book_author'>{author}</h4>
                        <div className = 'book_cost'>{cost}</div>
                        <p className = 'book_snippet'>{snippet}</p>
                    </div>
                </li>
            </a>
        </div>
    );
}

export default BookSearchItem;