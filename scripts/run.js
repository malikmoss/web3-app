const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const [r1, r2, r3, r4] = await hre.ethers.getSigners
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
  
    let waveTurn = await waveContract.wave("This is me waving to myself.");
    await waveTurn.wait();
  
    waveCount = await waveContract.getTotalWaves();
  
    waveTurn = await waveContract.connect(randomPerson).wave("Hey there. Good to see you again.");
    await waveTurn.wait();
  
    waveCount = await waveContract.getTotalWaves();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();