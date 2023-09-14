import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Task } from "@/models/task.model";
import { Result } from "./result";

Vue.use(Vuex);

const store: StoreOptions<Result<Task[]>> = {
  state: {
    success: true,
    message: undefined,
    errorCode: 200,
    version: "1.0.0",
    data: new Array<Task>(),
  },
  mutations: {
    addTask(state, task: Task) {
      state.data.push(task);
    },
    editTask(state, task: Task) {
      let taskIndex: number = state.data.findIndex((t) => t.id == task.id);
      state.data[taskIndex] = task;
    },
    removeTask(state, id: string) {
      let taskIndex: number = state.data.findIndex((t) => t.id == id);
      taskIndex > -1
        ? state.data.splice(taskIndex, 1)
        : new Error("Invalid index");
    },
  },
  actions: {
    addTask(contex, task: Task) {
      contex.commit("addTask", task);
    },
    editTask(contex, task: Task) {
      contex.commit("editTask", task);
    },
    removeTask(context, id: string) {
      context.commit("removeTask", id);
    },
  },
  getters: {
    tasks(state): Array<Task> {
      return state.data;
    },
  },
};

export default new Vuex.Store<Result<Task[]>>(store);
