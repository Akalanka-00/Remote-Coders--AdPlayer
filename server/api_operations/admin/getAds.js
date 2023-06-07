const { URL } = require("url");
const collectionList = require("../../service/Collections");

async function getAdsData() {
  const adsCollectionRef = await collectionList.advertisementCollection.get();
  const adsList = adsCollectionRef.docs.map((doc) => {
    const data = doc.data();
    let imageUrl;
    try {
      imageUrl = new URL(data.ad_data);
    } catch (error) {
      console.error("Invalid URL: " + data.ad_data);
      imageUrl = null;
    }
    return {
      id: doc.id,
      ad_type_id: data.ad_type_id,
      name: data.name,
      resolution_id: data.resolution_id,
      published_date: data.publish_date,
      country: data.country,
      status: data.status,
      ad_data: imageUrl ? imageUrl.toString() : null, // Convert the URL object to a string
    };
  });
  return {
    ads: adsList,
    total: adsList.length,
  };
}

module.exports = async function (req, res) {
  try {
    const adsList = await getAdsData();
    res.send(adsList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
