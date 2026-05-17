import DestinationCard from "../components/DestinationCard";
import FilterDestination from "../components/FilterDestination";
import PageHeader from "../components/PageHeader";

const DestinationsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/destinations`);
  const data = await res.json();
  const destinations = data.data;

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        title="Explore All Destinations"
        description="Find your perfect travel experience from our curated collection"
      />
      <FilterDestination />
      <h1>All Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
