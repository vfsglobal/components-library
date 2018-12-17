import { readdirSync } from "fs";
import { getFileName, capitalFirst } from "~/utils";

export const state = () => {
  return {
    componentFiles: []
  };
};

export const getters = {
  componentList({ componentFiles }) {
    return componentFiles.map(file => {
      var fileName = getFileName(file);

      return {
        text: capitalFirst(fileName),
        link: '/' + fileName
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
    commit("componentFiles", readdirSync("components/library"));
  }
};
