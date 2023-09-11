import factory from "../../ethereum/factory";

const Home = async () => {
  const campaign = await factory.methods.getDeployedCampaigns().call();
  console.log(campaign);

  return (
    <div>
      <div>Hello, World!</div>
    </div>
  );
};

export default Home;
