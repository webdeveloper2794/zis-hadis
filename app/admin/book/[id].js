import AdminLayout from "@/components/AdminLayout/AdminLayout";

const BookDetails = () => {
  // const router = useRouter();
  // const { id } = router.query;
  // const [book, setBook] = useState(null);
  // const [chapters, setChapters] = useState([]);

  // useEffect(() => {
  //   if (!id) return;
    
  //   async function fetchBook() {
  //     const res = await fetch(`/api/books/${id}`);
  //     const data = await res.json();
  //     setBook(data);
  //     setChapters(data.chapters);
  //   }
  //   fetchBook();
  // }, [id]);

  return (
    <AdminLayout>
      {book && (
        <>
          <h1 className="text-2xl font-bold mb-6">{book.title.uz} / {book.title.ar}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map(chapter => (
              <div key={chapter._id} className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">{chapter.title.uz} / {chapter.title.ar}</h2>
                <p>Pages: {chapter.pageRange.start} - {chapter.pageRange.end}</p>
                <div className="mt-4">
                  <Link href={`/admin/chapter/${chapter._id}`} className="text-blue-500">
                    Manage Hadiths
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </AdminLayout>
  );
};

export default BookDetails;