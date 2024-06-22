function MainHeading({ title, description }) {
  return (
    <div className="main-heading flex justify-between items-center">
      <h2 className="title font-semibold w-1/2 text-9xl">{title}</h2>
      <p className="para  text-para flex-1 ">{description}</p>
    </div>
  );
}

export default MainHeading;
