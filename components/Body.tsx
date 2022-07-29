import React from "react";

const Body = (props: { query: string; videos: Array<[]> }) => {
  console.log(props.videos[0]);

  const abbreviateNumber = (value) => {
    var newValue = value;
    if (value >= 1000) {
      var suffixes = ["", "k", "m", "b", "t"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue = "";
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum != 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );
        var dotLessShortValue = (shortValue + "").replace(
          /[^a-zA-Z 0-9]+/g,
          ""
        );
        if (dotLessShortValue.length <= 2) {
          break;
        }
      }
      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
  };

  return (
    <>
      {props.videos ? (
        <div className="grid grid-cols-3 gap-6 pt-16 px-32 place-content-center">
          {props.videos.map((video: any) => (
            <>
              <div
                key={video.etag}
                className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative"
              >
                <img
                  className="w-full"
                  src={video.snippet.thumbnails.medium.url}
                  alt=""
                />
                <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                  3 $SOL
                </div>
                <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                  <span className="mr-1 p-1 px-2 font-bold">10:53 min</span>
                  <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                    {/* {`${abbreviateNumber(Number(video.stats.viewCount))} Views`} */}
                    1.1k Views
                  </span>
                  <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                    {/* {`${abbreviateNumber(Number(video.stats.likeCount))} Likes`} */}
                    105 Likes
                  </span>
                </div>
                <div className="desc p-4 text-gray-800">
                  <a
                    href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
                    target="_new"
                    className="title truncate  font-bold block cursor-pointer hover:underline"
                  >
                    {video.snippet.title}
                  </a>
                  <a
                    href="https://www.youtube.com/user/sam14319"
                    target="_new"
                    className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                  >
                    {`@${video.snippet.channelTitle}`}
                  </a>
                  <span className="description truncate text-sm block py-2 border-gray-400 mb-2">
                    {video.snippet.description}
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <h1>No Video</h1>
      )}
    </>
  );
};

export default Body;
