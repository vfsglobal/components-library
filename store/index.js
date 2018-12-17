import { readdirSync } from "fs";
import { getFileName, capitalFirst } from "~/utils";

export const state = () => {
  return {
    files: []
  };
};

export const getters = {
  componentList({ files }) {
    return files.map(file => {
      var fileName = getFileName(file);

      return {
        text: capitalFirst(fileName),
        link: '/' + fileName
      };
    });
  }
};

export const mutations = {
  files(state, files) {
    state.files = files;
  }
};

export const actions = {
  nuxtServerInit({ commit }) {
    commit("files", readdirSync("components/library"));
  }
};
