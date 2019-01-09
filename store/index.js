import { readdirSync, statSync } from "fs";
import { getFileName, capitalFirst } from "~/utils";

var componentFilePath = "components/library";

export const state = () => {
  return {
    componentFiles: []
  };
};

export const getters = {
  componentList({ componentFiles }) {
    return componentFiles.map(fileObj => {
      var fileName = getFileName(fileObj.fileName);
      
      return {
        ...fileObj,
        name: fileName,
        text: capitalFirst(fileName),
        link: "/" + fileName
      };
    });
  }
};

export const mutations = {
  componentFiles(state, files) {
    state.componentFiles = files;
  }
};

export const actions = {
  nuxtServerInit({ commit }) {
    var fileNames = readdirSync(componentFilePath);
    
    commit(
      "componentFiles",
      fileNames.map(fileName => ({
        fileName,
        modifiedTime: statSync(componentFilePath + "/" + fileName).mtime
      }))
    );
  }
};
