import { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Pagination } from 'antd';
import "../../styles/librarydetail.scss";

interface Book {
    id: number;
    library: number;
    name: string;
    author: string;
    publisher: string;
    quantity_in_library: number;
}

const LibraryDetail = () => {
    const [allBooks, setAllBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const getBooks = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://s-libraries.uz/api/v1/books/books/");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setAllBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentBooks = allBooks.slice(startIndex, endIndex);

    return (
        <div>
            <Header />
            <h1>Kitoblar</h1>

            {loading ? (
                <div className="loading-wrapper">
                    <div className="ball-1"></div>
                    <div className="ball-2"></div>
                </div>
            ) : (
                <>
                    {currentBooks.map((book) => (
                        <div className="books" key={book.id}>
                            <div className="book">
                                <h2>{book.name}</h2>
                                <p><strong>Author:</strong> {book.author}</p>
                                <p><strong>Publisher:</strong> {book.publisher}</p>
                                <p><strong>Quantity in Library:</strong> {book.quantity_in_library}</p>
                            </div>
                        </div>
                    ))}

                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={allBooks.length}
                        onChange={(page, pageSize) => {
                            setCurrentPage(page);
                            setPageSize(pageSize);
                        }}
                        style={{ marginTop: "20px", textAlign: "center" }}
                    />
                </>
            )}

            <Footer />
        </div>
    );
};

export default LibraryDetail;
