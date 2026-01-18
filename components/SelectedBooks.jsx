import Button from "./Button.jsx";
import bookCover from "../src/assets/book test.jpg";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import AddBook from "../src/assets/add-book.png";
import MainPage from "../components/MainPage.jsx";

function SelectedBooks() {
  // return (
  //   <MainPage>
  //     <div className="selection">
  //       <h2 class="selection-text">You chose the following books:</h2>
  //       <div className="books">
  //         <div className="book">
  //           <div className="cover-wrapper">
  //             <img
  //               src={bookCover}
  //               className="selected-cover"
  //               alt="Sculpting in Time book cover"
  //             />
  //           </div>
  //           <p>Sculpting in Time</p>
  //         </div>
  //         <div className="book">
  //           <div className="cover-wrapper">
  //             <img
  //               src={AddBook}
  //               className="selected-cover"
  //               alt="Sculpting in Time book cover"
  //             />
  //           </div>
  //           <p>Add a second book</p>
  //         </div>
  //       </div>
  //       <Button size="big" color="green">
  //         Create story
  //       </Button>
  //     </div>
  //   </MainPage>
  // );
}

export default SelectedBooks;
