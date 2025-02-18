import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList() {
  const articles = [
    {
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods'...",
      image:
        "https://img.freepik.com/premium-vector/serene-hilltop-bench-countryside-vista-wooden-seat-panoramic-view-peaceful-retreat-nature_1197675-19450.jpg", // Replace with actual URL later
      date: "November 4, 2020",
      source: "Treehugger",
    },
    {
      title: "Nature makes you better",
      text: "We all know how good nature can make us feel. We've known it for millennia...",
      image: "https://blog.aspinallfoundation.org/hubfs/Nature.jpeg",
      date: "February 19, 2019",
      source: "National Geographic",
    },
    {
      title: "Grand Teton Renews Historic Crest Trail",
      text: "The linking together of the Cascade and Death Canyon trails at their heades...",
      image:
        "https://www.datocms-assets.com/50871/1630355944-winter-scenic-gtnp-jb-20200219-gtnp-9.jpg",
      date: "October 19, 2020",
      source: "National Parks Traveler",
    },
  ];

  return (
    <div className="newscard-list">
      <section className="newscard-list__section">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            text={article.text}
            image={article.image}
            date={article.date}
            source={article.source}
          />
        ))}
      </section>
    </div>
  );
}

export default NewsCardList;
