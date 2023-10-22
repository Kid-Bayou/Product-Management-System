import img from "../assets/home-img.jpg";
function Home() {
  return (
    <>
      <div className="home-page">
        <h1 className="home-header"> Product Management System </h1>
        <img src={img} className="home-img" />
        <p>...............</p>
      </div>
    </>
  );
}

export default Home;
