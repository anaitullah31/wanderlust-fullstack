const PageHeader = ({ title, description }) => {
  return (
    <div className="mt-8 mb-3">
      <h2 className="text-4xl mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PageHeader;
