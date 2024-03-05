const [productDetail, setProductDetail] = useState({
  title: "", // Change 'name' to 'title'
  image: false, // Initialize with 'false'
  category: "electronics",
  price: "",
});

const changeHandler = (e) => {
  setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
};
