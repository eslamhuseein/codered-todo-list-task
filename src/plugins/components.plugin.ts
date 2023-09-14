import Vue from "vue";
import HeaderComponent from "@/components/header/header.component.vue";
import TodoListComponent from "@/components/app-task-list/app-task-list.component.vue";
import AddTaskComponent from "@/components/app-task-list/app-new-task/app-new-task.component.vue";
import TasksListComponent from "@/components/app-task-list/app-task-tree/app-task-tree.component.vue";

Vue.component("tl-header", HeaderComponent);
Vue.component("tl-app-task-list", TodoListComponent);
Vue.component("tl-app-new-task", AddTaskComponent);
Vue.component("tl-app-task-tree", TasksListComponent);
