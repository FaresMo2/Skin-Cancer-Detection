import MainHeading from "../reusable-components/MainHeading";
import UploadImage from "./UploadImage";

function TryOut() {
  return (
    <div className="check mt-24">
      <div id="tryout" className="container mx-auto">
        <MainHeading
          title="Lets Try Out"
          description="lorem lorem Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. N Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. N Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio assumenda esse, quae ut quisquam, ullam laborum vero ex quis expedit sit amet consectetur adipisicing elit. Nam, distinctio assumenda esse, quae ut quisquam, ullam laborum vero ex quis expedit"
        />
        <UploadImage />
      </div>
    </div>
  );
}

export default TryOut;
