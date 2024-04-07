import Marquee from "react-fast-marquee";
const BrakingNews = () => {
  return (
    <div className="flex my-8 bg-gray-200 p-2">
      <button className="btn rounded-sm px-6 bg-red-600 hover:bg-red-500 text-white">
        Latest
      </button>
      <Marquee >
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
    </div>
  );
};

export default BrakingNews;
