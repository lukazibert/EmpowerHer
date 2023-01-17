import Tag from "../components/Tag";
import userIcon from "../assests/user-icon-white.png";
import CheckIcon from "../assests/check.png";



export default function ViewProfile(props) {
  const userObj = {
    userid: 1,
    username: "Rachel Kim",
    tags: ["Entrepreneur", "CompSci"],
    mentor: "true",
    myStory:
      "I had always been passionate about computer science, and after years of working in the industry, I decided it was time to start my own business. I put together a business plan, secured funding, and recruited a team of skilled developers. As the CEO of my own company, I faced many challenges and long hours, but I was determined to succeed. I worked tirelessly to build a strong foundation for the business and to create innovative software solutions for my clients.",
    posts: [
      {
        id: 1,
        username: "Rachel Kim",
        mentor: true,
        content:
          "I started my business from scratch, with nothing but a dream and a small loan from my family. I worked hard to build my brand and establish a loyal customer base, and I was relentless in my pursuit of success.",
        liked: true,
      },
    ],
  };

  return(
    <div
      className="view"
    >
      <div className="circle-img">
        <img
          src={userIcon}
          alt=""
          className="img-fluid"
          style={{ marginTop: "100px" }}
        />
      </div>
      <div className="name">
        <div className="username">{userObj.username}</div>
        <div className="">
          {userObj.mentor ? (
            <img src={CheckIcon} className="check img-fluid" />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around" style={{width: "100%"}}>
        {userObj.tags.map((tag) => {
          return <Tag text={tag} />;
        })}
      </div>
      <div className="my-story">
        <div className="my-story-title">My Story</div>
        {userObj.myStory}
      </div>
  </div>);
}
