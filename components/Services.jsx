import Service from "../reusable-components/Service";
import { FaRocket } from "react-icons/fa";

function Services() {
  return (
    <div className="services">
      <div className="container mx-auto">
        <div className="service flex ju items-center">
          <div className="icon text-blue-600 bg-red-500">
            <FaRocket />
          </div>
          <div>
            <h3>Fares</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt,
              tempora dignissimos
            </p>
          </div>
        </div>
        <Service
          icon={FaRocket}
          title="Rocket Delivery"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Service
          icon={FaRocket}
          title="Rocket Delivery"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default Services;
