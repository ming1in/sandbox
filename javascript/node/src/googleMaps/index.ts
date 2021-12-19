import axios from "axios";

async function main() {
  async function getSavedPlaces() {
    const response = await axios.get(
      "https://www.google.com/maps/place/85+Broad+St/data=!4m2!3m1!1s0x89c25a141703be89:0x74c637bf3f5d8f7d"
    );

    return response;
  }

  const savedPlaces = await getSavedPlaces();

  console.log(savedPlaces);
}
main();
