import FeatureItem from "./FeatureItem";

const features = [
  {
    color: "gray",
    title: "Awarded Agency",
    icon: "ChatBubbleBottomCenterTextIcon",
    description:
      "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.",
  },
  {
    color: "gray",
    title: "Free Revisions",
    icon: "ChatBubbleBottomCenterTextIcon",
    description:
      "Keep your user engaged by providing meaningful information. Remember that by this time, the user is curious.",
  },
  {
    color: "gray",
    title: "Verified Company",
    icon: "ChatBubbleBottomCenterTextIcon",
    description:
      "Write a few lines about each one. A paragraph describing a feature will be enough. Keep your user engaged!",
  },
];

function Features() {
  return (
    <div className="container mx-auto absolute left-0 right-0 -bottom-28 z-50">
      <ul className="features">
        {features.map((feature) => (
          <FeatureItem feature={feature} key={feature.title} />
        ))}
      </ul>
    </div>
  );
}

export default Features;
