const db = require("../../service/initialization");
const { delete_list } = require("../stores/data");
const { deleted_docs } = require("../stores/dynamic_data");

async function deleteDataCollections() {
  const promises = delete_list.map(async (collection) => {
    try {
      const docs = await db.collection(collection).get();
      const deletePromises = docs.docs.map(async (doc) => {
        const documentRef = db.collection(collection).doc(doc.id);
        deleted_docs.row_count = deleted_docs.row_count + 1;
        return documentRef.delete();
      });
      return await Promise.all(deletePromises);
    } catch (error) {
      throw new Error(`Error deleting documents from ${collection}: ${error}`);
    }
  });

  try {
    await Promise.all(promises);
    console.log("\n" + deleted_docs.row_count + " have been deleted successfully.\n");
  } catch (error) {
    console.error(`Error deleting documents: ${error}`);
  }
}

module.exports = { deleteDataCollections };

  
