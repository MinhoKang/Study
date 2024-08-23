import BookItemSkeleton from "./BookItemSkeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <BookItemSkeleton key={`BookItemSkeleton-${idx}`} />);
};

export default BookListSkeleton;
