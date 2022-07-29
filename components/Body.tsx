import React from "react";

const Body = (props: {
  query: string;
  videos: Array<[]>;
  isAuthenticated: boolean;
  authenticate: Function;
}) => {
  console.log(props.videos[0]);

  const abbreviateNumber = (value: Number) => {
    var newValue = value;
    if (value >= 1000) {
      var suffixes = ["", "K", "M", "B", "T"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue = null;
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

  const calculateSol = (vid: any) => {
    console.log(vid.duration);
    return (
      vid.duration.seconds * 0.0001 +
      vid.duration.minutes * 0.001 +
      vid.duration.hours * 0.01
    );
  };

  return (
    <>
      {!props.isAuthenticated ? (
        <div className="h-full relative p-8 text-center border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-medium">No connected wallet</h2>

          <p className="mt-4 text-sm text-gray-500">
            Connect your solana wallet to access the plateform
          </p>

          <button
            onClick={() =>
              props.authenticate({ type: "sol" }).catch(function (error: any) {
                console.log(error);
              })
            }
            className="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Connect Wallet
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-4 h-4 ml-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      ) : props.videos ? (
        <div className="grid grid-cols-3 gap-6 pt-16 px-32 place-content-center">
          {props.videos.map((video: any) => (
            <div key={video.etag}>
              <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                <img
                  className="w-full"
                  src={video.snippet.thumbnails.medium.url}
                  alt=""
                />
                <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                  {`${calculateSol(video)} $SOL`}
                </div>
                <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                  <span className="mr-1 p-1 px-2 font-bold">
                    {video.snippet.liveBroadcastContent == "live"
                      ? "🔴 Live"
                      : video.duration.string}
                  </span>
                  <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                    {`${abbreviateNumber(Number(video.stats.viewCount))} Views`}
                    {/* 1.1k Views */}
                  </span>
                  <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                    {`${abbreviateNumber(Number(video.stats.likeCount))} Likes`}
                    {/* 105 Likes */}
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
            </div>
          ))}
        </div>
      ) : (
        <h1>No Video</h1>
      )}
    </>
  );
};

export default Body;
