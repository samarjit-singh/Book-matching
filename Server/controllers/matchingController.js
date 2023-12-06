const Book = require("../utils/data");
const { Criteria2Mapping, Criteria3Mapping } = require("../utils/mappings");

module.exports.findMatchingBooks = async (req, res, next) => {
  try {
    const { criteria1, criteria2, criteria3 } = req.body;

    if (!criteria1 || !criteria2 || !criteria3) {
      return res
        .status(400)
        .json({ error: "Please provide values for all criteria." });
    }

    const mappedCriteria2 = Criteria2Mapping[criteria2];
    const mappedCriteria3 = Criteria3Mapping[criteria3];

    if (mappedCriteria2 === undefined || mappedCriteria3 === undefined) {
      return res
        .status(400)
        .json({ error: "Invalid values for criteria2 or criteria3." });
    }

    const userVector = [
      parseFloat(criteria1),
      mappedCriteria2,
      mappedCriteria3,
    ];

    const allBooks = Book;

    const matchingBooks = allBooks
      .map((book) => {
        const bookVector = [book.criteria1, book.criteria2, book.criteria3];

        const differenceVector = userVector.map(
          (userVal, index) => userVal - bookVector[index]
        );

        const differenceMagnitude = Math.sqrt(
          differenceVector.reduce((sum, val) => sum + val ** 2, 0)
        );

        return {
          title: book.title,
          author: book.author,
          genre: book.genre,
          differenceMagnitude,
          userVector,
        };
      })
      .sort((a, b) => a.differenceMagnitude - b.differenceMagnitude);

    res.status(200).json({ matchingBooks });
  } catch (error) {
    console.error("Error finding matching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
