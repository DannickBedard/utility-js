/**
  * Merge to file list together, because file liste are readOnly.
  * Will not make duplicates
  *
  * @param {array} fileLists
  * @return {FileList} New meged fileList
  */
mergeFileLists = (fileLists = []) => {
  const dataTransfer = new DataTransfer();
  const fileMap = new Map(); // To track unique files by name and size

  // Helper function to add files if they are not duplicates
  function addFiles(fileList) {
      for (let i = 0; i < fileList.length; i++) {
          const file = fileList[i];
          const fileKey = `${file.name}-${file.size}`; // Unique identifier

          if (!fileMap.has(fileKey)) {
              fileMap.set(fileKey, true);
              dataTransfer.items.add(file);
          }
      }
  }

  fileLists.forEach(fileList => addFiles(fileList));

  return dataTransfer.files; // Returns a new FileLis
}
